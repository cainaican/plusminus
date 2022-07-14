import { Injectable} from '@angular/core';
import {PlusModel} from "../models/plus.model";
import {MinusModel} from "../models/minus.model";
import {DebtsModel} from "../models/debts.model";

export interface IMonth {
  id: Date
  month: number
  monthName: string
  plusModel: PlusModel
  minusModel: MinusModel
  pillow: number
  touchLeft: number
  result: number
  debtsModel: DebtsModel
  totalResult: number
  totalDebt:  number
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public months: IMonth[] = []
  public currentMonth: IMonth = {
    id: new Date(),
    month: new Date().getMonth(),
    monthName: "Июнь",
    plusModel: new PlusModel(),
    minusModel: new MinusModel(),
    pillow: 0,
    touchLeft: 0,
    result: 0,
    debtsModel: new DebtsModel(),
    totalResult: 0,  //todo
    totalDebt:  0    //todo
  }

  constructor() {
    this.months.push(this.currentMonth)
  }

  countResult(){
    this.currentMonth.result = this.currentMonth.plusModel.summ - this.currentMonth.minusModel.summ
    this.currentMonth.pillow = this.currentMonth.plusModel.save //todo добавить пересчет с прошлого месяца
  }

  addMonth(){
    const monthName = prompt('Название месяца');
    if(monthName){
      const month: IMonth = {
        id: new Date(),
        month: new Date().getMonth(),
        plusModel: new PlusModel(),
        minusModel: new MinusModel(),
        monthName: monthName,
        pillow: 0,
        touchLeft: 0,
        result: 0,
        debtsModel: new DebtsModel(),
        totalResult: 0,
        totalDebt:  0
      }
      this.months.push(month)
      this.currentMonth = this.months[this.months.length - 1]
    } else {
      this.addMonth()
    }
  }

  nextMonth(){
    if (this.months.length === 1) {
      alert('У вас пока только один месяц')
      return;
    }
    const indexCurrent: number = this.months.findIndex(month => month.id === this.currentMonth.id)
    if(indexCurrent === this.months.length - 1){
      alert('Это последний месяц в истории')
      return;
    }
    this.currentMonth = this.months[indexCurrent + 1]
  }

  previosMonth(){
    if (this.months.length === 1) {
      alert('У вас пока только один месяц')
      return;
    }
    const indexCurrent: number = this.months.findIndex(month => month.id === this.currentMonth.id)
    if(indexCurrent === 0){
      alert('Это первый месяц в истории')
      return;
    }
    this.currentMonth = this.months[indexCurrent - 1]
  }

  countTotalResult(){
    const indexCurrent: number = this.months.findIndex(month => month.id === this.currentMonth.id)

    if (this.months.length === 1 || indexCurrent === 0){
      this.currentMonth.totalResult = Number(this.currentMonth.pillow) + Number(this.currentMonth.touchLeft)
      this.currentMonth.totalDebt = this.currentMonth.totalDebt
      return
    }
    this.months[indexCurrent].totalResult = Number(this.months[indexCurrent - 1].totalResult) +
                                    Number(this.currentMonth.pillow) +
                                    Number(this.currentMonth.touchLeft);
    this.currentMonth.totalResult = this.months[indexCurrent].totalResult

  }

  countTotalDebt(){

  }

}
