import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `<app-layout></app-layout>`,
})
export class AppComponent {
  title = 'mapa-cultural';


  constructor() {
    console.log('AppComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    if (!localStorage.getItem('nao_mostrar_novamente')) {
      this.showAlert()
    }
  }

  showAlert() {
    Swal.fire({
      title: 'Atenção!',
      html: `
      <p>O site está passando por manutenção e validação de dados e acessibilidade. <strong>As funcionalidades de inscrição e cadastro continuam disponíveis!</strong></p>
      
      <p><strong>🥰🏝️ Em breve teremos novidades! 🏝️🥰</strong></p>

      <p><input type="checkbox" id="nao_mostrar_novamente" class="mt-2 me-2">Não mostrar novamente</p>
      
      `,
      icon: 'warning',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        const checkbox = document.getElementById('nao_mostrar_novamente') as HTMLInputElement | null;
        if (checkbox?.checked) {
          localStorage.setItem('nao_mostrar_novamente', 'true');
        }
      }
    })
  }
}
