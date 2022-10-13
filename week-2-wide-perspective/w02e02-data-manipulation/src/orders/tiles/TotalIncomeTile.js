import orders from '../featchData';
const componentId = 'total-income';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector('[data-content]');

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
content.innerHTML = `${orders
  .reduce((acc, order) => acc + order.sale, 0)
  .toFixed(2)} PLN`;
