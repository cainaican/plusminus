import {ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, DoCheck {

  constructor(public _store: CommonService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this._store.currentMonth.minusModel.countSumm()
    this._store.currentMonth.plusModel.countSumm()
    this._store.countResult()
    this._store.countTotalResult()
    localStorage.setItem('months', JSON.stringify(this._store.months))
    localStorage.setItem('currentMonth', JSON.stringify(this._store.currentMonth))

  }


}
