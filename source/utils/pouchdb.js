import PouchDB from 'pouchdb-core';
import HttpPouch from 'pouchdb-adapter-http';
//import AsyncPouch from 'pouchdb-adapter-asyncstorage';
import FindPouch from 'pouchdb-find';

export const DB_NAME = 'dobdoddatabase1';
export const SYNC_URL = 'http://localhost:5984/';

export default PouchDB
  .plugin(HttpPouch)
  //.plugin(AsyncPouch)
  .plugin(FindPouch);
