import express from 'express';
import path from 'path';
import swig from 'swig';

// ==========
// web server
// ==========

const app = express();

// set views and assets
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public'));

app.set('view cache', false);
swig.setDefaults({cache: false});

// show the landing page
app.get('/', (req, res) => {

  const testTemplate = 'Templating works!';
  // send html landing page
  res.render('index', {
    testTemplate,
  });
});

// start the web server.
app.listen('8000', 'localhost');
console.log(`Server running on localhost:8000.`);
