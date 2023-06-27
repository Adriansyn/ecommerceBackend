const { Product } = require('../entities');

const productData = [
    {
        product_name: 'Expensive Watch',
        price: 899.99,
        stock: 2,
        category_id: 1,
    },
    {
        product_name: 'Basic T-shirt',
        price: 10.00,
        stock: 10,
        category_id: 2,
    },
    {
        product_name: 'Runing shoes',
        price: 90.00,
        stock: 10,
        category_id: 1,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;