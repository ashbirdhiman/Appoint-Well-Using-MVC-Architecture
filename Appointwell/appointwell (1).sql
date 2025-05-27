-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2024 at 01:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appointwell`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'ashbir@gmail.com', 'abc123');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `appointment_type` varchar(255) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `hospital_id` varchar(255) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `patient_appointment_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `appointment_type`, `date`, `doctor_id`, `hospital_id`, `patient_id`, `payment_status`, `status`, `patient_appointment_id`) VALUES
(3, NULL, '2024-11-06 10:30:00.000000', 456, NULL, 123, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `appointment_symptom`
--

CREATE TABLE `appointment_symptom` (
  `appointment_id` int(11) NOT NULL,
  `symptom_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment_symptom`
--

INSERT INTO `appointment_symptom` (`appointment_id`, `symptom_id`) VALUES
(3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `availability`
--

CREATE TABLE `availability` (
  `id` int(11) NOT NULL,
  `available_date` date NOT NULL,
  `end_time` time(6) NOT NULL,
  `start_time` time(6) NOT NULL,
  `doctor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `hospital_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `contact_number`, `email`, `name`, `password`, `specialization`, `status`, `hospital_id`) VALUES
(1, '123-456-7890', 'johndoe@example.com', 'Dr. John Doe', 'securePassword123', 'Cardiology', 'available', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `wait_time` int(11) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`id`, `address`, `latitude`, `longitude`, `name`, `wait_time`, `username`, `password`) VALUES
(1, '2900 Steeles Ave E, Thornhill, ON L3T 4X1', 43.812759, -79.359261, 'Med Care Clinic', 15, 'medcare@appointwell.com', 'med123'),
(2, '7155 Woodbine Ave Suite 106, Markham, ON L3R 1A3', 43.81779, -79.34881, 'GSH Medical- Pain Management Centre', 23, 'gsh_med@appointwell.com', 'gsh123'),
(3, '1061 McNicoll Ave 1st floor, Scarborough, ON M1W 3W6', 43.80368, -79.33286, 'MH Medical Clinic', 29, 'mh_med@appointwell.com', 'mh123'),
(4, 'L3R 1A3, Ontario, Markham, Woodbine Ave', 43.86996, -79.36324, 'Woodbine Medical Centre', 50, 'woodbine_med@appointwell.com', 'wood@123');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `contact_number`, `email`, `name`, `password`) VALUES
(1, '123-456-7890', 'ram@example.com', 'Ram Kumar', 'abc123');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `amount` double DEFAULT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `payment_date` datetime(6) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `symptom`
--

CREATE TABLE `symptom` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `severity` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `symptom`
--

INSERT INTO `symptom` (`id`, `name`, `patient_id`, `severity`) VALUES
(1, 'Fever', 1, 'High');

-- --------------------------------------------------------

--
-- Table structure for table `walk_in_appointment`
--

CREATE TABLE `walk_in_appointment` (
  `id` bigint(20) NOT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `hospital_id` bigint(20) DEFAULT NULL,
  `old_time_slot` datetime(6) DEFAULT NULL,
  `patient_id` bigint(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `updated_time_slot` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `walk_in_appointment`
--

INSERT INTO `walk_in_appointment` (`id`, `doctor_id`, `hospital_id`, `old_time_slot`, `patient_id`, `status`, `updated_time_slot`) VALUES
(1, 1, 1, '2024-11-09 09:00:00.000000', 1, 'Confirmed', '2024-11-09 09:30:00.000000'),
(2, 1, 1, '2024-11-09 10:00:00.000000', 1, 'Pending', '2024-11-09 10:30:00.000000'),
(3, 1, 2, '2024-11-09 11:00:00.000000', 2, 'Cancelled', '2024-11-09 11:30:00.000000'),
(4, 1, 2, '2024-11-09 12:00:00.000000', 3, 'Confirmed', '2024-11-09 12:30:00.000000'),
(5, 1, 3, '2024-11-09 13:00:00.000000', 3, 'Pending', '2024-11-09 13:30:00.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKt3fb3www4j9u6b1e1qt9ents3` (`patient_appointment_id`);

--
-- Indexes for table `appointment_symptom`
--
ALTER TABLE `appointment_symptom`
  ADD KEY `FKkcp24bt9pa4qvgo1tkvk5lji2` (`symptom_id`),
  ADD KEY `FKerqix0q6oayg3qiln7teflbq6` (`appointment_id`);

--
-- Indexes for table `availability`
--
ALTER TABLE `availability`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKhafkrnt718oiuu8oo58obetjp` (`doctor_id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKds7ws3yyj4c5wj35fpefpeny0` (`hospital_id`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `symptom`
--
ALTER TABLE `symptom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `walk_in_appointment`
--
ALTER TABLE `walk_in_appointment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `availability`
--
ALTER TABLE `availability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `symptom`
--
ALTER TABLE `symptom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `walk_in_appointment`
--
ALTER TABLE `walk_in_appointment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `FKt3fb3www4j9u6b1e1qt9ents3` FOREIGN KEY (`patient_appointment_id`) REFERENCES `patient` (`id`);

--
-- Constraints for table `appointment_symptom`
--
ALTER TABLE `appointment_symptom`
  ADD CONSTRAINT `FKerqix0q6oayg3qiln7teflbq6` FOREIGN KEY (`appointment_id`) REFERENCES `appointment` (`id`),
  ADD CONSTRAINT `FKkcp24bt9pa4qvgo1tkvk5lji2` FOREIGN KEY (`symptom_id`) REFERENCES `symptom` (`id`);

--
-- Constraints for table `availability`
--
ALTER TABLE `availability`
  ADD CONSTRAINT `FKhafkrnt718oiuu8oo58obetjp` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`);

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `FKds7ws3yyj4c5wj35fpefpeny0` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
