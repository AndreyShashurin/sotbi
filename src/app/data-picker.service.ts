import { Injectable } from '@angular/core';
import * as $ from 'jquery';
declare var $ : any;

@Injectable({
  providedIn: 'root'
})
export class DataPickerService {

  constructor() { }
  
  getDatePicker() {

    function Datepicker() {}

    Datepicker.prototype.init = function(params) {
      this.eInput = document.createElement("input");
      this.eInput.value = params.value;
      $(this.eInput).datepicker({ 
        dateFormat: "dd.mm.yy",
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
              'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
              'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        firstDay: 1
      });
    };

    Datepicker.prototype.getGui = function() {
      return this.eInput;
    };

    Datepicker.prototype.afterGuiAttached = function() {
      this.eInput.focus();
      this.eInput.select();
    };

    Datepicker.prototype.getValue = function() {
      return this.eInput.value;
    };

    Datepicker.prototype.isPopup = function() {
      return false;
    };

    return Datepicker;
  }
}
