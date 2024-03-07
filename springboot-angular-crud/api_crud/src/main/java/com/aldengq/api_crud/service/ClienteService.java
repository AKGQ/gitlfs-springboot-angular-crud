package com.aldengq.api_crud.service;

import com.aldengq.api_crud.entity.Cliente;
import com.aldengq.api_crud.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public Cliente postCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public void deleteCliente(Long id) {
        clienteRepository.deleteById(id);
    }

    public Cliente getClienteById(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente updateCliente(Long id, Cliente cliente) {
        Optional<Cliente> optionalCliente = clienteRepository.findById(id);

        if (optionalCliente.isPresent()) {
            Cliente existingCliente = optionalCliente.get();
            existingCliente.setEmail(cliente.getEmail());
            existingCliente.setNombre(cliente.getNombre());
            existingCliente.setTelefono(cliente.getTelefono());
            return clienteRepository.save(existingCliente);
        }
        return null;
    }
}
