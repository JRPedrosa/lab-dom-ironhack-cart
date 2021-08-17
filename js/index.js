// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input");
  let subTotal = product.querySelector(".subtotal span")
  subTotal.innerText = quantity.value * price.innerText
  return parseFloat(subTotal.innerText)
}






function calculateAll() {




  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test



  // ITERATION 2
  const everyProd = document.getElementsByClassName("product"); 
  
  for (i = 0; i < everyProd.length; i++) {
    updateSubtotal(everyProd[i]);
  }

  

  // ITERATION 3
  let totalPrice = document.querySelector("#total-value span")

  for (i = 0; i < everyProd.length; i++) {
    totalPrice.innerText = parseFloat(totalPrice.innerText) + updateSubtotal(everyProd[i])
  }




}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
