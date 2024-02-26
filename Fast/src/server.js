import Fastify from "fastify";

const port = 3000;

const app = Fastify({logger : true});


app.get('/', () => {
    return "Olá";
});


app.listen({
    port
}, (error, address) => {
    if(error){
        app.log.error(error);
        process.exit(1);
    }
});
