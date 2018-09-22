# Level Up!

## Our Goal

To test the app the necessay tables have to be created. The app uses SQL Server to handle data. 
In the server directory and into the procedures folder, the tables can be created by creating the procedures 
on SQL Server Management Studio. Then the following procedures being executed will set up the database to interact with the app. 
createAllTables
populateAllTables

## How to run

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ cd 'name of directory where you want the files'
$ git clone git@github.com:Delaware2018/team-1.git #or clone your own fork
$ cd team-1
```

### Server

* Create a .env file in the server directory and fill out the details similar to sample.env
* The tables can be created by creating the procedures on SQL Server Management Studio by using the procedures we provided 

```sh
$ cd server
$ npm install
$ npm start
```

### Mobile Application

