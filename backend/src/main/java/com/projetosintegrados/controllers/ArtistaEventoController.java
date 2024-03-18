package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.ArtistaEvento;
import com.projetosintegrados.services.ArtistaEventoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/artista-evento")
public class ArtistaEventoController {

    @Autowired
    private ArtistaEventoService service;


    @GetMapping("/{id}")
    public ArtistaEvento getById(@PathVariable Integer id) {
        return service.findById(id);
    }

    @GetMapping
    public Iterable<ArtistaEvento> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name = "sort") String sortStr
    ) {
        return service.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public ArtistaEvento create(@RequestBody ArtistaEvento artistaEvento) {
        return service.save(artistaEvento);
    }

    @PutMapping("/{id}")
    public ArtistaEvento update(@PathVariable Integer id, @RequestBody ArtistaEvento artistaEvento) {
        if (!artistaEvento.getId().equals(id)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id do artista não confere com o id da requisição");
        }
        return service.save(artistaEvento);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.deleteById(id);
    }
}
