# from flask import Blueprint, request, jsonify
# from flask_cors import CORS
# from database import cursor, db

# api_blueprint = Blueprint("api", __name__)
# CORS(api_blueprint)  # Enable CORS for all API routes

# # Signup User
# @api_blueprint.route("/signup", methods=["POST"])
# def signup():
#     data = request.json
#     cursor.execute("INSERT INTO users (email, password) VALUES (%s, %s)", (data["email"], data["password"]))
#     db.commit()
#     return jsonify({"message": "User registered successfully"})

# # Login User
# @api_blueprint.route("/login", methods=["POST"])
# def login():
#     data = request.json
#     cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (data["email"], data["password"]))
#     user = cursor.fetchone()
#     if user:
#         return jsonify({"message": "Login successful"})
#     return jsonify({"error": "Invalid credentials"}), 401

# # Get Products
# @api_blueprint.route("/products", methods=["GET"])
# def get_products():
#     cursor.execute("SELECT * FROM products")
#     products = cursor.fetchall()
#     return jsonify([{"id": p[0], "name": p[1], "price": p[2]} for p in products])

# # Get Cart Items
# @api_blueprint.route("/cart", methods=["GET"])
# def get_cart():
#     cursor.execute("SELECT * FROM cart")
#     cart_items = cursor.fetchall()
#     return jsonify([{"id": c[0], "user_id": c[1], "product_id": c[2]} for c in cart_items])





# from flask import Blueprint, request, jsonify
# from models import create_user, get_user, get_products

# auth_routes = Blueprint('auth', __name__)
# product_routes = Blueprint('products', __name__)

# @auth_routes.route('/signup', methods=['POST'])
# def signup():
#     data = request.json
#     create_user(data['name'] ,data['email'], data['password'])
#     return jsonify({"message": "User registered successfully"}), 200

# @auth_routes.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     user = get_user(data['email'], data['password'])
#     if user:
#         return jsonify({"message": "Login successful"}), 200
#     return jsonify({"message": "Invalid credentials"}), 401

# @product_routes.route('/products', methods=['GET'])
# def products():
#     products = get_products()
#     return jsonify([{"id": p[0], "name": p[1], "price": p[2]} for p in products])
