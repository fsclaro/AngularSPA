//import { BackgroundComponent } from './../background/background.component';
import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Output() username: string = "pedrão";
  @Output() password: string = "654321";

  usernameAtual: string = this.username;
  passwordAtual: string = this.password;
  hide = true;

  router: Router;

  constructor(private _snackBar: MatSnackBar, router: Router) {
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

  validarCredenciais() {
    if (this.usernameAtual == "nandosalles" && this.passwordAtual == "123456") {
      this._snackBar.open("Seja bem vindo(a) ao Challenge", "x", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top"
      });
      this.router.navigate(['/background']);
    } else {
      this._snackBar.open("As credenciais fornecidas não estão corretas. " +
        "DICA: Olhar o método validarCredenciais no componente home :P", "x", {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "top"
      });
    }
  }

  limparCampos() {
    this.username = "";
    this.password = "";
    this.usernameAtual = "";
    this.passwordAtual = "";
  }

  salvarUsername(username) {
    this.usernameAtual = username;
  }

  salvarPassword(password) {
    this.passwordAtual = password;
  }
}
