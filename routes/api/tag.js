const express = require('express');
const router = express.Router();
const { Tag, Product } = require('../../entities');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['product_name', 'price', 'stock', 'category_id']
        }
      ]
    });
    res.json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ['product_name', 'price', 'stock', 'category_id']
        }
      ]
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updatedRows] = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.json({ message: 'Tag updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedRows = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (deletedRows === 0) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;