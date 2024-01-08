import {Gender} from "../../../shared/gender";

export interface IUser {
  id: number;
  title: string;
  firstNames: string;
  surname: string;
  gender: Gender;
  dateOfBirth: string;
  email: string;
  profession: string;
}

export class User implements IUser {
    constructor(
      public id: number,
      public title: string,
      public firstNames: string,
      public surname: string,
      public gender: Gender,
      public dateOfBirth: string,
      public email: string,
      public profession: string
    ) {
    }

}
