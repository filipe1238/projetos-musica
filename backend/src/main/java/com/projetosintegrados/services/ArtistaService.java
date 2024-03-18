package com.projetosintegrados.services;

import com.projetosintegrados.entities.Artista;
import com.projetosintegrados.repositories.ArtistaRepository;
import com.projetosintegrados.utils.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Service
public class ArtistaService extends ParentService<Artista> {

    @Autowired
    private ArtistaRepository repository;
    @Autowired
    private FilterService<Artista, Integer> filterService;

    @Override
    public BaseRepository<Artista, Integer> getRepository() {
        return repository;
    }


    @Override
    public void beforeDelete(Artista entity) {
        if (!entity.getShowsList().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Artista ja está associado a um show");
        }
    }

    @Override
    public Iterable<Artista> filterBy(String filterStr, String rangeStr, String sortStr) {
        QueryParamWrapper wrapper = QueryParamExtractor.extract(filterStr, rangeStr, sortStr);
        // este searchFields é uma lista de campos que serão usados para filtrar a busca
        List<String> searchFields = List.of("nome");
        return filterService.filterBy(wrapper, getRepository(), searchFields);
    }

}
