import { RequisicoesService } from './../shared/requisicoes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  texto = new FormControl('');
  constructor(public service: RequisicoesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.texto.value)
    this.service.enviar(this.texto.value).subscribe(texto => {
      texto = this.texto.value;
    });
  }
}
