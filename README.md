# Thirty Plant Kitchen app

## About the project
The Thirty Plant Kitchen app was developed to address multiple user needs by promoting sustainable eating habits, simplifying meal planning, and encouraging healthier diets. The app achieves these goals by helping users identify seasonal ingredients and providing recipes that incorporate 30 different plants per week.

### Key features
- **Sustainable Meal Planning:** Users can search for recipes based on seasonal and locally-sourced ingredients, reducing their carbon footprint.
- **Recipe Generator:** The app includes a recipe generator that provides meal ideas based on selected seasonal produce.
- **Health Tracking:** A plant counter tracks users' intake of different plants, encouraging a diverse and balanced diet.
- **User Account Management:** Features for sign-up, login, and saved recipes ensure personalized user experiences.

### Technical specifications
- **Backend:** Developed using Flask with MySQL for data management and Bcrypt for user authentication.
- **Frontend:** Built with React and Redux, employing React Router for navigation and Material-UI for styling.
- **APIs:** Utilised an internal SQL database for seasonal plants and the Edamam recipe API for recipe searches.
- **Testing:** Conducted component, integration, and end-to-end testing using Jest, React Testing Library and React Dev Chrome exetnsion to ensure functionality and reliability.

## Set up required to run the app
To run the Thirty Plant Kitchen app, the user requires the following:
- GitHub account
- Git
- Visual Studio Code
- MySQL workbench
- Internet connection

Follow the steps below in this order:

### Clone the Github repository
1. Create an empty folder on local drive.
2. Copy HTTPS code from Github repo.
3. Open a Git window and change directory into the empty folder.
4. Run command: **git clone https://github.com/mcstastney/group-3-fullstack.git**

### Set up backend
1. Open MySQL workbench on your desktop, login and click File> Open SQL Script.
2. Navigate to the thirty__plant_kitchen database.
3. Open and execute code to create the database.
4. You should have access to seasonal 6 plant tables, a customer table and saved recipes table.

Next, set up the backend file in the app:
1. Open Visual Studio code and open the cloned Github repo folder.
2. In the terminal, change directory into the ‘backend’ folder in the React app directory.
3. In the config.py file, add your SQL host, root and password credentials and save. 
4. Run: **pip install -r requirements.txt** in your terminal to install all of the relevant packages from the requirements.txt file.
5. Run: **python app.py** to start the server. 

### Set up frontend
1. CD into 'group-3-spring-24' folder in the React app directory.
2. Run these line by line in your terminal: 
- npm install
- npm install redux react-redux
- npm install @reduxjs/toolkit
- npm i react-router-dom --save styled-components
- npm start

## Team members
- [Abbie Kennard-Jones](https://github.com/AbbieKJ)
- [Elisa McGarry](https://github.com/mcstastney)
- [Emma McGuire](https://github.com/emmamcguire31)
- [Sahra Abdirahman](https://github.com/sahraa17)
- [Shafia Kashim](https://github.com/sfk30)
- [Victoria (Plum) Bristow](https://github.com/Victoria-Plum)
