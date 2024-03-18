package com.projetosintegrados.services;

import com.projetosintegrados.entities.ArtistaContrato;
import com.projetosintegrados.entities.Contrato;
import com.projetosintegrados.repositories.ArtistaContratoRepository;
import com.projetosintegrados.repositories.ContratoRepository;
import com.projetosintegrados.utils.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Service
public class ArtistaContratoService extends ParentService<ArtistaContrato> {

    @Autowired
    private ArtistaContratoRepository repository;
    @Autowired
    private FilterService<ArtistaContrato, Integer> filterService;

    @Override
    public BaseRepository<ArtistaContrato, Integer> getRepository() {
        return repository;
    }

}
