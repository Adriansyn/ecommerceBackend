const seedCategories = require('./category');
const seedProducts = require('./product');
const seedTags = require('./tag');
const seedProductTags = require('./product-tag');

const sequelize = require('../database/db');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedCategories();
    await seedProducts();
    await seedTags();
    await seedProductTags();

    process.exit(0);
};

seedAll();