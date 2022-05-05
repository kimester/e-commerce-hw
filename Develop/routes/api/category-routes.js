// const router = require('express').Router();
// const { Category, Product } = require('../../models');

// // The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   Category.findAll().then((categoryData) => {
//     res.json(categoryData);
//   });
//   // be sure to include its associated Products
// });

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   category.findByPk(req.params.id).then((categoryData) => {
//     res.json(categoryData);
//   // be sure to include its associated Products
// });

// router.post('/', (req, res) => {
//   // create a new category
//   category.create(req.body)
//   .then((newBook) => {
//     res.json(newCateories);
//   })
//   .catch((err) => {
//     res.json(err);
//   });
// });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
//   Category.update({

//     where: {
//     category_id: req.params.category_id,
//     },

//     // Gets category based on the id given in the request parameters
//     .then((updatedCategory) => {
//     res.json(updatedCategory);
//     })
//     .catch((err) => {
//     console.log(err);
//     res.json(err);
//     }),
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   router.destroy({
//     where: {
//       category_id: req.params.category_id,
//     },
//   })
//     .then((deletedCategory) => {
//       res.json(deletedCategory);
//     })
//     .catch((err) => res.json(err));
// });


// module.exports = router;
