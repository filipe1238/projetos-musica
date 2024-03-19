package com.projetosmusicas.repositories;

import com.projetosmusicas.entities.UserEntity;
import com.projetosmusicas.utils.BaseRepository;

public interface UserRepository extends BaseRepository<UserEntity, Integer> {

    UserEntity findByEmail(String email);
    UserEntity findByUsername(String username);
}
