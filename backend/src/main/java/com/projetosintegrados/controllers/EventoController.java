package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.Evento;
import com.projetosintegrados.services.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/eventos")
public class EventoController {
    @Autowired
    private EventoService service;


    @GetMapping("/{id}")
    public Evento get(@PathVariable Integer id) {
        return service.findById(id);
    }

    @GetMapping
    public Iterable<Evento> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name="sort") String sortStr
            ) {
        return service.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public Evento create(@RequestBody Evento evento) {
        return service.save(evento);
    }

    @PutMapping("/{id}")
    public Evento update(@PathVariable Integer id, @RequestBody Evento evento) {
        return service.save(evento);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.deleteById(id);
    }
}
