from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json
from db_utils import get_produce_for_month, get_saved_recipes, save_recipe, create_user, login_user

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])


# GET request to get seasonal vegetables
@app.route('/api/seasonal-produce', methods=['GET'])
def seasonal_produce():
    # Extract month from request
    month = request.args.get('month', '').lower()
    # Checkk if provided month is valid
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    # Get seasonal vegetables for the given month
    produce = get_produce_for_month(month,'Vegetables', 'vegetable_name')
    return jsonify({"produce": produce})

# GET request to get seasonal fruits
@app.route('/api/seasonal-fruits', methods=['GET'])
def seasonal_fruits():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    fruits = get_produce_for_month(month,'Fruits', 'fruit_name')
    return jsonify({"fruits": fruits})

# GET request to get seasonal legumes
@app.route('/api/seasonal-legumes', methods=['GET'])
def seasonal_legumes():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    legumes = get_produce_for_month(month,'Legumes', 'legume_name')
    return jsonify({"legumes": legumes})

# GET request to get seasonal nuts
@app.route('/api/seasonal-nuts', methods=['GET'])
def seasonal_nuts():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    nuts = get_produce_for_month(month,'NutsAndSeeds', 'nut_seed_name')
    return jsonify({"nuts": nuts})

# GET request to get seasonal herbs
@app.route('/api/seasonal-herbs', methods=['GET'])
def seasonal_herbs():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    herbs = get_produce_for_month(month,'HerbsAndSpices', 'herb_name')
    return jsonify({"herbs": herbs})

# GET request to get seasonal grains
@app.route('/api/seasonal-grains', methods=['GET'])
def seasonal_grains():
    month = request.args.get('month', '').lower()
    if month not in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']:
        return jsonify({"error": "Invalid month"}), 400
    grains = get_produce_for_month(month,'Grains', 'grain_name')
    return jsonify({"grains": grains})

# POST request to add new customer on sign-up
@app.route ('/signup', methods=['POST'])
def add_new_customer():
    try:
        record = request.get_json()
        customer_id = create_user(record)
        # Add customer_id to the record
        record['customer_id'] = customer_id  
        print(record)
        return jsonify(record)
    except Exception as e:
        print(f"Error adding new customer at endpoint: {e}")
        return jsonify({"error": str(e)}), 500
    
    
# POST request to login customer
@app.route('/login', methods=['POST'])
def login_customer():
    record = request.get_json()
    email_address = record['email_address']
    password = record['password']

    try:
        result = login_user(email_address, password)
        if result:
            response = {
                'success': True,
                'customer_id': result['customer_id'],
                'first_name': result['first_name']
            }
            return jsonify(response)
        else:
            response = {'success': False, 'message': 'Invalid email or password'}
            return jsonify(response), 401

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


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


# GET request returns recipes from Edamam API
@app.route('/recipes', methods=['GET'])
def get_recipes():
    type = "public"
    # Default to 'carrot' if no query parameter is provided
    q = request.args.get('q', 'carrot')  
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
