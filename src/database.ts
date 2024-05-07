import mongoose from "mongoose";

async function connect(){

    try{
        await mongoose.connect('mongodb://localhost/CRUD-Tarea', {

        });
        console.log('>>> Server Conectado')
    }
    catch{
        console.log('Error')

    }

}

export default connect;