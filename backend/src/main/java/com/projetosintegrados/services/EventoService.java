package com.projetosintegrados.services;

import com.projetosintegrados.entities.Evento;
import com.projetosintegrados.repositories.Eventoepository;
import com.projetosintegrados.utils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class EventoService extends ParentService<Evento> {

    @Autowired
    private Eventoepository repository;
    @Autowired
    private FilterService<Evento, Integer> filterService;

    @Override
    public BaseRepository<Evento, Integer> getRepository() {
        return repository;
    }

    public Page<Evento> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Iterable<Evento> filterBy(String filterStr, String rangeStr, String sortStr) {
        QueryParamWrapper wrapper = QueryParamExtractor.extract(filterStr, rangeStr, sortStr);
        // este searchFields é uma lista de campos que serão usados para filtrar a busca
        List<String> searchFields = List.of("nome");
        return filterService.filterBy(wrapper, getRepository(), searchFields);
    }
}
