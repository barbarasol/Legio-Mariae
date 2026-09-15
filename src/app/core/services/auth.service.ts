import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEY = 'legio-user';

  login(email: string, senha: string): boolean {

    if (
      email === 'admin@legio.com.br' &&
      senha === '123456'
    ) {

      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify({
          nome: 'Administrador',
          email
        })
      );

      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }

  getUser() {
    const user = localStorage.getItem(this.STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  }
}