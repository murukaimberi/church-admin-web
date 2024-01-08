import {Component, OnInit} from '@angular/core';
import {DependantListComponent} from "../../dependant/dependant-list/dependant-list.component";
import {UserService} from "../services/user.service";
import {IUser} from "../model/user";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    DependantListComponent,
    NgIf
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{
  user: IUser | undefined | null;
  constructor(protected userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getCongregant(1)
      .subscribe(res => {
        console.log(`${JSON.stringify(res)}`);
        this.user = res;
        console.log(`${this.user}`);
      });
  }

}
