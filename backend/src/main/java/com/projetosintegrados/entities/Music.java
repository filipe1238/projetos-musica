package com.projetosintegrados.entities;

import com.projetosintegrados.utils.ParentEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Music extends ParentEntity {
    private String title;
    private String artist;
    private String album;
    private String fileUrl ;

    public Music(int id) {
        super(id);
    }
}
