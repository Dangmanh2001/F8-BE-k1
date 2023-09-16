-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.0.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for f8_orders
CREATE DATABASE IF NOT EXISTS `f8_orders` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `f8_orders`;

-- Dumping structure for table f8_orders.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `province_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_province_id_foreingn` (`province_id`),
  CONSTRAINT `customers_province_id_foreingn` FOREIGN KEY (`province_id`) REFERENCES `province` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.customers: ~8 rows (approximately)
INSERT IGNORE INTO `customers` (`id`, `name`, `email`, `password`, `status`, `province_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Mạnh2', 'manh2@gmail.com', '654321', 1, 1, '2023-08-28 04:28:49', '2023-08-28 04:28:50', NULL),
	(2, 'Mạnh4', 'manh4@gmail.com', '654321', 0, 1, '2023-08-28 04:32:03', '2023-08-28 04:32:05', NULL),
	(3, 'Hoàng An', 'an123@gmail.com', '123456', 1, 3, '2023-08-31 02:16:47', '2023-08-31 02:16:48', NULL),
	(8, 'Mạnh', 'manh@gmail.com', '123456', 0, 3, '2023-08-31 04:32:27', '2023-08-31 04:32:28', NULL),
	(9, 'Mạnh3', 'manh3@gmail.com', '123456', 0, NULL, '2023-08-31 04:33:22', '2023-08-31 04:33:22', '2023-08-31 04:33:23'),
	(10, 'Mạnh5', 'manh5@gmail.com', '123456', NULL, 1, '2023-09-07 02:26:00', '2023-09-07 02:26:00', NULL),
	(11, 'Nguyễn Văn A', 'nguyenvana@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, NULL, NULL, NULL, NULL),
	(12, 'Nguyễn Văn B', 'nguyenvanb@gmail.com', 'b7c40b9c66bc88d38a59e554c639d743e77f1b65', 0, NULL, NULL, NULL, NULL);

-- Dumping structure for table f8_orders.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customers_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` float NOT NULL,
  `status_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_id` (`customers_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customers_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.orders: ~4 rows (approximately)
INSERT IGNORE INTO `orders` (`id`, `customers_id`, `quantity`, `total`, `status_id`, `created_at`, `updated_at`) VALUES
	(1, 1, 2, 10000, 3, '2023-08-31 02:43:37', '2023-08-31 02:43:38'),
	(2, 1, 3, 20000, 2, '2023-08-31 02:43:50', '2023-08-31 02:43:51'),
	(3, 1, 1, 5000, 3, '2023-08-31 02:44:13', '2023-08-31 02:44:13'),
	(4, 3, 5, 100000, 3, '2023-08-31 02:44:32', '2023-08-31 02:44:33');

-- Dumping structure for table f8_orders.orders_detail
CREATE TABLE IF NOT EXISTS `orders_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `orders_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `orders_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.orders_detail: ~1 rows (approximately)
INSERT IGNORE INTO `orders_detail` (`id`, `order_id`, `product_id`, `price`, `quantity`, `amount`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 150000, 1, 150000, '2023-08-31 03:40:39', '2023-08-31 03:40:40');

-- Dumping structure for table f8_orders.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` varchar(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` float DEFAULT 0,
  `thumbnail` varchar(150) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.products: ~1 rows (approximately)
INSERT IGNORE INTO `products` (`id`, `sku`, `name`, `description`, `price`, `thumbnail`, `category_id`, `created_at`, `updated_at`) VALUES
	(1, 'H2222', 'SP1', 'aaa', 15000, NULL, 1, '2023-08-31 03:40:12', '2023-08-31 03:40:13');

-- Dumping structure for table f8_orders.product_categories
CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.product_categories: ~1 rows (approximately)
INSERT IGNORE INTO `product_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'SP1', '2023-08-31 03:39:14', '2023-08-31 03:39:15');

-- Dumping structure for table f8_orders.province
CREATE TABLE IF NOT EXISTS `province` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.province: ~3 rows (approximately)
INSERT IGNORE INTO `province` (`id`, `name`) VALUES
	(1, 'Hà Nội'),
	(2, 'TPHCM'),
	(3, 'Đà Nẵng');

-- Dumping structure for table f8_orders.status
CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.status: ~3 rows (approximately)
INSERT IGNORE INTO `status` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Chờ xử lý', '2023-08-31 02:41:57', '2023-08-31 02:41:58'),
	(2, 'Đang xử lý', '2023-08-31 02:42:09', '2023-08-31 02:42:09'),
	(3, 'Đã thanh toán', '2023-08-31 02:42:09', '2023-08-31 02:42:09');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
