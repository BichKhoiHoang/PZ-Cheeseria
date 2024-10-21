const express = require("express");
const router = express.Router();


router.get("/", function (req, res, next) {
  req.app.locals.connection.query(
    "SELECT * FROM data ",
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

module.exports = router;
