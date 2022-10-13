export interface Order {
  id: string;
  orderNumber: string;
  orderDate: string;
  sale: number;
}

export type Orders = Order[];

export interface DateOfOrder {
  orderDate: Order['orderDate'];
  orderNumber: Order['orderNumber'];
}

export type DateOfOrders = DateOfOrder[];
