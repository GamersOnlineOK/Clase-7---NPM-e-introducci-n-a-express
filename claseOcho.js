import express from "express";

let app=express();


// CONFIGURO SERVIDOR
app.listen(5006,()=>{
    console.log("Servidor creado");
})
const frase="hola como estan?"

app.get('/hello',(req,res)=>{
res.send("Hello !!!!")
})

app.get('/',(req,res)=>{
    res.send('Api de ejemplo')
})
app.get('/api/getFrase',(req,res)=>{
    res.send(frase)
})
app.get('/api/getLetra/:num',(req,res)=>{
    if(!isNaN(req.params.num)){
        res.send(frase[req.params.num-1]);
        if (num>0 && num<frase.length) {
            res.send(frase[req.params.num-1])
            
        } else {
            
        }
    }else{
        res.send('No ingresaste un numero valido')
    }
        
    
    
    res.send(frase[req.params.num-1]);

})
app.get('api/getPalabra/:nuum',(req,res)=>{
    res.send(frase.split(' ')[req.params.num-1])
})
