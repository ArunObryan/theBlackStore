import { productsData } from './products';

describe('products data', () => {
  test('products array is not empty', () => {
    expect(productsData).toBeDefined();
    expect(Array.isArray(productsData)).toBe(true);
    expect(productsData.length).toBeGreaterThan(0);
  });

  test('each product has required fields', () => {
    productsData.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('gender');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('fabric');
      expect(product).toHaveProperty('color');
      expect(product).toHaveProperty('sizes');
      expect(product).toHaveProperty('image');
    });
  });

  test('product id is a number', () => {
    productsData.forEach((product) => {
      expect(typeof product.id).toBe('number');
    });
  });

  test('product price is a number', () => {
    productsData.forEach((product) => {
      expect(typeof product.price).toBe('number');
      expect(product.price).toBeGreaterThan(0);
    });
  });

  test('product gender is either men or women', () => {
    productsData.forEach((product) => {
      expect(['men', 'women']).toContain(product.gender.toLowerCase());
    });
  });

  test('product sizes is an array', () => {
    productsData.forEach((product) => {
      expect(Array.isArray(product.sizes)).toBe(true);
      expect(product.sizes.length).toBeGreaterThan(0);
    });
  });

  test('product image is a valid URL string', () => {
    productsData.forEach((product) => {
      expect(typeof product.image).toBe('string');
      expect(product.image.length).toBeGreaterThan(0);
    });
  });

  test('all product ids are unique', () => {
    const ids = productsData.map((product) => product.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

