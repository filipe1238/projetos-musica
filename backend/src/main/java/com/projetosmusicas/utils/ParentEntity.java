package com.projetosmusicas.utils;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@MappedSuperclass
@AllArgsConstructor
@NoArgsConstructor
public abstract class ParentEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Date dataCriacao;

    /**
     * Versão do objeto para controle de concorrência
     * @Version
     */
//    @Version
//    private Integer version;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    @JsonCreator
    public ParentEntity(int id) {
        this.id = id;
    }
}