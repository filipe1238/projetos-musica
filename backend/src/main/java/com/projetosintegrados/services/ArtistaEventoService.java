package com.projetosintegrados.services;

import com.projetosintegrados.entities.ArtistaEvento;
import com.projetosintegrados.repositories.ArtistaEventoRepository;
import com.projetosintegrados.utils.BaseRepository;
import com.projetosintegrados.utils.ParentService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ArtistaEventoService extends ParentService<ArtistaEvento> {

    @Autowired
    private ArtistaEventoRepository repository;
    @Autowired
    private ArtistaService artistaService;
    @Autowired
    private EventoService showService;
    private final ModelMapper mapper;

    @Override
    public BaseRepository<ArtistaEvento, Integer> getRepository() {
        return repository;
    }
}
