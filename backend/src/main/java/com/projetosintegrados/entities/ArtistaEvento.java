package com.projetosintegrados.entities;

import com.projetosintegrados.utils.ParentEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ArtistaEvento extends ParentEntity {
    @ManyToOne
    @JoinColumn(name = "evento")
    private Evento evento;

    @ManyToOne
    @JoinColumn(name = "artista")
    private Artista artista;
}
