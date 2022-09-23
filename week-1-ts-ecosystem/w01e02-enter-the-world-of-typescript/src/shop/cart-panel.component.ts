import { article, p } from '@/framework/dom-creators';
import { cartItemSum } from '@/shop/cart-item-sum.component';
import { cartItem } from '@/shop/cart-item.component';
import { Card } from '@/types/Card.type';
import { CURRENCY } from '@/utils/currency.utils';

export function cartPanel({ heading = 'Cart Items', items }: { heading?: string; items: Card[] }) {
  const $article = article('panel is-primary my-6 w-75 mx-auto');
  const $heading = p('panel-heading');
  $heading.textContent = heading;
  $article.append($heading);
  let value = 0;
  items.forEach((item) => {
    value += item.price.value;
    $article.appendChild(cartItem(item));
  });
  $article.append(cartItemSum({ value, currency: CURRENCY.PLN }));
  return $article;
}
