const express= require ('express');
//la instalacion de mrogan es para poder visualizar las peticiones http al usuario
const morgan = require('morgan');
///CORS nos sirve para configurar el servidor y es para que puedan hacer peticiones de otros dominios
//, para que podemos hacer algunas cosillas intenresantes , a veces tiene bloqueado los cors
const cors = require('cors');
const path = require('path');
const app = express();
//ES EL PUERTO QUE ESTE CONFIGURADO EN MI PUERTO
//middleware - son funciones que se requieren antes de consumir nuestras rutas , 
//son lo que se requieren para solicitrar la peticiones de nuestro cliente
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//aplicattion1 /x-www-form-urlencode
//para trabajar con aplicaciones www form urlencode
app.use(express.urlencoded({extended:true}));

// ¿app.get('/',(req, res)=>{
//     res.send('Hola mundo desde Node js');
// });
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname ,'public')));

app.set('puerto', process.env.PORT || 3000 )

app.listen( app.get('puerto') ,()=> {
    console.log('listening port '+ app.get('puerto') )
});
