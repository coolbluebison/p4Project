#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Farmer, Review, Cart, CartItem, Order, Product


# Views go here!

## Login - Session - Logout

class Login(Resource):
    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']
        user = User.query.filter(User.username==username).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
            else: 
                return {'Error':'password is wrong'},  401
        return {'Error':'User does not exist'}, 401

api.add_resource(Login, '/login')

class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict(only=('username','id'))
        else:
            return {'message':'Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {}, 204

api.add_resource(Logout, '/logout')



@app.route('/')
def index():
    return '<h1>Project Server</h1>'


# Need a POST, GET, PATCH, DELETE
# Normal users - POST, GET
# users/<int:id> - PATCH, DELETE


class UserNorm(Resource):

    # get all users   
    def get(self):
        users_to_get = User.query.all()
        data = [user.to_dict() for user in users_to_get]

        return data, 200
    
    # post a new user
    def post(self):
        user_to_create = request.get_json()

        try:
            new_user = User(   
                username = user_to_create['username'],
                email = user_to_create['email'],
                password_hash = user_to_create['password'],
                user_type = None
            )

            db.session.add(new_user)
            db.session.commit()
            return new_user.to_dict(), 201

        except:
            raise Exception('There was an error while creating the user')

api.add_resource(UserNorm, '/user_table')

class UserById(Resource):
    
    def get(self, id):
        
        user_to_choose = User.query.filter_by(id=id).first() 

        return user_to_choose.to_dict(), 200
    
    def patch(self, id):

        data_to_patch_from = request.get_json()

        user_to_choose = User.query.filter_by(id=id).first() 

        if user_to_choose != None:
            for field in data_to_patch_from:
                setattr(user_to_choose, field ,data_to_patch_from[field])
        else:
            return {'error':'the user does not exist'}, 404
        
    def delete(self, id):

        user_to_choose = User.query.filter_by(id=id).first() 

        if user_to_choose != None:
            db.session.delete(user_to_choose)
            db.session.commit()
            return {}, 202
        else:
            return {'error':'the user does not exist'}, 404

api.add_resource(UserById, '/user_table/<int:id>')


# Farmer routes 

class FarmerNorm(Resource):

    def get(self):
        farmers = Farmer.query.all()
        data = [farmer.to_dict() for farmer in farmers]
        return data, 200

    def post(self):
        farmer_data = request.get_json()
        try:
            new_farmer = Farmer (
                name=farmer_data['name'], 
                address=farmer_data['address']
            )
            db.session.add(new_farmer)
            db.session.commit()
            return new_farmer, 201
        except:
            raise Exception('Error while creating the farmer')

api.add_resource(FarmerNorm, '/farmer_table')

class FarmerById(Resource):

    def get(self, id):
        farmer = Farmer.query.filter_by(id=id).first()
        return farmer.to_dict(), 200

    def patch(self, id):
        data_to_patch = request.get_json()
        farmer = Farmer.query.filter_by(id=id).first()
        if farmer:
            for field in data_to_patch:
                setattr(farmer, field, data_to_patch[field])
        else:
            return {'error': 'The farmer does not exist'}, 404

    def delete(self, id):
        farmer = Farmer.query.filter_by(id=id).first()
        if farmer:
            db.session.delete(farmer)
            db.session.commit()
            return {}, 202
        else:
            return {'error': 'The farmer does not exist'}, 404

api.add_resource(FarmerById, '/farmer_table/<int:id>')


# Review routes 

class ReviewNorm(Resource):

    def get(self):
        reviews = Review.query.all()
        data = [review.to_dict() for review in reviews]
        return data, 200

    def post(self):
        review_data = request.get_json()
        try:
            new_review = Review(
                content=review_data['content'],
                rating=review_data['rating'],
                user_id=review_data['user_id'],
                product_id=review_data['product_id'],
                created_at=review_data.get('created_at', None),
                updated_at=review_data.get('updated_at', None)
            )
            db.session.add(new_review)
            db.session.commit()
            return new_review, 201
        except:
            raise Exception('Error while creating the review')

api.add_resource(ReviewNorm, '/review_table')

class ReviewById(Resource):

    def get(self, id):
        review = Review.query.filter_by(id=id).first()
        if review:
            return review.to_dict(), 200
        else:
            return {'error': 'The review does not exist'}, 404

    def patch(self, id):
        data_to_patch = request.get_json()
        review = Review.query.filter_by(id=id).first()
        if review:
            for field in data_to_patch:
                setattr(review, field, data_to_patch[field])
            db.session.commit()
            return review.to_dict(), 200
        else:
            return {'error': 'The review does not exist'}, 404

    def delete(self, id):
        review = Review.query.filter_by(id=id).first()
        if review:
            db.session.delete(review)
            db.session.commit()
            return {}, 202
        else:
            return {'error': 'The review does not exist'}, 404

api.add_resource(ReviewById, '/review_table/<int:id>')


# --- Cart routes ---

class CartNorm(Resource):

    def get(self):
        carts = Cart.query.all()
        data = [cart.to_dict() for cart in carts]
        return data, 200

    def post(self):
        cart_data = request.get_json()
        try:
            new_cart = Cart(
                user_id=cart_data['user_id'],
                cart_total=cart_data.get('cart_total', 0)  # Default to 0 if not provided
            )
            db.session.add(new_cart)
            db.session.commit()
            return new_cart.to_dict(), 201
        except:
            raise Exception('Error while creating the cart')

api.add_resource(CartNorm, '/cart_table')

class CartById(Resource):

    def get(self, id):
        cart = Cart.query.filter_by(id=id).first()
        if cart:
            return cart.to_dict(), 200
        else:
            return {'error': 'The cart does not exist'}, 404

    def patch(self, id):
        data_to_patch = request.get_json()
        cart = Cart.query.filter_by(id=id).first()
        if cart:
            for field in data_to_patch:
                setattr(cart, field, data_to_patch[field])
            db.session.commit()
            return cart.to_dict(), 200
        else:
            return {'error': 'The cart does not exist'}, 404

    def delete(self, id):
        cart = Cart.query.filter_by(id=id).first()
        if cart:
            db.session.delete(cart)
            db.session.commit()
            return {}, 202
        else:
            return {'error': 'The cart does not exist'}, 404

api.add_resource(CartById, '/cart_table/<int:id>')


# CartItem routes

class CartItemNorm(Resource):

    def get(self):
        cart_items = CartItem.query.all()
        data = [item.to_dict() for item in cart_items]
        return data, 200

    def post(self):
        cart_item_data = request.get_json()
        try:
            new_cart_item = CartItem(
                cart_id=cart_item_data['cart_id'],
                product_id=cart_item_data['product_id'],
                product_quantity=cart_item_data.get('product_quantity', 1)  # Default to 1 if not provided
            )
            db.session.add(new_cart_item)
            db.session.commit()
            return new_cart_item.to_dict(), 201
        except:
            raise Exception('Error while creating the cart item')

api.add_resource(CartItemNorm, '/cart_item_table')

class CartItemById(Resource):

    def get(self, id):
        cart_item = CartItem.query.filter_by(id=id).first()
        if cart_item:
            return cart_item.to_dict(), 200
        else:
            return {'error': 'The cart item does not exist'}, 404

    def patch(self, id):
        data_to_patch = request.get_json()
        cart_item = CartItem.query.filter_by(id=id).first()
        if cart_item:
            for field in data_to_patch:
                setattr(cart_item, field, data_to_patch[field])
            db.session.commit()
            return cart_item.to_dict(), 200
        else:
            return {'error': 'The cart item does not exist'}, 404

    def delete(self, id):
        cart_item = CartItem.query.filter_by(id=id).first()
        if cart_item:
            db.session.delete(cart_item)
            db.session.commit()
            return {}, 202
        else:
            return {'error': 'The cart item does not exist'}, 404

api.add_resource(CartItemById, '/cart_item/<int:id>')


# Order routes 

class OrderNorm(Resource):

    def get(self):
        orders = Order.query.all()
        data = [order.to_dict() for order in orders]
        return data, 200

    def post(self):
        order_data = request.get_json()
        try:
            new_order = Order(
                user_id=order_data['user_id'],
                cart_id=order_data['cart_id'],
                exp_delivery_date=order_data.get('exp_delivery_date'),
                created_at=order_data.get('created_at'),
                delivery_address=order_data['delivery_address']
            )
            db.session.add(new_order)
            db.session.commit()
            return new_order.to_dict(), 201
        except:
            raise Exception('Error while creating the order')

api.add_resource(OrderNorm, '/order_table')

class OrderById(Resource):

    def get(self, id):
        order = Order.query.filter_by(id=id).first()
        if order:
            return order.to_dict(), 200
        else:
            return {'error': 'The order does not exist'}, 404

    def patch(self, id):
        data_to_patch = request.get_json()
        order = Order.query.filter_by(id=id).first()
        if order:
            for field in data_to_patch:
                setattr(order, field, data_to_patch[field])
            db.session.commit()
            return order.to_dict(), 200
        else:
            return {'error': 'The order does not exist'}, 404

    def delete(self, id):
        order = Order.query.filter_by(id=id).first()
        if order:
            db.session.delete(order)
            db.session.commit()
            return {}, 202
        else:
            return {'error': 'The order does not exist'}, 404

api.add_resource(OrderById, '/order_table/<int:id>')


if __name__ == '__main__':
    app.run(port=5000, debug=True)



