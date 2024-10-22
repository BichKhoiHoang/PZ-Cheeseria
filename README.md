# PZ-Cheeseria

project-root/
│
├── server/
│   ├── Dockerfile        <-- Dockerfile for backend
│   ├── index.js          <-- Backend server code
│   ├── package.json      <-- Node.js dependencies
│   ├── routes/
|        ├── data.js      <-- API Router handler
│   └── public/ 
|        ├── images       <-- Cheese images
│   ├── swagger.yaml      <-- Swagger Documentation
│   ├── cheeses.sql       <-- Create and Insert cheeses data
│
├── client/
│   ├── src/
|        ├── Components      
|              ├── Calculator.js      <-- function to calculate cheese price
│   ├── package.json                  <-- React app (frontend)
│   └── tailwind.config.js            <-- Tailwind Config
│   ├── package.json                  <-- Dependencies
│   ├── App.css
│   ├── App.js
│   ├── Dockerfile                    <-- Dockerfile for frontend
└── docker-compose.yml                <-- Use for multi-container setup

Front-end: using React, Tailwind CSS and Daisy UI
Back-end: using Node JS and Express

Database: using mysql2


To set up database, run 
mysql -u root -p < cheeses.sql 

The website:
<img width="1293" alt="Screenshot 2024-10-15 at 11 03 33 PM" src="https://github.com/user-attachments/assets/5a22f48a-a95b-4a37-a25c-729376f01066">
<img width="1680" alt="Screenshot 2024-10-22 at 9 51 42 AM" src="https://github.com/user-attachments/assets/3e7f67be-eea0-4052-99be-233e4ee878d6">
