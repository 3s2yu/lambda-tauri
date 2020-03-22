export const changeLanguage = language => ({
  type: 'LANGUAGE_CHANGE',
  payload: { language },
});

export const loadData = data => {
  console.log(data, '+++++ action');

  return {
  type: 'DATA_LOAD',
  payload: { data },
}};
