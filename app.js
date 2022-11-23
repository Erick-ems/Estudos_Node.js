var app = require('./config/server');


var rotaHome = require('./app/routes/home')(app);


var rotaNoticia = require('./app/routes/noticia')(app);


var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);



app.listen(3000);
