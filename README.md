# Tower Tracker

An app that lets bell ringers record when they ring at a new bell tower. Many ringers keep a handwritten log or an Excel spreadsheet to list their "tower grabs". 
This app will be designed to simplify this record-keeping into one centralized location that has all the tower data and custom fields that a ringer could need.

The tower data is from [Dove's Guide for Church Bell Ringers](https://dove.cccbr.org.uk/downloads.php)

## To Run Locally

1. Fork and clone the repo
2. Install dependencies
```
cd tower-tracker
npm i
```
3. Setup a local postgres database and make an .env file with the following database credentials.
```
PGHOST=
PGUSER=
PGDATABASE=
PGPASSWORD=
PGPORT=
```
4. Run scripts to create and populate the towers table
```
npm run db:create-towers-table
npm run db:populate-towers-table
```
_Note that the populate-towers-table script needs your database user to a superuser to have access to the towers.csv file. 
If this create doesn't work run the psql command within the comments of the script file._

5. Start the server
```
npm run dev
```

## Project Goals

- Tower data stored in a Postgres database _- in progress_
- Users' personal tower records in a NoSQL database
- Datastores and frontend connected with a GraphQL API

## Learning Log

As well as being a hopefully useful app that the bell ringing community could use and enjoy, 
this project is also serving as a way for myself to learn a lot more about data storage and management.
I will be logging some of the things I learn as I work here.

1. Copying a .csv file to a Postgres database
    - Trying to do it client side (for example with an npm script) requires the postgres server to read the file directly. This means that the user must have a superuser role. 
    - Despite being a superuser, running the COPY query client-side had an access denied error.
    - To get around this I ran this command from the psql client: ```\copy towers FROM '<absolute-path-to-csv-file>' with (format csv, header true, delimiter ',');```
2. Database character encoding
    - Non-English characters in the data file created errors when the client tried to encode them. It was fixed by changing the database encoding to UTF8.
    - ```set client_encoding to UTF8;``` - to change encoding
    - ```show client_encoding;``` - to show the current encoding
