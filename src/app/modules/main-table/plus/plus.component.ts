import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnInit {

  constructor(protected _store: CommonService) { }

  ngOnInit(): void {
  }

}
