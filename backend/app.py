# # from flask import Flask, jsonify
# # from flask_cors import CORS


# # app = Flask(__name__)
# # CORS(app)

# # # Sample data
# # popular_products = [
# #     {"id": 1, "name": "Smartphone", "price": 699},
# #     {"id": 2, "name": "Laptop", "price": 1200},
# #     {"id": 3, "name": "Headphones", "price": 150},
# # ]

# # @app.route('/popular', methods=['GET'])
# # def get_popular_products():
# #     return jsonify(popular_products)

# # if __name__ == '__main__':
# #     app.run(debug=True)




# from flask import Flask
# from flask_cors import CORS
# from routes import api_blueprint  # Import routes.py

# app = Flask(__name__)
# CORS(app)  # Enable CORS

# # Register Blueprint
# app.register_blueprint(api_blueprint)

# if __name__ == "__main__":
#     app.run(debug=True)



from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="nishika20",
    database="ecommerce"
)
cursor = db.cursor()

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    name, email, password = data["name"], data["email"], data["password"]

    # Check if user exists
    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    if cursor.fetchone():
        return jsonify({"success": False, "message": "User already exists!"})

    # Insert user into DB
    cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
    db.commit()
    return jsonify({"success": True})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email, password = data["email"], data["password"]

    cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (email, password))
    user = cursor.fetchone()
    
    if user:
        return jsonify({"success": True, "userId": user[0]})
    return jsonify({"success": False, "message": "Invalid email or password!"})

@app.route('/products', methods=['GET'])
def get_products():
    category = request.args.get('category', '')
    query = "SELECT * FROM products WHERE category=%s"
    cursor.execute(query, (category,))
    products = cursor.fetchall()

    product_list = []
    for product in products:
        product_list.append({
            "id": product[0],
            "name": product[1],
            "category": product[2],
            "price": float(product[3]),
            "image_url": product[4]
        })

    return jsonify(product_list)


# @app.route("/popular-products", methods=["GET"])
# def get_popular_products():
#     cursor.execute("SELECT id, name, price, COALESCE(image_url, 'https://yourdomain.com/fallback.jpg') FROM products ORDER BY RAND() LIMIT 6")
#     products = cursor.fetchall()
#     return jsonify(products)



@app.route("/popular-products", methods=["GET"])
def get_popular_products():
    cursor.execute("SELECT id, name, price, COALESCE(image_url, 'https://yourdomain.com/fallback.jpg') FROM products ORDER BY RAND() LIMIT 6")
    products = cursor.fetchall()

    # Convert list of tuples into list of dictionaries
    product_list = [
        {"id": p[0], "name": p[1], "price": p[2], "image_url": p[3]} for p in products
    ]

    return jsonify(product_list)  # ✅ Now returns a list of JSON objects



    
if __name__ == "__main__":
    app.run(debug=True)

