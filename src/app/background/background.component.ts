import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { GithubService } from '../services/github.service';
import { UsersComponent } from '../components/users/users.component';

@Component({
  selector: 'spa-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  router: Router;
  users: String[];

  constructor(
    private _snackBar: MatSnackBar,
    router: Router,
    private githubService: GithubService) {
    this.router = router;
  }

  ngOnInit(): void {
  }

    showMessageFavoritar() {
    this._snackBar.open("Agradecemos por favoritar o nosso App", "x", {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

  showMessageCompartilhar() {
    this._snackBar.open("Obrigado! Você compartilhou este App em suas redes sociais", "x", {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

  gotoLogin() {
      this.router.navigate(['/']);
  }

  getTop10() {
    this.githubService.getGithubData().subscribe((data) => {
//      console.log(data);
      this.users = data;
    })
  }
}
