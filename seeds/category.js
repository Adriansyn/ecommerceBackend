const { Category } = require('../entities');

const categoryData = [
    {
        category_name: 'Luxury',
    },
    {
        category_name: 'Clothes',
    },
    {
        category_name: 'shoes',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;