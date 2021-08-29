import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataState } from 'src/app/enums/data-state.enum';

import { TableData } from 'src/app/interfaces/table-data.interface';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public tableData: TableData[];
  public tableDataState: DataState;
  public readonly dataState: typeof DataState = DataState;
  private destroyed$: Subject<void> = new Subject();

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit(): void {
    this.initFetchingTableData();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  public resetFetchingTableData(): void {
    this.initFetchingTableData();
  }

  private initFetchingTableData(): void {
    this.tableDataState = DataState.LOADING;

    this.tableService.connectToTableData().pipe(
      takeUntil(this.destroyed$)
    ).subscribe((tableData: TableData[]) => {
      this.tableData = tableData;
      this.tableDataState = DataState.SUCCESS;
    }, error => {
      this.handleFetchingTableData(error);
    }, () => {
      this.handleFetchingTableData();
    })
  }

  private handleFetchingTableData(error?: HttpErrorResponse): void {
    if (error) {
      console.error(error);
    }
    this.tableData = [];
    this.tableDataState = DataState.ERROR;
  }
}
