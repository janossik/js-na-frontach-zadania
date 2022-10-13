import { Orders, DateOfOrders } from '@/types/order';

export const getDateOfOrders = (orders: Orders): DateOfOrders => {
  return orders.reduce<DateOfOrders>((prev, curr) => {
    prev.push({ orderDate: curr.orderDate, orderNumber: curr.orderNumber });
    return prev;
  }, []);
};
