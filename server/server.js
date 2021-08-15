const WebSocket = require('ws');
const BehaviorSubject = require('rxjs/BehaviorSubject').BehaviorSubject;
const faker = require('faker');

const dataGenerator = require('./data-generator.js');

// configuration
const intervalTime = 5000;
const nrOfObjects = 100;
const dataChangeChance = 0.2;

const wss = new WebSocket.Server({
  port: 8080,
});
let tableDataSubject = new BehaviorSubject(
  dataGenerator.generateFakerData(faker, nrOfObjects)
);
let tableDataInterval;

wss.on('listening', () => {
  console.log('wss listening');

  // start streaming
  tableDataInterval = setInterval(() => {
    // update data
    const updatedTableData = dataGenerator.updateFakerData(faker, tableDataSubject.getValue(), dataChangeChance);
    tableDataSubject.next(updatedTableData);
  }, intervalTime);
});

wss.on('connection', (ws) => {
  console.log('wss connection');
  
  // subscribe to stream
  const tableDataSubscription = tableDataSubject.subscribe((tableData) => {
    ws.send(JSON.stringify(tableData));
  });
  
  ws.on('close', () => {
    console.log('connection is closed');

      // unsubscribe from stream
      if (tableDataSubscription) {
        tableDataSubscription.unsubscribe();
      }
  });
});

wss.on('error', () => {
  console.log('wss error');
});

wss.on('close', () => {
  console.log('wss close');
  
  // close streaming
  clearInterval(tableDataInterval);
});

// setTimeout(() => {
//   wss.close();
// }, 60*1000)
