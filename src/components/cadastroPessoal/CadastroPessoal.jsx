import React, { useState } from 'react';
import { DinamicInput, DinamicCalendar } from '../input/Input.jsx';

export function CadastroPessoal() {
  return (
    <>
      <div>
        <h1>Dados Pessoais</h1>
        <DinamicInput labelfor="Nome" nameinput="Nome" labeltext="Nome" />

        <DinamicInput labelfor="Email" nameinput="Email" labeltext="E-mail" />

        <DinamicInput
          labelfor="cpf"
          nameinput="cpf"
          labeltext="CPF"
          className="mascaracpf"
        />

        <DinamicCalendar
          labelfor="dataNascimento"
          nameinput="dataNascimento"
          labeltext="Data de Nascimento"
        />

        <DinamicInput
          labelfor="telefone"
          nameinput="telefone"
          labeltext="Telefone"
          className="mascaratel"
        />
      </div>
    </>
  );
}
