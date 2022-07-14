import {BaseControl} from "../interfaces/BaseControl";
import {AddRemoveController} from "../services/addRemoveController";

export class MinusModel extends AddRemoveController {

  private _controls: BaseControl[] = [];
  summ: number = 0

  constructor(savedData?: MinusModel) {
    super()
    if(savedData){
      this._controls = savedData._controls
      this.summ = savedData.summ
      return
    }
    this._controls.push({id: 1, type: 'base', name: 'name', count: 0})
  }

  get length(): number {
    return this._controls.length
  }

  get controls(): BaseControl[] {
    return this._controls;
  }

  addControl(control: BaseControl): void {
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
