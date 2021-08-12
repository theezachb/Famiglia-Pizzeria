let removeCartItemButtons = document.getElementsByClassName('priceButton');
console.log(removeCartItemButtons)

for ( var i = 0; i < addCartButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName()
}