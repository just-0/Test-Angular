import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formularioContacto: FormGroup;
	constructor(private form: FormBuilder){
		this.formularioContacto = this.form.group({
			nombre: ["", Validators.required],
			email: ["",[Validators.email, Validators.required]],
		}) 
	}
	enviar()
	{
		console.log(this.formularioContacto);
	}
}
