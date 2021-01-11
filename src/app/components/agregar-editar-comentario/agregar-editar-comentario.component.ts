import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
  comentariosForms: FormGroup;
   
  constructor(private fb:FormBuilder) {
    this.comentariosForms = fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  guardarComentario() {
    console.log(this.comentariosForms);
  }
}
