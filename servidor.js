const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

// El siguiente es el enlace, la comunicación hacia el servidor.
app.get('/api/greet', (req,res)=>{
	res.json({message: 'Esta es la primer API!'});
})

// Inicia el servidor
app.listen(PORT,() =>{
    console.log('Servidor corriendo en http://localhost:$PORT');
})

app.use(express.json()); // Solicitudes que vengan en formato json.
let estudiantes=[ // Estamos creando listas en formato de arreglo. Estamos declarando una base de datos temporal (llamada estudiantes)
    { id:1,nombre:'José Esparza' }, // Son arreglos.
    { id:2,nombre:'Mónica Gómez' },
    { id:3,nombre:'Juan Ruiz' },
];

// GET: Obtener todos los estudiantes
// Con el res estamos creando una respuesta a la petición de estudiantes.
// Estamos haciendo un llamado a todos nuestros estudiantes.
app.get('/estudiantes', (req,res)=>{ // Estamos definiendo una ruta a estudiantes. Cuando haga una solicitud get a esta ruta el servidor regresara todos los estudiantes.
    res.json(estudiantes); // La respuesta.
});

// Get: Obtener un estudiante por ID.
// parseInt (Palabra reservada) sirve para convertir un dato de texto en númerico.
app.get('/estudiantes/:id', (req,res)=>{ // Estamos definiendo una ruta con el id.
    const id=parseInt(req.params.id) // Convertimos el parametro id a un número entero.
    const estudiante = estudiantes.find(e=> e.id===id); // Estamos haciendo una busqueda al id del estudiante por el arreglo. 
    if (estudiante) {
        res.json(estudiante);
    } else {
        res.status(404).send ('Estudiante no encontrado');
    }
});