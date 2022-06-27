import {Component, DoCheck, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit, DoCheck {

  constructor(public _store: CommonService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this._store.currentMonth.debtsModel.countSumm()
    this._store.countResult()
  }

}
