CREATE DATABASE  IF NOT EXISTS `cheeses` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cheeses`;

DROP TABLE IF EXISTS `data`;

CREATE TABLE `data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pricePerKilo` decimal(10,2) NOT NULL,
  `color` varchar(50) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ;

LOCK TABLES `data` WRITE;
INSERT INTO `data` VALUES 
(1, 'Cheddar', 15.00, 'Yellow', 'images/cheddar.jpg'),
(2, 'Brie', 20.00, 'White', 'images/brie.jpg'),
(3, 'Gouda', 18.50, 'Yellow', 'images/gouda.jpg'),
(4, 'Stilton', 22.50, 'Blue, grey', 'images/stilton.jpg'),
(5, 'Babybel', 30.00, 'Light yellow', 'images/babybel.jpg');
UNLOCK TABLES;