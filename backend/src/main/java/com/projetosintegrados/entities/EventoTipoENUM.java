package com.projetosintegrados.entities;


public enum EventoTipoENUM {
    SHOW("Show"),
    FESTA("Festa"),
    TEATRO("Teatro"),
    CINEMA("Cinema"),
    PALESTRA("Palestra"),
    CURSO("Curso"),
    WORKSHOP("Workshop"),
    OUTRO("Outro")
    ;

    private String nome;

    EventoTipoENUM(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
