# CST8911 Midterm Project

## Group 2 members - Desmond Murphy, Dharti Patel, Fayz Reshid, Kylath Mamman George, Olivie Bergeron

## Chosen scenario - scenario 1

## Auth-Server documentation and source code

[Auth-Server Source Code](https://github.com/OlivBerg/auth-server),
[Auth-Server Documentation](https://github.com/OlivBerg/auth-server/blob/main/readme.md)

---

## Policy Error

![alt text](image.png)

- Created a low-cost Azure VM using the B1s size to keep costs down while still meeting project needs. Faced a policy restriction when trying to deploy in the US East region, so we switched to Canada Central for compatibility with the Azure for Students subscription.

## Creating a Function App

![alt text](image-7.png)

- Created an Azure Function App named restful-function using the Node.js 22 LTS runtime stack. 

## Creating GET and POST HTTP trigger functions

![alt text](image-10.png)

- Added HTTP trigger functions to handle GET and POST requests for the REST API.
This lets the Function App respond to incoming requests without needing a full server.

### getTrigger

![alt text](image-11.png)

- Created a new HTTP trigger function named getTrigger. This function allows users to send a GET request and receive data from the database.The authorization is kept at Function app for basic authentication while testing.

### postTrigger

![alt text](image-12.png)

- Created another HTTP tirgger functions named postTrigger. This function handles POST requests to add new data to the database. Used the same Function authorization level for consistency with the GET trigger. 

### Adding the cosmoDB primary connection string

![alt text](image-5.png)

- Added the Cosmos DB connection string to the Function App’s environment variables.
This allows the Function App to securely connect to the database without exposing credentials in code. 

### Where the cosmoDB primary connection String is located

![alt text](image-6.png)

- 
## Creating a Javascript function that fetches all data from the database

![alt text](image-8.png)

## Connecting the Trigger by adding function context into the function.json to fetch the database

![alt text](image-9.png)

## Creating a Javascript function that creates a new product in the database

![alt text](image-15.png)

## Connecting the Trigger by adding function context into the function.json to post data the database

![alt text](image-16.png)

## Created App Service Web app for the Auth Server

![alt text](image-17.png)

### In the Web app we connected our github account to setup a CI/CD pipeline for our Auth Server

![alt text](image-18.png)

### Environment variables for the Auth server

These variable were added:

- AZURE_GET_URL
- AZURE_POST_URL
- JWT_SECRET
- PORT

![alt text](image-19.png)

## Creating a VM to test our Authentication

![alt text](image-20.png)

## Creating a session with the Auth server hosted through a VM

![alt text](image-21.png)

## Sending a POST request to add a product to our db

![alt text](image-22.png)

## Retrieving products from our DB

![alt text](image-23.png)
