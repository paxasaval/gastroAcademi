const router = require('express').Router()
router.route('/').get((req, res) => {
    msg = `Ingredients ${req.query.id || "World"} from get request!`;
    res.json({msg});
  })
module.exports = router