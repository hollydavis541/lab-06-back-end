# Code 301 Lab 06 - Node, npm, and Express

**Authors**: Holly Davis, Matt Stewart, Natalie Alway  
**Version**: 1.3.0
<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

## Overview
Creates a node.js server that connects to APIs that provide weather, events, restaurants, and movie showing information to the [City Explorer site](https://city-explorer-code301.netlify.com/). 

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
1. Fork this repository
2. Clone it to your computer
3. In your command line: $ touch .env
4. Add the following to your .env file and save
PORT = 3000
GEOCODE_API_KEY = "[your api goes here]"
WEATHER_API_KEY = "[your api goes here]"
EVENT_API_KEY = "[your api goes here]"
5. Confirm that node is installed: $ node -v (if not installed, do so)
6. To start your server: $ nodemon
7. Go to [City Explorer site](https://city-explorer-code301.netlify.com/) and enter "http://localhost:3000" in the text entry field. Search for a city and you should see the location and weather information. 

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

This is a Node.js server that uses express, dotenv, and cors packages. The server currently references two json data files in order to provide information to the client. 

## Change Log

11-04-2019 08:00 PM - Initial file structure created

11-05-2019 08:40 AM - Location map showing on front end

11-05-2019 11:00 AM - 8-day forecast showing on front end

11-05-2019 11:40 AM - Confirmed error handler
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.-->

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
*Credit to David Vloedman and Travis Skyles for parseWeather function*

***

Number and name of feature: Feature #1 Repository Set Up  
Estimate of time needed to complete: 30 minutes  
Start time: 07:30 PM  
Finish time: 08:00 PM  
Actual time needed to complete: 30 minutes  

Number and name of feature: Feature #2 Locations  
Estimate of time needed to complete: 30 minutes  
Start time: 08:30 AM  
Finish time: 08:40 AM  
Actual time needed to complete: 10 minutes  

Number and name of feature: Feature #3 Weather  
Estimate of time needed to complete: 2 hours  
Start time: 09:00 AM  
Finish time: 11:00 AM  
Actual time needed to complete: 2 hours  

Number and name of feature: Feature #4 Error  
Estimate of time needed to complete:  15 minutes  
Start time: 11:30 AM  
Finish time: 11:40 AM  
Actual time needed to complete: 10 minutes  