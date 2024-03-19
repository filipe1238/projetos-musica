package com.projetosmusicas.services;
import com.projetosmusicas.entities.Music;
import com.projetosmusicas.repositories.MusicRepository;
import com.projetosmusicas.utils.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@AllArgsConstructor
@Service
public class MusicService extends ParentService<Music> {

    @Autowired
    private MusicRepository repository;

    @Override
    public BaseRepository<Music, Integer> getRepository() {
        return repository;
    }
}
