from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

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
