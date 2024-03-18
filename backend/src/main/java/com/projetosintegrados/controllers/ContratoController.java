package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.Contrato;
import com.projetosintegrados.services.ContratoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/contratos")
public class ContratoController {
    @Autowired
    private ContratoService contratoService;

    @GetMapping("/{id}")
    public Contrato getById(@PathVariable Integer id) {
        return contratoService.findById(id);
    }

    @GetMapping
    public Iterable<Contrato> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name = "sort") String sortStr
    ) {
        return contratoService.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public Contrato create(@RequestBody Contrato contrato) {
        return contratoService.save(contrato);
    }

    @PutMapping("/{id}")
    public Contrato update(@PathVariable Integer id, @RequestBody Contrato contrato) {
        if (!contrato.getId().equals(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id do artista não confere com o id da requisição");
        }
        return contratoService.save(contrato);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        contratoService.deleteById(id);
    }
}
