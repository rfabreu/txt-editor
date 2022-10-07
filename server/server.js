const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));



// Credits: Parts of this codebase may reference the lesson materials of the University of Toronto coding Bootcamp
// Tutor Sara Neves Pereira from the University of Toronto coding Bootcamp was an integral part in assisting during development.