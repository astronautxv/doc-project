import mysql.connector


def save_data(propertie1, propertie2, propertie3):
    database = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="test"
    )

    cursor = database.cursor()

    try:
        sql = "INSERT INTO document (propertie1,propertie2,propertie3) VALUES (%s, %s, %s)"

        cursor.execute(sql, (propertie1, propertie2, propertie3))

        database.commit()

        return {"id": cursor.lastrowid, "status": True}
    except:
        return {"id": 0, "status": False}