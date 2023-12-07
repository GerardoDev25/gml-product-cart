import React from 'react';
import rendered from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from './data/product';

describe('test in productTitle', () => {
  test('should to show the component correctly with the title costumed', () => {
    const wrapper = rendered.create(
      <ProductTitle title="custom product" className="custome-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should to show the component with the product title', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
