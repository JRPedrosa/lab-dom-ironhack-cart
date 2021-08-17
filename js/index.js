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

  totalPrice.innerText = 0;
  for (i = 0; i < everyProd.length; i++) {
    totalPrice.innerText = parseFloat(totalPrice.innerText) + updateSubtotal(everyProd[i])
  }




}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

// Solution not done by me. For future reference !!!
/*function createProduct() {
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);
  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;
  // get the parent of this newly created row
  const parent = document.querySelector('#cart tbody');
  // append the newly created row to the parent
  parent.appendChild(newTableRow);
  // make sure remove button inherits the same behavior as other remove buttons
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
  // clean the fields
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
} */

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProd = document.getElementsByClassName("btn btn-remove");
  for (i = 0; i < removeProd.length; i++) {
    removeProd[i].addEventListener('click', removeProduct);
  }
  
});
