from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json
# from db_utils import get_plants_by_season, insert_new_customer
from db_utils import get_produce_for_month, get_fruits_for_month, get_legumes_for_month, get_saved_recipes, save_recipe, create_user

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# Get request returns plants by month
@app.route('/api/seasonal-produce', methods=['GET'])
def seasonal_produce():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    produce = get_produce_for_month(month)
    return jsonify({"produce": produce})


@app.route('/api/seasonal-fruits', methods=['GET'])
def seasonal_fruits():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    fruits = get_fruits_for_month(month)
    return jsonify({"fruits": fruits})

@app.route('/api/seasonal-legumes', methods=['GET'])
def seasonal_legumes():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    legumes = get_legumes_for_month(month)
    return jsonify({"legumes": legumes})


# POST request to add new customer on sign-up
@app.route ('/signup', methods=['POST'])
def add_new_customer():
    record = request.get_json()
    customer_id = create_user(record)
    record['customer_id'] = customer_id  # Add customer_id to the record
    print(record)
    return jsonify(record)


# PUT request to save recipes to customer account
@app.route('/save-recipe', methods=['PUT'])
def save_recipe_endpoint():
    recipe = request.get_json()
    try:
        save_recipe(recipe)
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# GET request to return saved recipes from customer account
@app.route('/view-saved-recipes')
def return_recipes_endpoint():
    customer_id = request.args.get('customer_id')
    try:
        recipes = get_saved_recipes(customer_id)
        return jsonify(recipes), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# # Test the seasonal search function 
# def test_get_plants_by_season():
#     try:
#         month = 'May'
#         result = get_plants_by_season(month)    
#     except Exception as e:
#         print("Error:", e)
# test_get_plants_by_season()

# Test the seasonal search function 
def test_get_produce_for_month():
    try:
        month = 'May'
        result = get_produce_for_month(month)    
    except Exception as e:
        print("Error:", e)
test_get_produce_for_month()


# GET request returns recipes from Edamam API
@app.route('/recipes', methods=['GET'])
def get_recipes():
    type = "public"
    q = request.args.get('q', 'carrot')  # Default to 'carrot' if no query parameter is provided
    app_id = "de86b12f" 
    app_key = "102cc4a389aae2a2a2a6b136d4a7a0cc" 
    mealType = request.args.get('mealType', 'Dinner')
    dishType = request.args.get('dishType', 'Main course')
    from_index = int(request.args.get('from', 0))
    to_index = int(request.args.get('to', 5))

    params = {
        'type': type,
        'q': q,
        'app_id': app_id,
        'app_key': app_key,
        'mealType': mealType,
        'dishType': dishType,
        'from': from_index,
        'to': to_index
    }

    url_recipe = "https://api.edamam.com/api/recipes/v2"
    response = requests.get(url_recipe, params=params)

    if response.ok:
        recipes = response.json()
        return jsonify(recipes)
    else:
        return jsonify({'error': 'Invalid request'}), 400

if __name__ == '__main__':
    app.run(debug=True)
