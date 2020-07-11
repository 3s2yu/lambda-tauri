import PouchDB from 'pouchdb-core';
import HttpPouch from 'pouchdb-adapter-http';
import AsyncStoragePouch from 'pouchdb-adapter-asyncstorage';
import mapreduce from 'pouchdb-mapreduce';
import replication from 'pouchdb-replication';
import FindPouch from 'pouchdb-find';

export const DB_NAME = 'dobdoddatabase1';
export const SYNC_URL = 'http://localhost:5984/';

PouchDB.plugin(HttpPouch)
  .plugin(mapreduce)
  .plugin(replication)
  .plugin(FindPouch)
  .plugin(AsyncStoragePouch);

export default PouchDB;
