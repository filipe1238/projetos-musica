package com.projetosmusicas.services;
import com.projetosmusicas.repositories.UserRepository;
import com.projetosmusicas.entities.UserEntity;
import com.projetosmusicas.utils.BaseRepository;
import com.projetosmusicas.utils.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
public class UserService extends ParentService<UserEntity> {

    @Autowired
    private UserRepository repository;

    @Override
    public BaseRepository<UserEntity, Integer> getRepository() {
        return repository;
    }

    public UserEntity login(UserEntity user) {
        UserEntity byUsername = repository.findByUsername(user.getUsername());
        if (byUsername != null ){
            if (byUsername.getPassword().equals(user.getPassword())){
                return byUsername;
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado");
    }
}
