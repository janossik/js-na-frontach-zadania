import { sumSales } from '@/helpers/data';
import orders from '../featchData';
const componentId = 'total-income';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint?.querySelector('[data-content]');

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
content && (content.innerHTML = `${sumSales(orders)} PLN`);
