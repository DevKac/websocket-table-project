import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TableData } from 'src/app/interfaces/table-data.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {
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
}
