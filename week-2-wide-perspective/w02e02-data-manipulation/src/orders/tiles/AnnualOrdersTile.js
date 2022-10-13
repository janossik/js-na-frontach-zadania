import orders from '../featchData';

const componentId = 'annual-orders';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const subTitle = mountPoint.querySelector('[data-subtitle]');
const panel = mountPoint.querySelector('[data-panel]');

// Uważaj na odfiltrowanie wg. roku (2022)
subTitle.textContent = 'Year 2022';
panel.innerHTML = '';

// Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
for (const { orderDate, orderNumber } of orders.reduce((prev, curr) => {
  prev.push({ orderDate: curr.orderDate, orderNumber: curr.orderNumber });
  return prev;
}, [])) {
  panel.appendChild(makeLiElement({ orderDate, orderNumber }));
}

function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement('li');
  li.className = 'panel-block';
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${orderDate}`;
  return li;
}
