const express = require('express');
const ronC = require('./controllers/swason-quotes');

const app = express();
const PORT = 6000;

app.use(express.json());

app.get('/api/swansonQuotes', ronC.getAllQuotes);
app.post('/api/swansonQuotes', ronC.addQuote);
app.delete('/api/swansonQuotes/:id', ronC.deleteQuote);
app.put('/api/swansonQuote/:id', ronC.editQuote);


app.listen(PORT, () => console.log(`we are live at port ${PORT}`));