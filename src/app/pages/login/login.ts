import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [
    FormsModule
    
  ],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  entrar(): void {

    const sucesso = this.authService.login(
      this.email,
      this.senha
    );

    if (sucesso) {
      this.router.navigate(['/dashboard']);
      return;
    }

    this.erro = 'Usuário ou senha inválidos';
  }

  submit(){
    console.log('teste');
    this.router.navigate(['/home'])
  }
}
