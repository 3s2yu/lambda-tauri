import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {}
});


const setItem = (key, data) => {
  return storage.save({
    key,
    data,
    expires: null
  });
};

const getItem = key => {
  return storage
    .load({
      key,
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    }).catch(err => false);
}

const removeItem = key => {
  return storage.remove({
    key
  });
}

export default {
  setItem,
  getItem,
  removeItem
};
