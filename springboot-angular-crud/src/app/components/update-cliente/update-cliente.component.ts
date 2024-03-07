import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent {

  updateCustomerForm!: FormGroup;

  id:number=this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute,
    private service: ClienteService,
    private fb: FormBuilder,
    private router: Router) {}

    ngOnInit() {
      this.updateCustomerForm = this.fb.group({
        nombre: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        telefono: [null, Validators.required],
      })
      this.getClienteById();
    }

    getClienteById() { 
      this.service.getClienteById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateCustomerForm.patchValue(res);
      })
    }

    updateCliente() {
      this.service.updateCliente(this.id, this.updateCustomerForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl("");
      })
    }
}
