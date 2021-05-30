# WebsocketTableProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

Aim of this project is to create a table updating it's values via a websocket.

## FE App
Angular application displaying data from BE in constant and fluent way. Requirements:
- table should work correctly on multiple browsers for up to 100 elements (no paging) with live date reload (vie websocket)
- table should highlight for some time cells in which change occured
- table should allow for sorting and filtering it's elements (FE sorting and filtering with angular-material). Done
- table should have loading and error state
- we will see about testing, don't really feel like :D
- dates and booleans should be nicely presented, maybe with a pipe?

## BE App
Node application serving randomly changing data of up to 100 elements. Updating data every second and pushing them to FE via Websocket
