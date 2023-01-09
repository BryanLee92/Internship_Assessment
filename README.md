# Internship_Assessment

## Requirement:
1. The complete source code of the html forms & javascript, backend and DB backup with structures.
    * HTML forms => Backend/public/index.html
    * Javascript => Backend/public/index.js
    * Backend and DB backup => Backend/Server.js
    * mongoDB models => Backend/models/UserDataSchema.js
#### EXTRA
    * CSS => Backend/public/index.css

2. HTML form with the following user input elements:
    * Name
    * DOB
    * Address
    * Postcode
    * State (Disabled by default)
#### EXTRA
    * City (Disabled by default)


3. State is expected to be filled automatically after the postcode is entered by the user, the backend should be able to return the state based on the postcode

4. Backend should have the following API endpoints:
    * Retrieve the state by postcode
    * Submit/Save
<hr>

## Procedings:
1. Research for postcodes API
    - https://github.com/AsyrafHussin/npm-malaysia-postcodes
2. Create a Form in HTML, CSS, Javascript
3. Create Server.js and with several dependecies:
    - cors
    - dotenv
    - express
    - malaysia-postcodes
    - mongoose
    - nodemon
4. Create models for Schema
<hr>

## Theory and Practical
- By having API direct from the backend server instead of online, i could get instant responds after typed in postcode
- Create a backend URL ( http://localhost:10000/), and create each Element By ID for each input for easier access
- Date of Birth have a bug then can be choosen any day or year which includes future as well. Code are needed! //SOLVED
- Since is malaysia postcodes via malaysia-postcodes API only required numbers and not alphabet, there will be a restrictions on Alphabets(onkeypress). Code are needed! //SOLVED
- Passing info have issue. //SOLVED (credentials: 'same-origin')
- Postcode data are come in Objects. Object.values(req.body) are REQUIRED!
- 2 Ways to POST the user input:
    1. form action="/register" method="POST"
    2. btn.addEventListener('click', (e) =>{})<br>
(I choose 2nd for Practice the fetch method)
#### EXTRA
    * CSS @media screen for phone and tablet
<hr>

## Unresolved and Issues
1. dotenv not working properly
    - const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/internship";
    - const port = process.env.PORT || 10000;
    <br>
- (For some reason it does not detect even after with (require('dotenv').config();) and package.json have ("dotenv": "^16.0.3",))
2. Heroku start to cost money so i use render.com(https://userdata-4isd.onrender.com). Unfortunatly Build failed, still new to render.com, might need more time for research.



