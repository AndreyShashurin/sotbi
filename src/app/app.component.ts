import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { DataPickerService } from './data-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public gridOptions: GridOptions; 
  public rowData: any[];  
  public columnDefs: any[];
  private components;
  
  constructor(private dataPicker: DataPickerService) { 
    
  }

  ngOnInit() {
    this.gridOptions = < GridOptions > {  
      onGridReady: () => {  
          this.gridOptions.api.sizeColumnsToFit();  
      }  
    };  
    this.columnDefs = [
      {headerName: 'Name', field: 'make', editable: true},
      {headerName: 'Model', field: 'model', editable: true},
      {headerName: 'Date', field: 'date', editable: true,  cellEditor: "datePicker"}
    ];
    this.rowData = [
      {make: 'Toyota', model: 'Celica', date: '05.10.2019'},
      {make: 'Ford', model: 'Mondeo', date: '05.10.2019'},
      {make: 'Porsche', model: 'Boxter', date: '05.10.2019'}
    ]; 
    this.components = { datePicker: this.dataPicker.getDatePicker() };
  }
  
}