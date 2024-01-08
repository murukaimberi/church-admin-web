import {Gender} from "../../../shared/gender";
import {User} from "../../user/model/user";

export interface IDependant {
  id: number;
  fullNames: string;
  dateOfBirth: string;
  gender: Gender;
  user: User;
}

export class Dependant implements IDependant{
  constructor(
    public id: number,
    public fullNames: string,
    public dateOfBirth: string,
    public gender: Gender,
    public user: User
  ) {
  }
}
