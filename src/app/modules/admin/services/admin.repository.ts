import {Injectable} from "@angular/core";
import { Admin } from "../models/admin";

@Injectable()
export class AdminRepository {
    private readonly admins: Admin[];

    constructor() {
      this.admins = [
        {
          id: 1,
          login: 'Dini',
          password: 'secret'
        }
      ]
    }

    async findByLogin(login: string): Promise<Admin | undefined>{
      return this.admins.find((a) =>a.login === login)
    }
}
