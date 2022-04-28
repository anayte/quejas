const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");


router.post('/quejar', async (req, res) => 
{
     // variables 
     const { tipo, queja, comercio, sugerencia, fecha } = req.body;
     const tipoq = tipo;
     const com = comercio;
     const quejaq = queja;
     const sugq = sugerencia;
     const hoy = new Date();
     const errors = [];
 
     const uri ="mongodb+srv://anayte:12345@bdcli.dkohx.mongodb.net/bdcli?retryWrites=true&w=majority";
     const client = new MongoClient(uri);
     
         try
         {
             // conectar al cliente 
             await client.connect();
 
             // acceder a la base
             const database = client.db('bdcli');
             const collection = database.collection('quejas');
 
             // Query para encontrar al usuario
             const query= {
                 tipo: tipoq,
                 Comercio: com,
                 queja: queja,
                 sug: sugerencia,
                 date: hoy };
         
             const validar = await collection.insertOne(query);
             
         
             // imprime lo encontrado 
             if(validar != null){
                 console.log('Queja agregada');
                 console.log(validar);
                 res.redirect('/diaco');
             }
             else
             {
                 console.log('Error al guardar');
                 res.redirect('/menu')
             }
         }
         catch (err)
         {
             console.log('err');
             res.redirect('/login')
         }
         finally
         {
             // cierra la coneccion 
             await client.close();
         }
 
});

module.exports = router;