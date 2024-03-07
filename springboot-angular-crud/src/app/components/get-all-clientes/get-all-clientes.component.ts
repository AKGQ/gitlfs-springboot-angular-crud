import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  selector: 'app-get-all-clientes',
  templateUrl: './get-all-clientes.component.html',
  styleUrls: ['./get-all-clientes.component.css']
})
export class GetAllClientesComponent {

  /*________VARIABLES________*/
  filter: any = []; //DELETE IF DOESNT WORK
  clientes: any = [];
  clientesCopia: any = [];
  buscarClienteForm!:FormGroup; //Get postCustomerForm form fields

  constructor( //Declare a variable of type CustomerService
    private service: ClienteService,
    private fb: FormBuilder) {
  } 

  /*________ON INIT________*/
  ngOnInit() { //UseEffect
    this.getAllClientes();
    this.buscarClienteForm = this.fb.group({ //Validate form fields and build form
      search: [null, Validators.required]
    })
  }

  /*________METODOS________*/
  getAllClientes() { //Get all
    this.service.getAllClientes().subscribe((res) => {
      this.clientes = res;
      this.clientesCopia = this.clientes;
    })
  }

  deleteCliente(id: number) {
    console.log(id);
    this.service.deleteCliente(id).subscribe((res) => {
      console.log(res);
      this.getAllClientes();
    })
  }

  buscarCliente() {
    if (this.buscarClienteForm.value.search == "")
    {
      this.clientes = [...this.clientesCopia];
    }
    else
    {
        this.filter = this.clientesCopia.filter (
        (obj: any)=>{
          return obj.nombre.indexOf(this.buscarClienteForm.value.search) != -1;
        }
      )
      this.clientes = this.filter;
    }  
  }
}
