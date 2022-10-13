import { ordersFakeData } from '@/orders/orders.fake-data';
import { getEndpoint, getQueryParams } from '@/helpers/parsingUrl';

class MockAxios {
  default: {
    post: (
      path: string,
      data: any
    ) => Promise<{ status: number; message: string }>;
    get: (path: string) => Promise<unknown>;
  };

  url: string;
  constructor({ url = window.location.href }: { url?: string }) {
    this.url = url;
    this.default = {
      async post(path: string, data: any) {
        const endpoint = getEndpoint(path);
        if (endpoint === 'orders') {
          if (
            !('orderNumber' in data && 'orderDate' in data && 'sale' in data)
          ) {
            const { orderNumber, orderDate, sale } = data;
            ordersFakeData.push({
              id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
              orderNumber,
              orderDate,
              sale,
            });
            return { status: 201, message: 'OK' };
          }
          return { status: 400, message: 'Bad Request' };
        }
        return { status: 404, message: 'Not found' };
      },
      async get(path: string) {
        return await new Promise((resolve, reject) => {
          setTimeout(() => {
            const endpoint = getEndpoint(path);

            if (endpoint === 'orders') {
              const queryParams = getQueryParams(path);

              const temp = ordersFakeData;
              const filtered = temp.filter((order) => {
                const tempOrder = order;
                return Object.keys(queryParams).every((key) => {
                  if (
                    key !== 'id' &&
                    key !== 'orderNumber' &&
                    key !== 'orderDate' &&
                    key !== 'sale'
                  ) {
                    return null;
                  }
                  return (
                    tempOrder[key].toString() === queryParams[key].toString()
                  );
                });
              });

              resolve(filtered);
            } else {
              reject(new Error('Invalid PATH'));
            }
            resolve({ status: 404, message: 'Not found' });
          }, 2000);
        });
      },
    };
  }

  create(options: { url?: string }): MockAxios {
    return new MockAxios(options);
  }
}

const axios = new MockAxios({});

export default axios;
