import {IPageable} from "./pageable";
import {ISort} from "./sort";

export interface IApiResponse<T> {
  content: T[];
  pageable: IPageable;
  last:boolean;
  totalPages:number;
  totalElements:number;
  first:boolean;
  size:number;
  number:number;
  sort:ISort;
  numberOfElements:number;
  empty:number
}
