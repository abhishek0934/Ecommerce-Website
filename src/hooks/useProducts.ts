import { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProducts, saveProducts } from '../utils/localStorage';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = getProducts();
    setProducts(savedProducts);
  }, []);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString()
    };
    
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  const updateProduct = (id: string, productData: Omit<Product, 'id'>) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...productData, id } : product
    );
    
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct
  };
};