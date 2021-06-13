// todo: zmienić zapis na modułowy?
const WebSocket = require('ws');
const BehaviorSubject = require('rxjs/BehaviorSubject').BehaviorSubject;

const wss = new WebSocket.Server({
  port: 8080,
});

let tableDataSubject = new BehaviorSubject(0); // domyślna wartość do ustawienia
let tableDataInterval;

wss.on('listening', () => {
  console.log('wss listening');

  // start streaming
  tableDataInterval = setInterval(() => {
    // pobranie/generacja danych
    const result = Math.random();
    console.log(result);
    tableDataSubject.next(result);
  }, 5000); // czas jako const
});

wss.on('connection', (ws) => {
  console.log('wss connection');
  
  // subscribe to stream
  const tableDataSubscription = tableDataSubject.subscribe((tableData) => {
    console.log(`newResult ${tableData}`);
    ws.send(tableData);
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
  console.log('wss error'); // obsługa błędów do zrobienia
});

wss.on('close', () => {
  console.log('wss close');
  
  // close streaming
  clearInterval(tableDataInterval);
});

setTimeout(() => {
  wss.close();
}, 60*1000)
