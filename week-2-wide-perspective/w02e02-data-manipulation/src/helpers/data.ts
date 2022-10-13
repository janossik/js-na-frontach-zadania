import { Orders, DateOfOrders } from '@/types/order';

export const getDateOfOrders = (orders: Orders): DateOfOrders => {
  return orders.reduce<DateOfOrders>((prev, curr) => {
    prev.push({ orderDate: curr.orderDate, orderNumber: curr.orderNumber });
    return prev;
  }, []);
};

export const getOrderSales = (orders: Orders): number[] => {
  return orders.reduce<number[]>((prev, curr) => {
    prev.push(curr.sale);
    return prev;
  }, []);
};

export const sumSales = (orders: Orders): number =>
  orders.reduce((acc, { sale }) => acc + sale, 0);
