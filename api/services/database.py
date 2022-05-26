import mysql.connector

def get_items():
    database = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="test"
    )

    cursor = database.cursor()

    cursor.execute("SELECT * FROM producto")

    results = cursor.fetchall()

    return results

def save_data():
    database = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="test"
    )

    cursor = database.cursor()

    try:
        sql = "INSERT INTO producto (nombre) VALUES ('asdasd')"

        cursor.execute(sql)

        database.commit()

        return {"id": cursor.lastrowid, "status": True}
    except:
        return {"id": 0, "status": False}

def login(correo, contrasena):
    # Creating the connection
    database = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="test"
    )

    cursor = database.cursor()

    cursor.execute("SELECT * FROM users WHERE user_name = %s AND password = %s", (correo, contrasena))

    results = cursor.fetchall()

    row_count = cursor.rowcount

    if row_count > 0:
        for result in results:
            return {"exists": row_count, "data": {"user_id": result[0], "type": result[3]}}
    else:
        return {"exists": 0, "data": ""}
