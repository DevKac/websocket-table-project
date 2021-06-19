import { Component, OnInit } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TableData } from 'src/app/interfaces/table-data.interface';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public tableData$: Observable<TableData[]>;
  private destroyed$: Subject<void> = new Subject();

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit(): void {
    this.tableData$ = this.tableService.fetchTableData();
    this.tableService.connectToTableData().pipe(
      takeUntil(this.destroyed$)
    ).subscribe((testNumber: number) => {
      console.log(testNumber);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Table Data Complete');
    })
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
