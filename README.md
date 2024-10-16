# Sports Booking App

**College Enrollment Number**: IIT2021167  
**Name**: Yashika Singh Panwar

---

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [Dependencies](#dependencies)
- [Usage Instructions](#usage-instructions)
- [Deployed Application Links](#deployed-application-links)
- [Contact Information](#contact-information)

---

## Introduction

This is a full-stack sports booking application developed for a sports technology company's operations team. The application allows users to view and create bookings for various sports facilities, ensuring that there are no double bookings for the same court and time slot. It supports multiple centers, each offering different sports and courts, providing an efficient solution for managing sports bookings.


## Project Overview

The app manages multiple centers, multiple sports at each center, and multiple courts/resources for each sport. Users can easily view existing bookings and create new ones for any sport.

---

## Prerequisites

- Node.js installed
- MongoDB installed or a cloud database like MongoDB Atlas
- Git (optional for version control)

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repo-link>
   cd sports-booking-app
Install the required dependencies:

bash
Copy code
npm install
Ensure your MongoDB is running locally or use a cloud database.

Set up your MongoDB connection directly in the server code as needed.

## Running the Application
Running the Backend Server
The backend server can be run using the following command in the project directory:

bash
Copy code
node server.js
The server will run on http://localhost:3000 by default.

## Running the Frontend App
The frontend app is served through the same server. Access the application in your browser at:
Copy code
http://localhost:3000
## Deployment
Backend Deployment

Frontend Deployment
Since the frontend is served directly through the Node.js backend, you don't need a separate deployment step for the frontend.

## Assumptions and Limitations
The application assumes that MongoDB is set up and running.
It currently supports basic functionality for viewing and creating bookings, with potential for future enhancements.
Dependencies
Express.js
Mongoose
Node.js
MongoDB
## Usage Instructions
Select a center from the dropdown.
Choose a sport.
Select a date for booking.
Click "View Bookings" to see existing bookings.
Fill in the court number and time slot, then click "Create Booking" to add a new booking.
## Deployed Application Links
Currently, there are no deployed links as this is a local application.
