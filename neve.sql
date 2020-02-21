-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2020 a las 12:12:24
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `neve`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllEvents` ()  NO SQL
SELECT * from event$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllUsers` ()  NO SQL
SELECT * FROM user$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteEvent` (IN `pId` INT)  NO SQL
DELETE FROM event WHERE event.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindEventById` (IN `pId` INT)  NO SQL
SELECT * FROM event WHERE event.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertEvent` (IN `pTitle` VARCHAR(50), IN `pEventDay` DATE, IN `pEventStart` TIME, IN `pEventEnd` TIME, IN `pCity` VARCHAR(50), IN `pDescription` VARCHAR(10000), IN `pBanner` VARCHAR(255), IN `pPic` VARCHAR(255), IN `pVideo` VARCHAR(1000), IN `pIdUser` INT)  NO SQL
INSERT INTO event(event.title,event.eventDay,event.eventStart,event.eventEnd,event.city,event.description,event.banner,event.pic,event.video,event.idUser) VALUES
(pTitle,pEventDay,pEventStart,pEventEnd,pCity,pDescription,pBanner,pPic,pVideo,pIdUser)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertUser` (IN `pUsername` VARCHAR(50), IN `pPass` VARCHAR(255), IN `pName` VARCHAR(50), IN `pSurname` VARCHAR(50))  NO SQL
INSERT INTO user(user.username,user.password,user.name,user.surname) VALUES
(pUsername,pPass,pName,pSurname)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spLogin` (IN `pUser` VARCHAR(50))  NO SQL
SELECT * FROM user WHERE user.username=pUser$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `eventDay` date NOT NULL,
  `eventStart` time NOT NULL,
  `eventEnd` time NOT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(10000) COLLATE utf8_unicode_ci NOT NULL,
  `pic` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `banner` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `event`
--

INSERT INTO `event` (`id`, `title`, `eventDay`, `eventStart`, `eventEnd`, `city`, `description`, `pic`, `banner`, `video`, `idUser`) VALUES
(1, 'Berri Txarrak Kontzertua', '2020-02-27', '18:00:00', '24:00:00', 'Bilbao', 'Berri Txarrak Lekunberrin (Nafarroa Garaia) 1994an sortutako rock estiloko musika hirukotea da. Taldeak 2019rako etenaldi mugagabea iragarri zuen. Hamabi disko, bilduma-lan bat eta dokumental bat argitaratuak ditu, ale bakoitzean jarrera eta garapen etengabea erakutsiaz. 25 urtez, bere entzuleria zabala ezustean harrapatzen eta etengabe bide berriak irekitzen aritu da, erosotasun artistikotik ihesi. Euskal Herritik kanpo oihartzunik handiena izan duen rock metal estiloko taldea da, zuzenekoetan eta beraien laneta punk eta hardcorea, maitasunetik amorrurainoko sentimenduak jorratu izan dituztelarik.', 'berritxarrak.jpg', 'berritxarrakkartel.jpg', 'https://www.youtube.com/embed/cXWjWzeNtO8', 1),
(2, 'BBK Live', '2020-02-28', '12:00:00', '22:00:00', 'Bilbao', '2006an, lehenengo ekitaldia ospatu zutenean, Kobeta mendiko esparruan hiru egunetan 51.000 ikusle inguruk 40 talde baino gehiago ikusi zituzten orduan Bilbao Live Festival izena zuen jaialdian. Horrela helburua bete zuten, Bilbo udako musika makrojaialdiaren zirkuituan sartu zen.\r\n\r\nRicardo Barkalak, Lan eta Sustapen Ekonomikoaren zinegotzia zena, \"ingurumarian kexarik edota nabarmendutako istripurik” ia ez zeudela aipatu zuen. Musikariek ere pozik agertu ziren. Athom Rumbaren taldekidea zen Roberrek «Bilbao Live Festivalen onena antolakuntza izan dela» adierazi zuen, haiek hainbat jaialditan aritu ondoren Bilborena baino hobeto antolaturik ez da izan eta[2].\r\n\r\nHain ona zen harrera ezen 2007an BBK aurrezki kutxak antolakuntzan sartu eta Bilbao Live BBK Live bilakatu baitzen. Bigarren ekitaldiak aurrekoa baino arrakasta handia izan zuen, ia 100.000 lagun bilduz[3].\r\n\r\n2008an heavy metal taldeak utzi eta pop taldeak ekartzeari ekin zioten antolatzaileek ikusle gehiago izateko asmotan[4]. Hala ere The Police, REM, Lenny Kravitz eta The Prodigyk 79.810 sarrera baino ez zituzten saldu.\r\n\r\n2009an 52.663 ikusle izan zituzten, batez ere Depeche Modek edo Placebok erakarriak[5].\r\n\r\n2010eko ekitaldirako 76.579 sarrera saldu zituzten, horietatik gehienak Euskal Herritik at[6]. Rammstein, Pearl Jam eta Faith No More taldeburuak izan ziren[7].', 'bbklive.jpg', 'bbklivekartel.jpg', 'https://www.youtube.com/embed/MbI4D-fgoMc', 1),
(9, 'aaa', '2020-02-29', '12:32:00', '12:23:00', 'aaa', 'aaa', 'logo.png', 'hawk.png', 'https://www.youtube.com/embed/Jk7rliZpuSs', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idEvent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `surname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pic` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'predeterminado.jpg',
  `admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idUser`, `username`, `password`, `name`, `surname`, `pic`, `admin`) VALUES
(1, 'gotzon95', '$2y$10$Jr1OhNpXYmHyA68xDOHpbOBKV/kmRz/j/tVxHC8oUhYBIIrxgR59y', 'Gotzon', 'Galletebeitia', 'gotzon.jpg', 1),
(5, 'aaa', '$2y$10$v7ByItJFxFW8mfL8RS7yvelLUzfPbjgaStGK.aQf7/pqY5FKDkyqO', 'aaa', 'aaa', 'predeterminado.jpg', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`,`idEvent`),
  ADD KEY `idEvent` (`idEvent`);

--
-- Indices de la tabla `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`idEvent`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
