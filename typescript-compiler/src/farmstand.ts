interface Product {
  price: number;
  name: string;
  quantity: number;
  type: string;
}

const printProductSummary = (product: Product): void => {
  console.log(`${product.type} ${product.name} - ${product.price}`);
};
