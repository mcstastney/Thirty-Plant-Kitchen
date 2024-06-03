# group-3-fullstack
*30 Plant Kitchen*

Created by:

[Abbie Kennard-Jones](https://github.com/AbbieKJ)
[Shafia Kashim](https://github.com/sfk30)
[Elisa McGarry](https://github.com/mcstastney)
[Sahra Abdirahman](https://github.com/sahraa17)
[Emma McGuire](https://github.com/emmamcguire31)
[Victoria (Plum) Bristow](https://github.com/Victoria-Plum)

Tasks are organised and managed on [Jira](https://group-3-spring-24.atlassian.net/jira/software/projects/KAN/boards/1)

## Set up required to run the app
Follow the steps below in this order:
### SQL DB set up
Add your local SQL password to the >backend>config.py file
Open SQL on your desktop, login and click File> Open SQL Script. Navigate to the thirty_kitchen_database and the seasonal_produce database. Open both and execute code to create the SQL DBs

### Python file set up
1.    You can ignore this step for testing – I’ve left me keys in the file. Just leaving it here so i remember to add it in the readme Add API_key and API_ID to the >backend>app.py file
	
2.     CD into backend folder:
	cd location-on-your-local-drive\group-3-fullstack\group-3-spring-24\backend

4.     Run these line by line in your terminal:
	pip install flask-cors
	pip install requests
	pip install mysql-connector-python
	python app.py

### React file set up
CD into frontend / main folder: cd location-on-your-local-drive\group-3-fullstack\group-3-spring-24
Run these line by line:
npm install redux react-redux
npm install @reduxjs/toolkit
npm install
npm i react-router-dom --save styled-components
npm start
