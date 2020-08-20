/* eslint-disable no-undef */

const knex = require('knex');
const app = require('../src/app');

const { makeNoteArray} = require('./note.fixtures');
const { makeFolderArray} = require('./folder.fixtures');


/* ////////////////////////////////////////////////////////////////////////
describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, world!');
  });
});
/////////////////////////////////////////////////////////////////////// */


describe('App', () => {
  let db;

  db = knex({
    client: 'pg',
    connection: process.env.TEST_DB_URL,
  });
  app.set('db', db);

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('TRUNCATE noteful_folders, noteful_notes RESTART IDENTITY CASCADE'));

  afterEach('cleanup',() => db.raw('TRUNCATE noteful_folders, noteful_notes RESTART IDENTITY CASCADE'));

  it('GET / responds with 200 containing "Hello, boilerplate!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, boilerplate!');
  });

  describe('get  /api/folders',()=>{
    context('Given no folders', () => {
      it('responds with 200 and an empty list', () => {
        return supertest(app)
          .get('/api/folders')
          .expect(200, []);
      });
      context('Given there are folders in the database', () => {
        const testFolders = makeFolderArray();
  
        beforeEach('insert folders', () => {
          return db
            .into('noteful_folders')
            .insert(testFolders);
        });
    
        it('responds with 200 and all of the folders', () => {
          return supertest(app)
            .get('/api/folders')
            .expect(200, testFolders);
        });
      });
    });
  });

  describe('get  /api/notes',()=>{
    context('Given no notes', () => {
      it('responds with 200 and an empty list', () => {
        return supertest(app)
          .get('/api/notes')
          .expect(200, []);
      });
      context('Given there are notes in the database', () => {
        const testNotes = makeNoteArray();
  
        beforeEach('insert notes', () => {
          return db
            .into('noteful_notes')
            .insert(testNotes);
        });
    
        it('responds with 200 and all of the notes', () => {
          return supertest(app)
            .get('/api/notes')
            .expect(200, testNotes);
        });
      });
    });
  });
});