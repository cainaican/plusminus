import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseControl} from "../../../interfaces/BaseControl";

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent implements OnInit {

  @Input() control!: BaseControl
  @Output() emitId = new EventEmitter<number>();

  public title: any
  public edit: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
  onChange(){
    console.log(this.title)
  }
  changeVisibility() {
    this.edit = !this.edit
  }
  returnID() {
    this.emitId.emit(this.control?.id);
  }
}
