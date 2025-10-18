# CST8911 Midterm Project

[Auth-Server Source Code](https://github.com/OlivBerg/auth-server)
[Auth-Server Documentation](https://github.com/OlivBerg/auth-server/blob/main/readme.md)

## Scenario 1

## Screenshots

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)

## Creating a Function App

![alt text](image-7.png)

## Creating Get, Post, Delete and Update httptriggers

![alt text](image-10.png)

## Added env. variable to connected CosmoDB to the HttpTrigger

### getTrigger

![alt text](image-11.png)

### postTrigger

![alt text](image-12.png)

### Adding the cosmoDB connection string

![alt text](image-5.png)

### Where the cosmoDB Connection String is located

![alt text](image-6.png)

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

### We created env variables for the Auth server

These variable we added

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

## Retrieveing products from our DB

![alt text](image-23.png)
