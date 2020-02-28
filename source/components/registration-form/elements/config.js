import React from "react";
import t from "tcomb-form-native";
import moment from 'moment';

import formValidation from "./validation";
import { Input } from "../../index";

const Struct = t.struct({
  name: formValidation.name,
  birthDate: t.Date,
  deathDate: t.Date
});

const options = {
  fields: {
    name: {
      template: Input,
      config: {
        label: 'Nome',
        placeholder: "Digite um nome"
      }
    },
    birthDate: {
      label: 'Data de nascimento',
      mode: 'date',
      config: {
        format: date => moment(date).format('DD.MM.YYYY'),
        defaultValueText: "Clique e escolha uma data"
      },
    },
    deathDate: {
      label: 'Data do falecimento',
      mode: 'date',
      config: {
        format: date => moment(date).format('DD.MM.YYYY'),
        defaultValueText: "Clique e escolha uma data"
      },
    },
  }
};

export default {
  Struct,
  options
}
