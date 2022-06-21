import { Component, DoCheck, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, DoCheck {

  constructor(public _store: CommonService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this._store.minusService.countSumm()
    this._store.plusService.countSumm()
    this._store.countResult()
  }


}
