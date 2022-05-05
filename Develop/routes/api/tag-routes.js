const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
    Tag.findAll().then((tagData) => {
      res.json(tagData);
    })
    .catch((error)=>{
      res.status(500).json(error)
    })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
.then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({

    where: {
    category_id: req.params.category_id,
    },

    // Gets category based on the id given in the request parameters
   }) .then((updatedTag) => {
    res.json(updatedTag);
    })
    .catch((err) => {
    console.log(err);
    res.json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  router.destroy({
    where: {
      tag_id: req.params.tag_id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
