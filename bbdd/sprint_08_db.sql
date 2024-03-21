-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-03-2024 a las 10:16:58
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sprint_08_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mapa_pacientes`
--

CREATE TABLE `mapa_pacientes` (
  `id` int(4) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `dni` varchar(30) NOT NULL,
  `tel` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `direccion` text NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mapa_pacientes`
--

INSERT INTO `mapa_pacientes` (`id`, `nombre`, `apellidos`, `dni`, `tel`, `email`, `direccion`, `latitud`, `longitud`) VALUES
(1, 'Pere', 'Tordera', '12345678A', '123456789', 'pere.tordera@mail.com', 'Calabria, 205 bis. 08029 Barcelona.', 2.1463961, 41.3851228),
(2, 'Manuel', 'López', '23456789A', '234567890', 'manuel.lopez@mail.com', 'Vilamarí, 140. 08029 Barcelona.', 2.1458464, 41.3820533),
(3, 'Arnau', 'Verdú', '34567890C', '345678901', 'arnau.verdu@mail.com', 'Diputació, 212. 08011 Barcelona.', 2.1606608, 41.3859955),
(4, 'Dolors', 'Guiu', '45678901D', '456789012', 'dolors.guiu@mail.com', 'Provença, 288. 08008 Barcelona.', 2.160819, 41.3928479),
(5, 'Juan Carlos', 'Álvarez', '56789012E', '567890123', 'jc.alvarez@mail.com', 'València, 87. 08029 Barcelona.', 2.152701, 41.3850949);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(4) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `dni` varchar(30) NOT NULL,
  `tel` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `direccion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `nombre`, `apellidos`, `dni`, `tel`, `email`, `direccion`) VALUES
(1, 'Pere', 'Tordera', '12345678A', '123456789', 'pere.tordera@mail.com', 'Calabria, 205 bis. 08029 Barcelona.'),
(2, 'Manuel', 'López', '23456789A', '234567890', 'manuel.lopez@mail.com', 'Vilamarí, 140. 08029 Barcelona.'),
(3, 'Arnau', 'Verdú', '34567890C', '345678901', 'arnau.verdu@mail.com', 'Diputació, 212. 08011 Barcelona.'),
(4, 'Dolors', 'Guiu', '45678901D', '456789012', 'dolors.guiu@mail.com', 'Provença, 288. 08008 Barcelona.'),
(5, 'Juan Carlos', 'Álvarez', '56789012E', '567890123', 'jc.alvarez@mail.com', 'València, 87. 08029 Barcelona.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mapa_pacientes`
--
ALTER TABLE `mapa_pacientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mapa_pacientes`
--
ALTER TABLE `mapa_pacientes`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
