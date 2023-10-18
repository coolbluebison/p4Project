from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db



# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    user_type = db.Column(db.String)

    #relationships
    reviews = db.relationship('Review', backref='user')
    cart = db.relationship('Cart', uselist=False, backref='user')
    orders = db.relationship('Order', backref='user')

    #validations

class Farmer(db.Model, SerializerMixin):
    __tablename__ = 'Farmer'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    address = db.Column(db.String)

    #relationships
    products = db.relationship('Product', backref='farmer')

    #validations

class Product(db.Model, SerializerMixin):
    __tablename__ = 'Product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Float)
    category = db.Column(db.String)
    count = db.Column(db.Integer)

    #relationships
    reviews = db.relationship('Review', backref='product')
    cart_items = db.relationship('CartItem', backref='product')
    farmer_id = db.Column(db.Integer, db.ForeignKey('Farmer.id'))

    #validations

class Review(db.Model, SerializerMixin):
    __tablename__ = 'Review'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    rating = db.Column(db.Integer)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    #relationships
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('Product.id'))

    #validations

    @validates('rating')
    def validate(self, key, value):
        if (1<=value<=5):
            return value
        else:
            raise ValueError('Rating must be between 1 and 5')

class Cart(db.Model, SerializerMixin):
    __tablename__ = 'Cart'
    id = db.Column(db.Integer, primary_key=True)
    cart_total = db.Column(db.Float)

    #relationships
    cart_items = db.relationship('CartItem', backref='cart')
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))

    #validations

class CartItem(db.Model, SerializerMixin):
    __tablename__ = 'CartItem'
    id = db.Column(db.Integer, primary_key=True)
    product_quantity = db.Column(db.Integer)

    #relationships
    cart_id = db.Column(db.Integer, db.ForeignKey('Cart.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('Product.id'))

    #validations

class Order(db.Model, SerializerMixin):
    __tablename__ = 'Order'
    id = db.Column(db.Integer, primary_key=True)
    exp_delivery_date = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime)
    delivery_address = db.Column(db.String)

    #relationships
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    cart_id = db.Column(db.Integer, db.ForeignKey('Cart.id'))

    #validations