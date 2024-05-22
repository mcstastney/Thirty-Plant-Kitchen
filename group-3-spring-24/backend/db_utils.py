import mysql.connector
from config import USER, PASSWORD, HOST

class DbConnectionError(Exception):
    pass

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
