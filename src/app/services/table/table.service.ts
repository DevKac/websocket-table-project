import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { TableData } from 'src/app/interfaces/table-data.interface';

// TODO: do wyniesienia do env lub const
const WS_URL: string = "ws://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public tableData: Subject<number>;
  private wsConnection$: WebSocketSubject<TableData[]>;

  public connectToTableData(): Observable<TableData[]> {
    if (this.wsConnection$) {
      return this.wsConnection$;
    } else {
      this.wsConnection$ = webSocket(WS_URL);
      return this.wsConnection$;
    }
  }
}
