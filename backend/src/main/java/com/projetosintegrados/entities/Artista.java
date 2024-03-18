package com.projetosintegrados.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetosintegrados.utils.ParentEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Artista extends ParentEntity {
    private String nome;
    private String nacionalidade;
    private Date dataNascimento;
    @Column(length = 2000)
    private String biografia;
    private String fotoUrl;
    private String instagramUrl;
    private String facebookUrl;
    private String twitterUrl;


    /**
     * JsonIgnore: ignora a propriedade artistasList na serialização do objeto, evitando
     * que o objeto seja serializado em loop infinito.
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "artista", orphanRemoval = false, cascade = CascadeType.REFRESH)
    @JsonIgnore
    private List<ArtistaEvento> showsList;

    public Artista(int id) {
        super(id);
    }
}