from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


# Models go here!

class User:
    __tablename__ = 'User'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
    user_type = Column(String)
    reviews = relationship('Review', backref='user')
    cart = relationship('Cart', uselist=False, backref='user')
    orders = relationship('Order', backref='user')

    #relationships

    #validations

class Farmer:
    __tablename__ = 'Farmer'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    address = Column(String)
    products = relationship('Product', backref='farmer')

    #relationships

    #validations

class Product:
    __tablename__ = 'Product'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    price = Column(Float)
    category = Column(String)
    farmer_id = Column(Integer, ForeignKey('Farmer.id'))
    count = Column(Integer)
    reviews = relationship('Review', backref='product')
    cart_items = relationship('CartItem', backref='product')

    #relationships

    #validations

class Review:
    __tablename__ = 'Review'
    id = Column(Integer, primary_key=True)
    content = Column(String)
    rating = Column(Integer)
    user_id = Column(Integer, ForeignKey('User.id'))
    product_id = Column(Integer, ForeignKey('Product.id'))
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

    #relationships

    #validations

    @validates('rating')
    def validate(self, key, value):
        if (1<=value<=5):
            return value
        else:
            raise ValueError('Rating must be between 1 and 5')

class Cart:
    __tablename__ = 'Cart'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('User.id'))
    cart_total = Column(Float)
    cart_items = relationship('CartItem', backref='cart')

    #relationships

    #validations

class CartItem:
    __tablename__ = 'CartItem'
    id = Column(Integer, primary_key=True)
    cart_id = Column(Integer, ForeignKey('Cart.id'))
    product_id = Column(Integer, ForeignKey('Product.id'))
    product_quantity = Column(Integer)

    #relationships

    #validations

class Order:
    __tablename__ = 'Order'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('User.id'))
    cart_id = Column(Integer, ForeignKey('Cart.id'))
    exp_delivery_date = Column(DateTime)
    created_at = Column(DateTime)
    delivery_address = Column(String)

    # relationships

    #validations