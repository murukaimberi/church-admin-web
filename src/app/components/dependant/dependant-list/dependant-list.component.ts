import {Component, OnInit} from '@angular/core';
import {DependantService} from "../services/dependant.service";
import {Dependant} from "../model/dependant";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-dependant-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DatePipe
  ],
  templateUrl: './dependant-list.component.html',
  styleUrl: './dependant-list.component.scss'
})
export class DependantListComponent implements OnInit {

  dependants: Dependant[] = [];
  constructor(protected dependantService: DependantService) {
  }

  ngOnInit(): void {
    this.dependantService.getAllDependants()
      .subscribe(res => {
        console.log(`${JSON.stringify(res)}`);
        this.dependants = res.content;
        console.log(`${JSON.stringify(this.dependants)}`);
      })
  }
}
