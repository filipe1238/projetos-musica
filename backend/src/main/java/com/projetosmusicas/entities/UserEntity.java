package com.projetosmusicas.entities;

import com.projetosmusicas.utils.ParentEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity extends ParentEntity {
    @Column(unique = true)
    private String username;
    private String password;
    private String email;
    private String mobileNumber;
    private byte[] storedHash;
    private byte[] storedSalt;
}