const router = require('express').Router()
router.route('/').get((req, res) => {
    var id = req.query.id
    if(id==='2J4PtygyXP45RTLgAjKX'){
        res.json({
            name:"Espagueti a la carbonara",
            image:'https://firebasestorage.googleapis.com/v0/b/gastroacademi.appspot.com/o/recipes%2Fespaguetis_a_la_carbonara_con_huevo_y_nata_59297_600.jpeg?alt=media&token=60971aee-e9c3-4ca0-9af6-032cba47ca47'
        })
    }
    res.json({msg});
  })
module.exports = router