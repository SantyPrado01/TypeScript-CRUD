import App from './app'
import database from './database'

//Empezandoe el servidor 
database()

const app = new App()
app.start();