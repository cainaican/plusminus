import {BaseControl} from "../interfaces/BaseControl";

export abstract class AddRemoveController {


  protected abstract get length(): number

  protected abstract get controls(): BaseControl[]

  protected abstract addControl(control: BaseControl): void

  protected abstract removeControl(): void

  protected abstract removeExactControl(id: number): void

}
