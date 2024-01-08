export interface ISort {
  empty:boolean;
  sorted:boolean;
  unsorted:boolean;
}

export class Sort implements ISort{
  constructor(
    public empty: boolean,
    public sorted: boolean,
    public unsorted: boolean
  ) {
  }
}
