const { Tag } = require('../entities');

const tagData = [
    {
        tag_name: 'expensive',
    },
    {
        tag_name: 'luxury',
    },
    {
        tag_name: 'sport',
    },
    {
        tag_name: 'purple',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;