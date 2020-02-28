import React from "react";
import t from "tcomb-form-native";

import formValidation from "./validation";
import { Input } from "../../index";

const Struct = t.struct({
  name: formValidation.name,
});

const options = {
  fields: {
    name: {
      template: Input,
      config: {
        label: 'Nome',
        placeholder: "Digite um nome"
      }
    }
  }
};

export default {
  Struct,
  options
}
