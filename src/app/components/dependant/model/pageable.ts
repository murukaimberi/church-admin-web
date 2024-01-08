import {ISort} from "./sort";

export interface IPageable {
  pageNumber:number;
  pageSize:number;
  sort:ISort;
  offset:number;
  paged:boolean;
  unpaged:boolean;
}

export class Pageable implements IPageable{
    constructor(public pageNumber: number,
  public pageSize: number,
  public sort: ISort,
  public offset: number,
  public paged: boolean,
  public unpaged: boolean) {
    }

}
