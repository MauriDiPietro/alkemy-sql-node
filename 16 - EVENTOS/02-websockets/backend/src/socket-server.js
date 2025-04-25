import { messageServices } from "./services/message-services.js";

export const websocketServerUp = (socketServer) => {
    socketServer.on('connection', async(socket)=>{
        console.log(`Usuario conectado: ${socket.id}`);

        socketServer.emit('messages', await messageServices.getAll()) //se emite a todos los usuarios

        socket.on('disconnect', () => {
            console.log(`Usuario desconectado: ${socket.id}`);
        })

        socket.on('chat:message', async(msg)=>{
            await messageServices.create(msg);
            socketServer.emit('messages', await messageServices.getAll())
        })
    })
}