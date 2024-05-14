# Foodini

:pizza: This is an online food ordering application built using React for the frontend and Express.js for the backend.:pizza:

Features
- **Browse Menu:** Users can view the available food items.
- **Add to Cart:** Users can add items to their shopping cart.
- **Place Order:** Users can place orders for the selected items.

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

Start the backend by running:

```sh
cd ./backend
```

```sh
npm start
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## Features

Application allows to browse available meals
![Application Preview](/media/main_page.jpg)

and adding products to a cart. 
![Adding to a cart](/media/adding_to_cart.jpg)

Mini cart shows how many products are currently added.
![Mini Cart](/media/mini_cart_update.jpg) 

When cart is clicked you can check added product and change the quantity of them. 
![Cart](/media/cart.jpg)

After proceeding to checkout, user has to fill up a form to place an order. 
![Checkout](/media/checkout_validation.jpg)

If form if filled correctly, order is being send to backend, and user get an confirmation on screen.
![Success](/media/checkout_success.jpg)
