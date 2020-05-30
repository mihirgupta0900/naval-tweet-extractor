# Tweet Extractor
A  simple MERN app that extracts tweets of [Naval Ravikant](https://twitter.com/naval) (Actually taken from [NavalBot](https://twitter.com/NavalBot) twitter acount to get better tweets)  from the [Twitter API](https://developer.twitter.com/en/docs).
It fetches the top 2 tweets from NavalBot twitter timeline and the top 200 (more added when new tweets are posted) are saved in my Atlas MongoDB database to increase speed. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Node and npm 

### Installing 
Go into the project directory
```shell
cd project-folder
```
Install the dependencies for the server
```shell
npm install
```
Go in the client directory and install the client dependencies
```shell
cd client
npm install
```
Go back a directory and run the project using concurrently
```shell
cd ..
npm start
```
Then go to http://localhost:3000 to visit the application.

### Deployement
React app and backend deployed with Heroku and databse hosted on MongoDB Atlas

### Built With
- Javascript: Primary  Language
 - [React](https://reactjs.org/) Front End Library
 - [http://expressjs.com/](http://expressjs.com/) Backend Framework

## Author
[Mihir Gupta](https://github.com/mihirgupta0900) is the sole contributor to this application.

## Acknowledgments
- Twitter API
- [George Mack](https://twitter.com/george__mack) for the writing the  code for the twitter bot which I am using to fetch the tweets.