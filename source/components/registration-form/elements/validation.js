import t from "tcomb-form-native";

const formValidation = {
  name: t.refinement(t.String, value => value.length >= 4)
};

export default formValidation;
