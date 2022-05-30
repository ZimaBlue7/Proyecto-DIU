const app = require('./app');
const db = require('./db');

( async () => {
    try{
        await db.authenticate();
        await db.sync()
        console.log( "Base de datos conectada " )
        app.set('port', process.env.PORT || 3000);

        app.listen(app.get('port'), () => {
            console.log('Servidor en puerto', app.get('port'));
        });
    }
    catch(error){
        throw new Error(error);
    }
} )()

