import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-cliente',
  templateUrl: './post-cliente.component.html',
  styleUrls: ['./post-cliente.component.css']
})
export class PostClienteComponent {

  postCustomerForm!:FormGroup;

  constructor(private clienteService: ClienteService,
    private fb: FormBuilder,
    private router: Router) { 
  }

  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      nombre: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, Validators.required],
    })
  }

  postCliente() {
    this.clienteService.postCliente(this.postCustomerForm.value).subscribe((res)=> {
      console.log(res);
      this.router.navigateByUrl('')
    })
  }
}
