import mysql.connector
from config import USER, PASSWORD, HOST

db_name='seasonal_produce'

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
        connection = connect_to_db('seasonal_produce')
        cursor = connection.cursor()
        query = f"SELECT vegetable_name FROM Vegetable WHERE {month} = 1"
        cursor.execute(query)
        produce = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return produce
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    finally:
        if connection:
            connection.close()
            print("Get plants DB connection is closed")


def get_fruits_for_month(month):
    try:
        connection = connect_to_db('seasonal_produce')
        cursor = connection.cursor()
        query = f"SELECT fruit_name FROM Fruit WHERE {month} = 1"
        cursor.execute(query)
        fruit = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return fruit
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    finally:
        if connection:
            connection.close()
            print("Get plants DB connection is closed")


def get_legumes_for_month(month):
    try:
        connection = connect_to_db('seasonal_produce')
        cursor = connection.cursor()
        query = f"SELECT legume_name FROM Legumes WHERE {month} = 1"
        cursor.execute(query)
        legume = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return legume
    except Exception as e:
        raise DbConnectionError(f"Error fetching produce: {str(e)}")
    finally:
        if connection:
            connection.close()
            print("Get plants DB connection is closed")



# # Elisa's code to Search plants by season - duplicate of above, using different DB and %s search term
# def get_plants_by_season(month_name):
#     try:
#         db_name = "thirty_kitchen_database"
#         connection = connect_to_db(db_name)
#         my_cursor = connection.cursor()
#         print("Get plants function connection to DB: %s" % db_name)

#         # Query to select all product within a given category
#         query = """SELECT plant_name
#                    FROM plants
#                    WHERE month_name = %s
#                    ORDER BY plant_name;"""
#         my_cursor.execute(query, (month_name,))
#         result = my_cursor.fetchall() # this is a list with db records where each record is a tuple
#         my_cursor.close()

#         # Convert the result to a list of dictionaries
#         columns = [col[0] for col in my_cursor.description]
#         result = [dict(zip(columns, row)) for row in result]

#         print(result)
#         return result

#     except Exception:
#         raise DbConnectionError("Failed to read data from DB")

#     finally:
#         if connection:
#             connection.close()
#             print("Get plants DB connection is closed")

# get_plants_by_season("August")


# Insert new customer on sign_up
def insert_new_customer(record):
    try:
        #  connect to db
        db_name = "thirty_kitchen_database"
        connection = connect_to_db(db_name)
        my_cursor = connection.cursor()

        #  Query to insert customer (ID auto increments, so no need to add)
        query = """INSERT INTO customers (first_name, last_name, email_address, saved_recipe) 
                   VALUES (%s, %s, %s, %s)"""
        values = (
            record['first_name'],
            record['last_name'],
            record['email_address'],
            record['saved_recipe']
        )

        my_cursor.execute(query, values)
        connection.commit()  # VERY IMPORTANT, otherwise, rows would not be added or reflected in the DB!
        my_cursor.close()
        print(f"{record['email_address']} added to database")

    except Exception:
        raise DbConnectionError()

    finally:
        if connection:
            connection.close()
            print("Insert customer DB connection is closed")


# testrecord = {
#     'first_name': 'Tony',
#     'last_name': 'Tiger',
#     'email_address': 'bigtony@mail.com',
#     'saved_recipe': 'Ratatouille'
#         }
# insert_new_customer(testrecord)