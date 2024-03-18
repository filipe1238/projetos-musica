package com.projetosintegrados.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Evento extends ParentEntity {
    private String nome;
    @Column(length = 1000)
    private String descricao;
    private Date dataHora;
    private String local;
    @Enumerated(EnumType.STRING)
    private EventoTipoENUM eventoTipoENUM;

    /**
     * JsonIgnore: ignora a propriedade artistasList na serialização do objeto, evitando
     * que o objeto seja serializado em loop infinito.
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "evento", orphanRemoval = true)
    @JsonManagedReference
    @JsonIgnore
    private List<ArtistaEvento> artistasList;

    public Evento(int id) {
        super(id);
    }
}