# from database import cursor, db

# # Create Users Table
# cursor.execute("""
#     CREATE TABLE IF NOT EXISTS users (
#         id INT AUTO_INCREMENT PRIMARY KEY,
#         email VARCHAR(100) UNIQUE NOT NULL,
#         password VARCHAR(100) NOT NULL
#     )
# """)

# # Create Products Table
# cursor.execute("""
#     CREATE TABLE IF NOT EXISTS products (
#         id INT AUTO_INCREMENT PRIMARY KEY,
#         name VARCHAR(100) NOT NULL,
#         price FLOAT NOT NULL
#     )
# """)

# # Create Cart Table
# cursor.execute("""
#     CREATE TABLE IF NOT EXISTS cart (
#         id INT AUTO_INCREMENT PRIMARY KEY,
#         user_id INT,
#         product_id INT,
#         FOREIGN KEY (user_id) REFERENCES users(id),
#         FOREIGN KEY (product_id) REFERENCES products(id)
#     )
# """)

# db.commit()




# from db import db, cursor

# def create_user(name, email, password):
#     cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
#     db.commit()

# def get_user(email, password):
#     cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (email, password))
#     return cursor.fetchone()

# def get_products():
#     cursor.execute("SELECT * FROM products")
#     return cursor.fetchall()
