export const changeLanguage = language => ({
  type: 'LANGUAGE_CHANGE',
  payload: { language },
});

export const loadData = data => ({
  type: 'DATA_LOAD',
  payload: { data },
});
