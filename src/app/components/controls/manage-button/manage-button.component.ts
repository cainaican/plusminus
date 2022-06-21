import {Component, Input, OnInit} from '@angular/core';
import {PlusService} from "../../../services/plus/plus.service";
import {MinusService} from "../../../services/minus/minus.service";
import {EventTypeHandler} from "../../../types/enums";
import {BaseControl} from "../../../interfaces/BaseControl";
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
      case EventTypeHandler.MinusAdd: this._store.minusService.addControl(this.addMinusForm());
        break;
      case EventTypeHandler.MinusRem: this._store.minusService.removeControl();
        break;
      case EventTypeHandler.PlusAdd: this._store.plusService.addControl(this.addPlusForm());
        break;
      case EventTypeHandler.PlusRem: this._store.plusService.removeControl();
        break;
      default: alert('add event handler')
    }
  }
  addMinusForm(){
    const form: BaseControl = {
      id: this._store.minusService.controls.length + 1,
      name: 'find the name',
      type: 'minus',
      count: 0
    }
    return form
  }
  addPlusForm(){
    const form: BaseControl = {
      id: this._store.plusService.controls.length + 1,
      name: 'find the name',
      type: 'plus',
      count: 0
    }
    return form
  }
}
