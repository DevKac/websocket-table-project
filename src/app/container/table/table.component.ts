import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TableData } from 'src/app/interfaces/table-data.interface';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public tableData$: Observable<TableData[]>;

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit(): void {
    this.tableData$ = this.tableService.fetchTableData();
  }
}
