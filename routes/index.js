var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
    let query = "SELECT product_name, product_desc, product_price, inv_count, prod_loc from product"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
            console.log(err);
            res.render('error');
			//res.redirect('/');
		}
	res.render('index', {title: 'goaaal', products: result });
 	});

});

module.exports = router;
