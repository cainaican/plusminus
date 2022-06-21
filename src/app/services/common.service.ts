import { Injectable} from '@angular/core';
import {PlusService} from "./plus/plus.service";
import {MinusService} from "./minus/minus.service";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public result: number = 0

  constructor(public plusService: PlusService, public minusService: MinusService) { }

  countResult(){
    this.result = this.plusService.summ - this.minusService.summ
  }
}
