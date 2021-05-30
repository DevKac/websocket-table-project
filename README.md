# WebsocketTableProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

Aim of this project is to create a table updating it's values via a websocket.

## FE App
Angular application displaying data from BE in constant and fluent way. Requirements:
- table should work correctly on multiple browsers for up to 100 elements (no paging)
- table should highlight for some time cells in which change occured
- table should allow for sorting it's elements (FE sorting)

## BE App
Node application serving randomly changing data of up to 100 elements. Updating data every one second and pushing them to FE via Websocket
