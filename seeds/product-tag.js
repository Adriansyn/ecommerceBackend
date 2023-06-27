const { ProductTag } = require('../entities');

const productTagData = [
    {
        product_id: 1,
        tag_id: 1,
    },
    {
        product_id: 2,
        tag_id: 1,
    },
    {
        product_id: 2,
        tag_id: 3,
    },
    {
        product_id: 3,
        tag_id: 4,
    },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;