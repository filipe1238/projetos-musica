package com.projetosintegrados.repositories;

import com.projetosintegrados.entities.UserEntity;
import com.projetosintegrados.utils.BaseRepository;

public interface UserRepository extends BaseRepository<UserEntity, Integer> {

    UserEntity findByEmail(String email);
    UserEntity findByUsername(String username);
}
