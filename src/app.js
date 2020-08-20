/* eslint-disable no-unused-vars */

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const tokenValidation = require('./tokenValidation');
const error = require('./error');

const foldersRouter = require('./foldersRouter');
const notesRouter = require('./notesRouter');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(tokenValidation);

app.use(foldersRouter);
app.use(notesRouter);

app.use(error);

module.exports = app;