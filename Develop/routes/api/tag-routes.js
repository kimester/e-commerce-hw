const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
    Tag.findAll({
    // be sure to include its associated Product data
    include:[Product]

  }).then(dbTags => {
      res.json(dbTags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    })
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {
    // be sure to include its associated Product data
  include: [Product]
  
  }).then((dbTags) => {
    res.json(dbTags);
  }) 
  .catch((err)=>{
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
  
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
.then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    console.log(err);
   res.status(500).json({ msg: "an error occured", err });
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {

    where: {
    id: req.params.id,
    }

    // Gets category based on the id given in the request parameters
   }) .then((updatedTag) => {
    res.json(updatedTag);
    })
    .catch((err) => {
      console.log(err);
     res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
     id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => {
      console.log(err);
     res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
