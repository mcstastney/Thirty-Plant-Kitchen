from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json
from db_utils import get_plants_by_season, create_user, save_recipe, get_saved_recipes, login_user

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# POST request to add new customer on sign-up
@app.route ('/signup', methods=['POST'])
def add_new_customer():
    record = request.get_json()
    customer_id = create_user(record)
    record['customer_id'] = customer_id  # Add customer_id to the record
    print(record)
    return jsonify(record)


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
        else:
            response = {'success': False, 'message': 'Invalid email or password'}

        return jsonify(response)

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})



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
    

# GET request returns plants by season
@app.route('/search')
def search_plants():
    month = request.args.get('month')
    res = get_plants_by_season(month)  # Function to search records by season
    return jsonify(res)


# Test the seasonal search function 
def test_get_plants_by_season():
    try:
        month = 'May'
        result = get_plants_by_season(month)    
    except Exception as e:
        print("Error:", e)
test_get_plants_by_season()


# GET request returns recipes from Edamam API
@app.route('/recipes', methods=['GET'])
def get_recipes():
    type = "public"
    q = request.args.get('q', 'carrot')  # Default to 'carrot' if no query parameter is provided
    
    app_id = "de86b12f" 
    # Get your app ID from Edamam API account
    
    app_key = "102cc4a389aae2a2a2a6b136d4a7a0cc" 
    # Get your app key from Edamam API account
    
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
