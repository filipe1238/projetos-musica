package com.projetosintegrados.controllers;

import com.projetosintegrados.entities.Artista;
import com.projetosintegrados.services.ArtistaService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/artistas")
public class ArtistaController {
    @Autowired
    private ArtistaService artistaService;

    @GetMapping("/{id}")
    public Artista getById(@PathVariable Integer id) {
        return artistaService.findById(id);
    }

    @GetMapping
    public Iterable<Artista> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name = "sort") String sortStr
    ) {
        return artistaService.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public Artista create(@RequestBody Artista artista) {
        return artistaService.save(artista);
    }

    @PutMapping("/{id}")
    public Artista update(@PathVariable Integer id, @RequestBody Artista artista) {
        if (!artista.getId().equals(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id do artista não confere com o id da requisição");
        }
        return artistaService.save(artista);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        artistaService.deleteById(id);
    }
}
