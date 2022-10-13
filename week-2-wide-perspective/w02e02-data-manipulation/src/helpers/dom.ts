import { DateOfOrder } from '@/types/order';

export function makeLiElement({
  orderDate,
  orderNumber,
}: DateOfOrder): HTMLLIElement {
  const li = document.createElement('li');
  li.className = 'panel-block';
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${orderDate}`;
  return li;
}
