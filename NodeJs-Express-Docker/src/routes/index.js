const router = require('express').Router();

const helloRoute = require('./hello');

const ingredientsRoute = require('./ingredients');
const recipeRoute = require('./recipe');


router.use('/hello', helloRoute);
router.use('/ingredients', ingredientsRoute);
router.use('/recipe', recipeRoute);



module.exports = router;