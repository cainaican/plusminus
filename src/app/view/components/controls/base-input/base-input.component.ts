import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BaseControl } from 'src/app/interfaces/base-control';

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
  changeVisibility(event: any) {
    this.edit = !this.edit
  }
  returnID() {
    this.emitId.emit(this.control?.id);
  }
}
