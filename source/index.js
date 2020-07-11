import React, {Component, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import {Provider, connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {GlobalizeProvider, loadMessages} from 'react-native-globalize';
import SplashScreen from 'react-native-splash-screen';
import {bindActionCreators} from 'redux';
import * as Actions from './store/actions';

import store from './store';
import messages from './messages';
import {colors} from './constants';

import Navigator from './navigator';

import PouchDB, {DB_NAME, SYNC_URL} from './services/pouchdb';
import services from './services';

const db = new PouchDB(`${DB_NAME}`);

const updateDocs = () => ({
  dataSource: null,
  syncUrl: `${SYNC_URL}${DB_NAME}`,
});

db.changes({since: 'now', live: true}).on('change', () => updateDocs());

loadMessages(messages);

const read = async STORAGE_KEY => {
  const data = await services.storage.getItem(STORAGE_KEY);
  console.log(data, ' <<<<<< GETITEM');
};

const importData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    result.map(req => console.log(req));
  } catch (error) {
    console.error(error);
  }
};

class RootContainer extends Component {
  constructor(props) {
    super(props);

    read('http://localhost:5984/dobdoddatabase1!ÿmeta-storeÿ_local_uuid');
    importData();

    db.find({
      selector: {
        name: {$exists: true},
      },
      fields: ['name', 'birthDate', 'deathDate', 'image', 'notify'],
    })
      .then(result => {
        props.loadData(result.docs);
      })
      .catch(() => {});
  }

  render() {
    return (
      <ThemeProvider theme={colors}>
        <GlobalizeProvider locale={this.props.lang.lang}>
          <Navigator />
        </GlobalizeProvider>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const ConnectedRootContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRootContainer />
    </Provider>
  );
};

export default App;
