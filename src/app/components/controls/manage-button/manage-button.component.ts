import {Component, Input, OnInit} from '@angular/core';
import {EventTypeHandler} from "../../../types/enums";
import {BaseControl, DebtControl} from "../../../interfaces/BaseControl";
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-manage-button',
  templateUrl: './manage-button.component.html',
  styleUrls: ['./manage-button.component.scss']
})
export class ManageButtonComponent implements OnInit {

  @Input() buttonText: string = 'default'
  @Input() eventType: EventTypeHandler = EventTypeHandler.MinusAdd;

  constructor(public _store: CommonService) { }

  ngOnInit(): void {
  }

  eventHandler(){
    switch (this.eventType){
      case EventTypeHandler.MinusAdd: this._store.currentMonth.minusModel.addControl(this.addMinusForm());
        break;
      case EventTypeHandler.MinusRem: this._store.currentMonth.minusModel.removeControl();
        break;
      case EventTypeHandler.PlusAdd: this._store.currentMonth.plusModel.addControl(this.addPlusForm());
        break;
      case EventTypeHandler.PlusRem: this._store.currentMonth.plusModel.removeControl();
        break;
      case EventTypeHandler.DebtAdd: this._store.currentMonth.debtsModel.addControl(this.addDebtForm());
        break;
      case EventTypeHandler.DebtRem: this._store.currentMonth.debtsModel.removeControl();
        break;
      default: alert('add event handler')
    }
  }
  addMinusForm(){
    const form: BaseControl = {
      id: this._store.currentMonth.minusModel.controls.length + 1,
      name: 'find the name',
      type: 'minus',
      count: 0
    }
    return form
  }
  addPlusForm(){
    const form: BaseControl = {
      id: this._store.currentMonth.plusModel.controls.length + 1,
      name: 'find the name',
      type: 'plus',
      count: 0
    }
    return form
  }
  addDebtForm(){
    const form: DebtControl = {
      id: this._store.currentMonth.plusModel.controls.length + 1,
      name: 'find the name',
      type: 'plus',
      count: 0,
      commonDebtCount: 0
    }
    return form
  }
}
