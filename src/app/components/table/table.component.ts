import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { TableData } from 'src/app/interfaces/table-data.interface';
import { compareBooleans, compareDates, compareStringsOrNumbers } from 'src/app/helpers/compare.helper';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges, AfterViewInit {
  @Input()
  public tableData: TableData[];
  public dataSource: MatTableDataSource<TableData>;
  displayedColumns: string[] = ['id', 'name', 'minValue', 'maxValue', 'available', 'dateIntroduced'];

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.tableData) {
      this.dataSource.data = this.tableData;
    }
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortData = (data: TableData[], sort: MatSort) => this.sortData(data, this.sort);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private sortData(data: TableData[], sort: MatSort): TableData[] {
    return data.sort((a: TableData, b: TableData) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'available': return compareBooleans(a.available, b.available, isAsc);
        case 'dateIntroduced':
          const dateA: Date =  a.dateIntroduced  ? new Date(String(a.dateIntroduced)) : new Date();
          const dateB: Date =  b.dateIntroduced ? new Date(String(b.dateIntroduced)) : new Date();

          if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
            console.error('sortData: Date parsing error during sorting');
            return compareStringsOrNumbers(String(a.dateIntroduced), String(b.dateIntroduced), isAsc)
          }

          return compareDates(dateA, dateB, isAsc);         
        case 'name': return compareStringsOrNumbers(a.name, b.name, isAsc);
        case 'minValue': return compareStringsOrNumbers(a.minValue, b.minValue, isAsc);
        case 'maxValue': return compareStringsOrNumbers(a.maxValue, b.maxValue, isAsc);
        case 'id':
        default: return compareStringsOrNumbers(a.id, b.id, isAsc);
      }
    });
  }
}
