import React from 'react';
import rendered from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from './data/product';

const { act } = rendered;

describe('test in ProductCart', () => {
  test('should to show the component correctly with the img costumed', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>{() => <h1>ProductCart</h1>}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should to increase the counter', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Prodcut Cart</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('0');
  });
});
