module.exports = function consultasHandler ({consultas, veterinarios, mascotas}) {
    return {
        get:  (data, callback) => {
            if(typeof data.indice !== "undefined") {
                if(consultas[data.indice]) {
                    return callback(200, consultas[data.indice]);
                }
                return callback(404, {mensaje: `consulta con indice ${indice} no encontrada`});
            }
            const consultasConRelaciones = consultas.map((consulta)=> ( 
                {...consulta, mascota: {...mascotas[consulta.mascota], id: consulta.mascota},
                    veterinario: {...veterinarios[consulta.veterinario], id: consulta.veterinario},
            }));
            callback(200, consultasConRelaciones);
        },
        post: (data, callback) => {
            let nuevaConsulta = data.payload;
            nuevaConsulta.fechaCreacion = new Date();
            nuevaConsulta.fechaModificacion = null;
            consultas = [...consultas, nuevaConsulta];
            callback(201, nuevaConsulta);
        },
        put:  (data, callback) => {
            if(typeof data.indice !== "undefined") {
                if(consultas[data.indice]) {
                    const {fechaCreacion} = consultas[data.indice];
                    consultas[data.indice] = {
                        ...data.payload, 
                        fechaCreacion, 
                        fechaModificacion: new Date(),
                    };
                    return callback(200, consultas[data.indice]);
                }
                return callback(404, {mensaje: `consulta con indice ${data.indice} no encontrada`});
            }
            callback(400, {mensaje: "indice no enviado"});
        },
        delete: (data, callback) => {
            if(typeof data.indice !== "undefined") {
                if(consultas[data.indice]) {
                    consultas = consultas.filter((_consulta, indice) => indice != data.indice);
                    return callback(204, {mensaje: `elemento con indice ${data.indice} eliminado`});
                }
                return callback(404, {mensaje: `consulta con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: "indice no enviado"});
        },  
    }
}

