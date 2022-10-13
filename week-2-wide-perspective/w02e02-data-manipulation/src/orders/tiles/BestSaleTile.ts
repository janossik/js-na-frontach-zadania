import { getOrderSales } from '@/helpers/data';
import orders from '../featchData';

const componentId = 'best-sale';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint?.querySelector('[data-content]');

const bestSaleTile = Math.max(...getOrderSales(orders));

// Ta wartość powinna pochodzić z kolekcji ordersFakeData
content && (content.innerHTML = `${bestSaleTile} PLN`);
