import {DebtControl} from "../interfaces/BaseControl";
import {AddRemoveController} from "../services/addRemoveController";

export class DebtsModel extends AddRemoveController {

  private _controls: DebtControl[] = [{
    id: 1,
    type: 'base',
    name: 'name',
    count: 0,
    commonDebtCount: 0
  }];
  summ: number = 0

  constructor() {
    super()
  }

  get length(): number {
    return this._controls.length
  }

  get controls(): DebtControl[] {
    return this._controls;
  }

  addControl(control: DebtControl): void {
    this._controls.push(control)
  }

  removeControl(): void {
    this._controls.pop()
  }

  removeExactControl(id: number){
    this._controls = this._controls.filter(c => c.id !== id)
  }

  countSumm(){
    this.summ = +this._controls.map((c) => c.count)
      .reduce((a,b)=> Number(a) + Number(b))
  }


}
