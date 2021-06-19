import { Injectable } from '@angular/core';

import { Observable, Observer, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { TableData } from 'src/app/interfaces/table-data.interface';

// TODO: do wyniesienia do env lub const
const WS_URL: string = "ws://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public tableData: Subject<number>;
  private wsConnection$: WebSocketSubject<number>;

  // TODO: in later development this will be received from BE. For now this is a simple mock for FE table development
  public fetchTableData(): Observable<TableData[]> {
    return of(
      [
        {
          id: '123',
          name: 'test123',
          minValue: 0,
          maxValue: 100,
          available: true,
          dateIntroduced: '2018-05-30'
        },
        {
          id: '234',
          name: 'test234',
          minValue: 45,
          maxValue: 50,
          available: true,
          dateIntroduced: '2021-01-01'
        },
        {
          id: '345',
          name: 'test345',
          minValue: 10,
          maxValue: 1000,
          available: true,
          dateIntroduced: '2001-12-12'
        },
        {
          id: '456',
          name: 'test456',
          minValue: 0,
          maxValue: 100,
          available: false,
        },
        {
          id: '567',
          name: 'test567',
          minValue: 0,
          maxValue: 100,
          available: false,
        },
      ]
    )
  }

  public connectToTableData(): Observable<number> {
    if (this.wsConnection$) {
      return this.wsConnection$;
    } else {
      this.wsConnection$ = webSocket(WS_URL);
      return this.wsConnection$;
    }
  }

  private createWSConnection(url: string): void {
    console.log('createWSConnection with url ' + url);
    const subject = webSocket(url);

    subject.subscribe(
      msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
    // let ws = new WebSocket(url);

    // ws.onmessage

    // if (!this.socket$ || this.socket$.closed) {
      
    //   const messages = ws.pipe(
    //     tap({
    //       error: error => console.log(error),
    //     }), catchError(_ => EMPTY));
    //   this.messagesSubject$.next(messages);
    // }
    // let ws = new WebSocket(url);

    // let observable = new Observable((obs: Observer<MessageEvent>) => {
    //   console.log('New event in Observable');
    //   console.log(obs);
    //   ws.onmessage = obs.next.bind(obs);
    //   ws.onerror = obs.error.bind(obs);
    //   ws.onclose = obs.complete.bind(obs);
    //   return ws.close.bind(ws);
    // });
    // let observer = {
    //   next: (data: Object) => {
    //     console.log('New event in Observer');
    //     console.log(data);
    //     if (ws.readyState === WebSocket.OPEN) {
    //       ws.send(JSON.stringify(data));
    //     }
    //   }
    // };
    // return Subject.create(observer, observable);
  }
}
