const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /cheese:
 *   get:
 *     summary: Retrieve a list of cheeses
 *     responses:
 *       200:
 *         description: A list of cheeses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Cheddar
 *                   pricePerKilo:
 *                     type: number
 *                     example: 15.00
 *                   color:
 *                     type: string
 *                     example: Yellow
 *                   imageUrl:
 *                     type: string
 *                     example: /images/cheddar.jpg
 */

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
