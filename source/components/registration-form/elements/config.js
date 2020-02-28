import React from "react";
import t from "tcomb-form-native";

import formValidation from "./validation";
import { Input, DatePicker } from "../../index";

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
      template: DatePicker,
      config: {
        placeholder: "Selecione a data do nascimento"
      },
    },
    deathDate: {
      template: DatePicker,
      config: {
        placeholder: "Selecione a data do falecimento"
      },
    },
  }
};

export default {
  Struct,
  options
}
