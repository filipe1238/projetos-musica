package com.projetosintegrados.services;

import com.projetosintegrados.entities.Contrato;
import com.projetosintegrados.repositories.ContratoRepository; //
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
public class ContratoService extends ParentService<Contrato> {

    @Autowired
    private ContratoRepository repository;
    @Autowired
    private FilterService<Contrato, Integer> filterService;

    @Override
    public BaseRepository<Contrato, Integer> getRepository() {
        return repository;
    }

    @Override
    public Iterable<Contrato> filterBy(String filterStr, String rangeStr, String sortStr) {
        QueryParamWrapper wrapper = QueryParamExtractor.extract(filterStr, rangeStr, sortStr);
        // este searchFields é uma lista de campos que serão usados para filtrar a busca
        List<String> searchFields = List.of("nome");
        return filterService.filterBy(wrapper, getRepository(), searchFields);
    }

}
