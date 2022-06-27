export interface BaseControl {
  id: number,
  type: string,
  name: string,
  count: number
}
export interface DebtControl extends BaseControl{
  commonDebtCount: number
}
