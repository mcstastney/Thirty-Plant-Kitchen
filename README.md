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
### SQL database set up
- Add your local SQL credentials (host/port, username, password) to the >backend>config.py file
- Open MySQL workbench on your desktop, login and click File> Open SQL Script.
- Navigate to the thirty__plant_kitchen database. Open and execute code to create the database.
- You should have access to seasonal plant tables, a customer table and saved recipes table. 

### Python file set up
1. CD into 'Backend' folder in the React app directory.
2. Run: pip install -r requirements.txt in your terminal to install all of the relevant packages from the requirements.txt file.

### React file set up
1. CD into 'group-3-spring-24' folder in the React app directory. 
2. Run these line by line in your terminal:
   
- npm install redux react-redux
- npm install @reduxjs/toolkit
- npm install
- npm i react-router-dom --save styled-components
- npm start
