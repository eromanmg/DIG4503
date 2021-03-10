import Express from 'express';
const App = Express();
const port = 3010;





App.get('/people/:id', (req, res) => {
    res.json({userid: req.params.id});

});

App.get('/people/location/:city', (req, res) => {
    res.json({usercity: req.params.city });

});

App.listen(port, () => {

});

