package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.ArtistaContrato;
import com.projetosintegrados.services.ArtistaContratoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/artista-contrato")
public class ArtistaContratoController {
    @Autowired
    private ArtistaContratoService service;


    @GetMapping("/{id}")
    public ArtistaContrato getById(@PathVariable Integer id) {
        return service.findById(id);
    }

    @GetMapping
    public Iterable<ArtistaContrato> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name = "sort") String sortStr
    ) {
        return service.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public ArtistaContrato create(@RequestBody ArtistaContrato artistaContrato) {
        return service.save(artistaContrato);
    }

    @PutMapping("/{id}")
    public ArtistaContrato update(@PathVariable Integer id, @RequestBody ArtistaContrato artistaContrato) {
        if (!artistaContrato.getId().equals(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id do artista não confere com o id da requisição");
        }
        return service.save(artistaContrato);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.deleteById(id);
    }
}
