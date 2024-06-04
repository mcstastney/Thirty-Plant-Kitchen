import mysql.connector;
from config import USER, PASSWORD, HOST;
import json;
import bcrypt;
from mysql.connector import Error;

db_name='thirty_plant_kitchen'

class DbConnectionError(Exception):
    pass

# Helper code to establish database connection
def connect_to_db(db_name):
    try:
        connection = mysql.connector.connect(
            host=HOST,
            user=USER,
            password=PASSWORD,
            database=db_name
        )
        print("Connection to database successful")
        return connection
    except Exception as e:
        raise DbConnectionError(f"Failed to connect to database: {str(e)}")
        

def get_produce_for_month(month):
    try:
        connection = connect_to_db('thirty_plant_kitchen')
        cursor = connection.cursor()
        query = f"SELECT vegetable_name FROM Vegetable WHERE {month} = 1"
        cursor.execute(query)
        produce = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return produce
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    # finally:
    #     if connection:
    #         connection.close()
    #         print("Get plants DB connection is closed")


def get_fruits_for_month(month):
    try:
        connection = connect_to_db('thirty_plant_kitchen')
        cursor = connection.cursor()
        query = f"SELECT fruit_name FROM Fruit WHERE {month} = 1"
        cursor.execute(query)
        fruit = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return fruit
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    # finally:
    #     if connection:
    #         connection.close()
    #         print("Get plants DB connection is closed")


def get_legumes_for_month(month):
    try:
        connection = connect_to_db('thirty_plant_kitchen')
        cursor = connection.cursor()
        query = f"SELECT legume_name FROM Legumes WHERE {month} = 1"
        cursor.execute(query)
        legume = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return legume
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    # finally:
    #     if connection:
    #         connection.close()
    #         print("Get plants DB connection is closed")


def get_nuts_for_month(month):
    try:
        connection = connect_to_db('thirty_plant_kitchen')
        cursor = connection.cursor()
        query = f"SELECT nut_seed_name FROM NutsAndSeeds WHERE {month} = 1"
        cursor.execute(query)
        nuts = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return nuts
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    # finally:
    #     if connection:
    #         connection.close()
    #         print("Get plants DB connection is closed")


def get_herbs_for_month(month):
    try:
        connection = connect_to_db('thirty_plant_kitchen')
        cursor = connection.cursor()
        query = f"SELECT herb_name FROM HerbsAndSpices WHERE {month} = 1"
        cursor.execute(query)
        herbs = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return herbs
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    # finally:
    #     if connection:
    #         connection.close()
    #         print("Get plants DB connection is closed")



# Insert new customer on sign_up
def create_user(record):
    try:
        #  connect to db
        db_name = "thirty_plant_kitchen"
        connection = connect_to_db(db_name)
        my_cursor = connection.cursor()

        # Hash the password
        hashed_password = bcrypt.hashpw(record['password'].encode('utf-8'), bcrypt.gensalt())

        #  Query to insert customer (ID auto increments, so no need to add)
        query = """INSERT INTO customers (first_name, last_name, email_address, password) 
                   VALUES (%s, %s, %s, %s)"""
        values = (
            record['first_name'],
            record['last_name'],
            record['email_address'],
            hashed_password,
        )

        my_cursor.execute(query, values)
        connection.commit()

        # Return customer_id for use in redux store
        customer_id = my_cursor.lastrowid

        my_cursor.close()
        print(f"{record['email_address']} added to database with customer_id {customer_id}")

        return customer_id

    except Exception as e:
        raise DbConnectionError(f"Error creating user: {str(e)}")

    finally:
        if connection:
            connection.close()
            print("Insert customer DB connection is closed")


# testrecord = {
#     'first_name': 'Tony',
#     'last_name': 'Tiger',
#     'email_address': 'bigtony@mail.com',
#     'password': 'Testingpassword6',  
#         }
# create_user(testrecord)


# Get user by credentials for login
def login_user(email_address, password):
    try:
        # Connect to db
        db_name = "thirty_plant_kitchen"
        connection = connect_to_db(db_name)
        my_cursor = connection.cursor()

        # Query to fetch user by email
        query = """SELECT customer_id, first_name, password FROM customers WHERE email_address = %s"""
        my_cursor.execute(query, (email_address,))
        result = my_cursor.fetchone()

        if result and bcrypt.checkpw(password.encode('utf-8'), result[2].encode('utf-8')):
            # If password matches, return user details
            return {
                'customer_id': result[0],
                'first_name': result[1]
            }
        else:
            # If password doesn't match or user not found
            return None

    except Exception as e:
        print(f"Error: {e}")
        return None

    finally:
        if connection:
            connection.close()
            print("Login DB connection is closed")


# Save recipe to customer account
def save_recipe(recipe):
    try:
        db_name = "thirty_plant_kitchen"
        connection = connect_to_db(db_name)
        my_cursor = connection.cursor()

        # Query to insert a saved recipe
        query = """INSERT INTO saved_recipes (customer_id, label, url, ingredients, servings) 
                   VALUES (%s, %s, %s, %s, %s)"""
        values = (
            recipe['customer_id'],
            recipe['label'],
            recipe['url'],
            json.dumps(recipe['ingredients']),  # Save ingredients as a JSON string
            recipe['servings']
        )

        my_cursor.execute(query, values)
        connection.commit()  # VERY IMPORTANT, otherwise, rows would not be added or reflected in the DB!

        my_cursor.close()
        print("Recipe saved successfully")

        return {'status': 'success'}

    except Exception as e:
        print(f"Error saving recipe: {str(e)}")
        raise DbConnectionError()

    # finally:
    #     if connection:
    #         connection.close()
    #         print("Save recipe DB connection is closed")


# Display saved recipes to customer's account
def get_saved_recipes(customer_id):
    db_name = "thirty_plant_kitchen"
    connection = connect_to_db(db_name)
    my_cursor = connection.cursor()

    query = """SELECT label, url, ingredients, servings
                FROM saved_recipes
                WHERE customer_id = %s"""
    my_cursor.execute(query, (customer_id,))
    recipes = my_cursor.fetchall()

    my_cursor.close()
    connection.close()

    # Format the recipes to a list of dictionaries
    recipes_list = []
    for (label, url, ingredients, servings) in recipes:
        recipes_list.append({
            'label': label,
            'url': url,
            'ingredients': ingredients.split(', '),
            'servings': servings
        })

    return recipes_list
