import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  sendedEmails: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  async sendForm() {
    console.log(this.form.value);


    if(this.sendedEmails.includes(this.form.value.email)){
      alert('Um email já foi encaminhado para esse endereço, por favor aguarde ou verifique na caixa de spam. Obrigado!');
      return;
    }

    const response: EmailJSResponseStatus = await emailjs.send(
      environment.emailjsId,
      environment.emailjsTemplateId,
      {
        title: 'Bem vindo ao Mapa Cultural de Itaparica',
        subject: 'Mapa Cultural de Itaparica',
        name: 'Olá, '+ this.form.value.name,
        email: this.form.value.email,
        sender: 'mapaculturaldeitaparica@gmail.com',
        sender_name: 'Lua de Maré Produções',
        message: `
        Venha fazer parte do Mapa Cultural de Itaparica, o maior diretorio de eventos, instituições e agentes culturais de Itaparica!

        MCI | Instituições Culturais: https://forms.gle/7ztL1jPh8eGU3oXf7

        MCI | Agentes Culturais: https://forms.gle/ZvVSQ65tjjerqFDZ8

        👉 O que é agente cultural?
        Consideramos agentes culturais todas as pessoas que atuam na produção, preservação, transmissão ou difusão de saberes e práticas culturais: mestres e mestras de tradições, artistas, produtores, gestores, coletivos, pesquisadores e demais trabalhadores da cultura.


        🏛️ O que é instituição cultural?
        Instituições culturais são espaços ou organizações que promovem, preservam ou disseminam a cultura local, como escolas de música, bibliotecas, centros culturais, grupos de dança, associações comunitárias e outras iniciativas que fortalecem a vida cultural da ilha.


        🗺️ O Mapa Cultural de Itaparica é uma iniciativa que visa identificar, valorizar e dar visibilidade à diversidade de agentes e instituições que fortalecem a cultura local. Sua participação na pesquisa é essencial para que possamos divulgar, preservar e conectar os diferentes territórios culturais da ilha, ampliando a circulação de informações e fortalecendo as redes de colaboração.
        É fácil e rápido! Preencha o formulário adequado a você através dos links abaixo:

        MCI | Instituições Culturais: https://forms.gle/7ztL1jPh8eGU3oXf7

        MCI | Agentes Culturais: https://forms.gle/ZvVSQ65tjjerqFDZ8
      `,
      },
      {publicKey: environment.emailjs_pk}
    );

    console.log(response);
    if (response.status === 200) {
      this.sendedEmails.push(this.form.value.email);
      alert(
        'Mensagem enviada com sucesso! Obrigado por participar do Mapa Cultural de Itaparica! 😊.'
      );
    } else {
      alert(
        'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
      );
    }
  }
}
