import orders from '../featchData';
import { getDateOfOrders } from '../../helpers/data';
import { makeLiElement } from '../../helpers/dom';

const componentId = 'annual-orders';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const subTitle = mountPoint?.querySelector('[data-subtitle]');
const panel = mountPoint?.querySelector('[data-panel]');

// Uważaj na odfiltrowanie wg. roku (2022)
subTitle && (subTitle.textContent = 'Year 2022');
panel && (panel.innerHTML = '');

// Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
for (const { orderDate, orderNumber } of getDateOfOrders(orders).filter(
  ({ orderNumber }) => orderNumber.includes('2022')
)) {
  panel?.appendChild(makeLiElement({ orderDate, orderNumber }));
}
