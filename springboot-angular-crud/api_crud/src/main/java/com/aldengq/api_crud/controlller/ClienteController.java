package com.aldengq.api_crud.controlller;

import com.aldengq.api_crud.entity.Cliente;
import com.aldengq.api_crud.service.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ClienteController {

    private final ClienteService clienteService;

    @PostMapping("/cliente")
    public Cliente postCliente(@RequestBody Cliente cliente) {
        return clienteService.postCliente(cliente);
    }

    @GetMapping("/clientes")
    public List<Cliente> getAllClientes() {
        return clienteService.getAllClientes();
    }

    @DeleteMapping("/cliente/{id}")
    public void deleteCliente(@PathVariable Long id) {
        clienteService.deleteCliente(id);
    }

    @GetMapping("/cliente/{id}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable Long id) {
        Cliente cliente = clienteService.getClienteById(id);
        if (cliente == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(cliente);
    }

    @PutMapping("/cliente/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        Cliente updateCliente = clienteService.updateCliente(id, cliente);

        if(updateCliente == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updateCliente);
    }
}
