function updateProductNumber(product, price, isIncrease) {
  const productInput = document.getElementById(product+"-number");//to make id phone-number or case-number
  let productNumber = parseInt(productInput.value);
  if (isIncrease == true) {
    productInput.value = productNumber + 1;
    productNumber = productNumber + 1;
   
  } else {
    if (productNumber > 0) {
        productInput.value = productNumber - 1;
        productNumber = productNumber - 1;
     
    }
  }

  // get product price
  const productPriceText = document.getElementById(product+"PriceTotal");

  const productPrice = parseFloat(productPriceText.innerText);

  productPriceText.innerText = price * productNumber;

//   status update 

// sub total update 
const subToalText = document.getElementById('sub-total');
const subTotal = calculateTotal();
subToalText.innerText=subTotal;

// tax update 
const texAmmountText = document.getElementById('tax-ammount');
const texAmmount = (subTotal * 10)/100;

texAmmountText.innerText = texAmmount;

// update total ammount 
const totalAmmount = document.getElementById('total-price');
totalAmmount.innerText = subTotal + texAmmount;

}
function calculateTotal() {
    const phonePrice = document.getElementById('phonePriceTotal').innerText;
    const phoneTotalPrice = parseFloat(phonePrice);

    const casePrice = document.getElementById('casePriceTotal').innerText;
    const caseTotalPrice = parseFloat(casePrice);

    return phoneTotalPrice + caseTotalPrice;
}



// for phone 
  
document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber('phone',1219,true);
  });
  
  document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber('phone',1219,false);
  });
  

// for case 
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber('case',59,false);
});

