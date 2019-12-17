var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var delet = document.getElementsByClassName('rm')

function updateSubtot(product) {
  let price = product.getElementsByClassName('pu');
  let span = price[0].getElementsByTagName('span')
  let mon = span[0].innerHTML;

  let quantity = product.getElementsByTagName('input')
  let value = quantity[0].value;

  let subtot = product.getElementsByClassName('subtot');
  let tot = subtot[0].getElementsByTagName('span')

  let subtotal = value * mon;

  tot[0].innerHTML = subtotal;

  return subtotal;
}

function calcAll() {

  let array = document.getElementsByClassName('product');
  let tot = 0;

  for (let i = 0; i < array.length; i++) {
    tot += updateSubtot(array[i]);
  }

  let totE = document.getElementsByTagName('h2');
  let t = totE[0].getElementsByTagName('span')
  t[0].innerHTML = tot;
}


$calc.onclick = calcAll;


function myFunction(event) {
  event.currentTarget.parentNode.parentNode.remove();
}

function create(event) {
  let pNew = event.currentTarget.parentNode.parentNode;
  let pName = pNew.getElementsByTagName("input");
  let tr = pNew.parentNode.parentNode;
  let tbody = tr.getElementsByTagName("tbody")
  tbody[0].innerHTML += `
  <tr class="product">
  <td class="name">
    <span>${pName[0].value}</span>
  </td>

  <td class="pu">
    $<span>${pName[1].value}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>

  <td class="subtot">
    $<span>0</span>
  </td>

  <td class="rm">
    <button onclick="myFunction(event)" class="btn btn-delete">Delete</button>
  </td>
  </tr>`;
  

}