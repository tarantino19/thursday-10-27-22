let items = {
    cart: []
};

const addItem = () => {
    const inputItem = document.getElementById ("addItem").value;
    const inputPrice = Number(document.getElementById ("addPrice").value);
    items.cart.push ({item: inputItem, price: inputPrice})
    showCart ()
    localStorage.setItem ("items", JSON.stringify (items))
}

const showCart = () => {
    let cartItems = document.getElementById ("cartItems")
    let currentItem = ""
    if (items.cart == "") {
        cartItems.innerHTML = "<b>No Items in Cart</b>";
    }
    else {
        items.cart.forEach ((showItem) => {
            currentItem += `Item: <b>${showItem.item}</b>... Price: <b>₱${showItem.price}</b> <br><br>`
        });
        cartItems.innerHTML= currentItem
        document.getElementById ("addItem").value = ""
        document.getElementById ("addPrice").value = ""
    }
}
showCart ()


