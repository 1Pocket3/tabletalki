Referrals Dashboard
This is a React-based web application that displays a table of referral events. It utilizes the Material-UI library for creating a clean and user-friendly table interface. The table contains information about referral events, advocates, friends, and their referral statuses.

Table of Contents
Getting Started
Prerequisites
Installation
Usage
Components
License
Getting Started
To get this application up and running, follow the installation and usage instructions below.

Prerequisites
Before you begin, ensure you have the following software installed:

Node.js
npm (Node Package Manager)
Installation
Clone this repository to your local machine:

git clone <repository-url>
Navigate to the project directory:

cd <project-directory>
Install the project dependencies using npm:

npm install
Usage
To start the application, run the following command:

Copy code
npm start
This will start the development server, and you can access the application in your web browser at http://localhost:3000.

Components
App.js
This is the main entry point of the application. It defines the structure of the web page and uses the DataTable component to display referral event data.

DataTable.js
The DataTable component is responsible for rendering the table that displays the referral event data. It uses Material-UI components for table layout and styling.

Columns
The table has the following columns:

Referral Event
Advocate
Friend
Referral Status
Data
Sample referral event data is provided within the component for demonstration purposes. You can replace this data with your own data source.

License
This project is licensed under the MIT License - see the LICENSE file for details.