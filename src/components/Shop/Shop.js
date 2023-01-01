import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css'

const Shop = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart()
        // console.log(storedCart)

        const savedCart = []
        for (const id in storedCart) {
            // console.log(id)
            const addedProduct = meals.find(meal => meal.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
            setCart(savedCart)
        }
    }, [meals])



    const [cart, setCart] = useState([])
    const handleAddToCart = (selectedProduct) => {

        let newCart = []
        const exist = cart.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }





    return (
        <div className='shop-container'>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                        handleAddToCart={handleAddToCart}

                    ></Meal>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>

            </div>
        </div>
    );
};

export default Shop;