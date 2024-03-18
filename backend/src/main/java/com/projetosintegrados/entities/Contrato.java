package com.projetosintegrados.entities;

import com.projetosintegrados.utils.ParentEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contrato extends ParentEntity {
    private String descricao;
    private Date dataInicio;
    private Date dataFim;
    private BigDecimal valor;
    private Boolean ativo;
    @Lob
    private String contratoTermo;
}
