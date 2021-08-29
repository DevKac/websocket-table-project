# WebsocketTableProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

Aim of this project is to create a table updating it's values via a websocket.

## FE App
Angular application displaying data from BE in constant and fluent way. Requirements:
- table should work correctly on multiple browsers for up to 100 elements (no paging) with live date reload (via websocket). Done
- table should allow for sorting and filtering it's elements (FE sorting and filtering with angular-material). Done
- table should have loading and error state. Done
- dates and booleans should be nicely presented. Done
- [optional] design and implement mobile view
- [optional] table should highlight for some time cells in which change occured
- [optional] unit testing

## BE App
Node application serving randomly changing data via Websocket. Requirements:
- randomly generating any number of records. Done with a usage of Faker
- random chance of data changing occuring every X seconds where X can be configured. Done
- if any error occurs while generating data send null/undefined to FE. Done
- [optional] add configuration and coding alowing for any data to change, not only values
- [optional] unit testing
