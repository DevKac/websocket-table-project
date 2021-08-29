import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { TableComponent as TableContainerComponent } from './container/table/table.component';
import { TableComponent } from './components/table/table.component';
import { DisplayDatePipe } from './pipes/display-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    TableComponent,
    DisplayDatePipe
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
