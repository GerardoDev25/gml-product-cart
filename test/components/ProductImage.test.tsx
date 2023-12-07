import React from 'react';
import rendered from 'react-test-renderer';
import {ProductImage, ProductCard } from '../../src/components';
import { product2 } from './data/product';

describe('test in productTitle', () => {
  test('should to show the component correctly with the img costumed', () => {
    const wrapper = rendered.create(
      <ProductImage img='custmo.img.png' className="custome-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should to show the component with the product img', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
