import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.scss']
})
export class MinusComponent implements OnInit {


  constructor(protected _store: CommonService) { }

  ngOnInit(): void {
  }

}
