package com.projetosintegrados.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class ArtistaContrato extends ParentEntity {
    @ManyToOne
    @JoinColumn(name = "contrato")
    @JsonBackReference
    private Contrato contrato;

    @ManyToOne
    @JoinColumn(name = "artista")
    private Artista artista;

}
