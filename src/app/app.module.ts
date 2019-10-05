import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { DataPickerService } from './data-picker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [DataPickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
