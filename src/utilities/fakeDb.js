
const addToDb = (id) => {
    let shoppingCart = {}
    // get from localStorage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add item in localStorage
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1
    }


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const getStoredCart = () => {
    let shoppingCart = {}
    // get from localStorage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}
export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getStoredCart
}


