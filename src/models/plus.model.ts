import {BaseControl} from "../interfaces/base-control";
import {AddRemoveController} from "../app/services/addRemoveController";

export class PlusModel extends AddRemoveController {

  private _controls: BaseControl[] = [];
  public summ: number = 0
  public save: number = 0
  public touch: number = 0

  constructor(savedData?: PlusModel) {
    super();
    if(savedData){
      this._controls = savedData._controls
      this.save = savedData.save
      this.touch = savedData.touch
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
    const summ = this._controls.map((c) => c.count)
      .reduce((a,b)=> Number(a) + Number(b));

    this.summ = summ - this.save - this.touch
  }
}
