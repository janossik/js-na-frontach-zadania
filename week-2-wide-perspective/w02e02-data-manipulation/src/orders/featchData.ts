import axios from '@/helpers/MockAxios';

const data = await axios.default.get('/orders');

if (!Array.isArray(data)) {
  throw new Error("Can't get orders");
}

if (
  !(
    data.length > 0 &&
    'id' in data[0] &&
    'orderNumber' in data[0] &&
    'orderDate' in data[0] &&
    'sale' in data[0]
  )
) {
  throw new Error('Wrong data');
}
const orders = data as Array<{
  id: string;
  orderNumber: string;
  orderDate: string;
  sale: number;
}>;

export default orders;
