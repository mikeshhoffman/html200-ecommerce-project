/*
Assignment 6 for HTML 200, due Feb. 22, 2018

Write a JS form handler function to be triggered on submission of the email signup form. 
something like "Thanks for signing up for our mailing list, bob@bobross.com!"


Assignment 8 for HTML 200, due March 8, 2018

Write JS function to add/remove items from cart:

DONE:
1.	Add a +/- button to each product listing in the HTML 
TODO:
(maybe use Font Awesome to make it look good?)

DONE:
2.	Define a global variable in JS, array “cart”.

DONE:
3.	Write onclick handler in JS that accepts a product name as argument, pushes name into “cart” array if it is not yet there, removes it if it is, console logs the size of the cart.

DONE:
4.	Each +/- button should trigger the handler, passing in the appropriate product name.

If you prefer to have separate "add to cart" and "remove from cart" buttons for each product, that's fine, just make sure the click handlers work as expected. 

Extra challenges:
DONE:
1. Console log all the product names that are in the cart array when user clicks on shopping cart icon. 

2. Keep track of the total price of all items in cart.  Some possible approaches:
   o  DONE: Pass objects with names and prices to the "cart" array instead of just name strings.
   o  Have a separate array for prices that also gets updated on click of +/-
*/  

var cart = []

// Click handler function for each product's Buy button.
function updateCart(product) {
  event.preventDefault()
  
  // If product isn't in cart, add product to cart.
  // If product is in cart, remove product from cart.
  var i = containsObject(product)
  if (i == -1) {
    cart.push(product)
  } else {
    cart.splice(i, 1)
  }
  
  // Show count of items in cart:
  if (cart.length == 0){
    console.log("\n0 items in cart")
  }
  else if (cart.length == 1) {
    console.log("\n1 item in cart:")
  }
  else {
    console.log("\n" + cart.length + " items in cart:")
  }
 
  // Show items in cart:
  cart.forEach(function(element) {
    console.log(element.price + ": " + element.name)
  })
  
  console.log("Total: " + totalCost())
}

// Check whether cart contains product
function containsObject(obj) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == obj.name) {
            return i;
        }
    }
    return -1;
}

function totalCost(){
    var total = 0
    for (var i = 0; i < cart.length; i++) {
      var total = total + Number(cart[i].price.substr(1))
    }
    return total;
}

// form handler function to be triggered on submission of the email signup form
function processEmail() {

  // stop form submit unless Firefox
  event.preventDefault()

  // traverse the DOM to access the form field 
  var email = document.getElementById('email')

  // print to the console a friendly message, including the value of the "email" form field
  console.log("Thanks for signing up for our mailing list, " + email.value + "!")
}; 


// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]
