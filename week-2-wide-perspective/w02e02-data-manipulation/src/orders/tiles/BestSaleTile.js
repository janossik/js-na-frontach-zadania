import orders from '../featchData';
const componentId = 'best-sale';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector('[data-content]');
// Ta wartość powinna pochodzić z kolekcji ordersFakeData
content.innerHTML = `${Math.max(
  ...orders.reduce((prev, curr) => {
    prev.push(curr.sale);
    return prev;
  }, [])
)} PLN`;
