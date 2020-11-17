import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spa-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  exibeTabela: boolean = false;
  @Input() users: String[];

  displayedColumns: string[] = ['Avatar', 'ID', 'Login', 'URL'];

  constructor() { }

  ngOnInit(): void {
  }

  exibirTabela() {
    if (this.users.length > 0) {
      this.exibeTabela = true;
    } else {
      this.exibeTabela = false;
    }
  }
}
