# GML-Product-Cart

this is a test package to do deploy NPM

Gerardo Miranda

## Ejemplo

```tsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../gml-product-cart';
```


```tsx
  <ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
  >
    {() => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
  </ProductCard>
```