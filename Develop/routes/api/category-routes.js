/* jshint esversion: 6 */

const router = require('express').Router();
const {
    Category,
    Product
} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const catergoryData = await Category.findByPk(req.params.id, {
            include: [{
                //TODO
            }],
        });

        if (!categoryData) {
            res.status(404).json({
                message: 'Category not found with that ID'
            });
            return;
        }
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const dynamicID = await Product.destroy({
            where: {
                //TODO
            },
        });

        if (!dynamicID) {
            res.status(404).json({
                message: 'No products found with that id!'
            });
            return;
        }
        res.status(200).json(dynamicID);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    // create a new category
    try {
        const putData = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!putData[0]) {
            res.status(404).json({
                message: 'No user with this id!'
            });
            return;
        }
        res.status(200).json(putData);
    } catch (err) {

        res.status(500).json(err);
    }
});

router.put('/:id', async(req, res) => {
    // update a category by its `id` value
    try {
        const userData = await User.update(req.body, {
            where: {
                //id: req.params.id,
            },
        });
        if (!userData[0]) {
            res.status(404).json({
                message: 'No user with this id!'
            });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async function(req, res) {
    // delete a category by its `id` value
    try {
        const deleteProductData = await Product.destroy({
            where: {
                // id: req.params.id,
            },
        });

        if (!deleteProductData) {
            res.status(404).json({
                message: 'No library card found with that id!'
            });
            return;
        }
        res.status(200).json(libraryCardData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;