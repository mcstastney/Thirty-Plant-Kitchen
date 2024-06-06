# group-3-fullstack
*30 Plant Kitchen*

Created by:

[Abbie Kennard-Jones](https://github.com/AbbieKJ)
---
[Shafia Kashim](https://github.com/sfk30)
---
[Elisa McGarry](https://github.com/mcstastney)
---
[Sahra Abdirahman](https://github.com/sahraa17)
---
[Emma McGuire](https://github.com/emmamcguire31)
---
[Victoria (Plum) Bristow](https://github.com/Victoria-Plum)
---

Tasks are organised and managed on [Jira](https://group-3-spring-24.atlassian.net/jira/software/projects/KAN/boards/1)

## Set up required to run the app
Follow the steps below in this order:

### Clone the Github repository
- Create an empty folder on local drive.
- Copy HTTPS code from Github repo.
- Open a Git window and change directory into the empty folder.
- Run command: git clone https://github.com/mcstastney/group-3-fullstack.git

### SQL database set up
- Open MySQL workbench on your desktop, login and click File> Open SQL Script.
- Navigate to the thirty__plant_kitchen database. Open and execute code to create the database.
- You should have access to seasonal 6 plant tables, a customer table and saved recipes table. 

### Python file set up
1. Open Visual Studio code and open the cloned Github repo folder.
2. In the terminal, change directory into the ‘backend’ folder in the React app directory.
3. In the config.py file, add your SQL host, root and password credentials and save. 
4. Run: pip install -r requirements.txt in your terminal to install all of the relevant packages from the requirements.txt file.
5. Run: python app.py to start the server. 

### React file set up
1. CD into 'group-3-spring-24' folder in the React app directory. 
2. Run these line by line in your terminal:
   
- npm install
- npm install redux react-redux
- npm install @reduxjs/toolkit
- npm i react-router-dom --save styled-components
- npm start
