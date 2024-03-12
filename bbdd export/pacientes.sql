-- -------------------------------------------------------------
-- TablePlus 5.9.0(538)
--
-- https://tableplus.com/
--
-- Database: sprint_08_db
-- Generation Time: 2024-03-12 19:26:39.9020
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `pacientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `apellidos` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dni` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tel` int NOT NULL,
  `email` text NOT NULL,
  `direccion` text NOT NULL,
  `longitud` float DEFAULT NULL,
  `latitud` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `pacientes` (`id`, `nombre`, `apellidos`, `dni`, `tel`, `email`, `direccion`, `longitud`, `latitud`) VALUES
(1, 'Nombre_01', 'Apellidos_01', '12345678A', 123456789, 'email_01@mail.com', 'Dirección, 01, 00001', NULL, NULL),
(2, 'Nombre_02', 'Apellidos_02', '23456789B', 234567890, 'email_02@mail.com', 'Dirección, 02, 00002', NULL, NULL),
(3, 'Nombre_03', 'Apellidos_03', '34567890C', 345678901, 'email_03@mail.com', 'Dirección, 03, 00003', NULL, NULL),
(4, 'Nombre_04', 'Apellidos_04', '45678901D', 456789012, 'email_04@mail.com', 'Dirección, 04, 00004', NULL, NULL),
(5, 'Nombre_05', 'Apellidos_05', '56789012E', 567890123, 'email_05@mail.com', 'Dirección, 05, 00005', NULL, NULL),
(6, 'Nombre_06', 'Apellidos_06', '67890123F', 678901234, 'email_06@mail.com', 'Dirección, 06, 00006', NULL, NULL),
(8, 'Juan Carlos', 'Alvarez Fernandez', '123456789', 76543221, 'jc.alvarez.fdez@gmail.com', 'Calle Valencia, 87', NULL, NULL);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;