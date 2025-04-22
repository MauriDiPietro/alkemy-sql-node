import fs from "fs";

const path = "./file.txt";

// fs.writeFileSync(path, 'Hola a todos')

if (fs.existsSync(path)) {
  const info = fs.readFileSync(path, "utf-8");
  console.log(info);
  fs.appendFileSync(path, "\nHola desde Node.js");
} else fs.writeFileSync(path, "Hola a todos");

class UserManager {
  constructor(path) {
    this.path = path;
  }

  consultarUsuarios = async () => {
    try {
      if (!fs.existsSync(this.path)) return [];
      const usuarios = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(usuarios);
    } catch (error) {
      throw new Error(error);
    }
  };

  crearUsuario = async (objeto) => {
    try {
      const usuariosArchivo = await this.consultarUsuarios();
      usuariosArchivo.push(objeto);
      await fs.promises.writeFile(this.path, JSON.stringify(usuariosArchivo));
      return objeto;
    } catch (error) {
      throw new Error(error);
    }
  };
}

const manager = new UserManager("./usuarios.json");

const usuario1 = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  email: "juan@mail.com",
};

const usuario2 = {
  nombre: "María",
  apellido: "Gómez",
  edad: 25,
  email: "mgomez@mail.com",
};

const test = async() =>{
    await manager.crearUsuario(usuario1);
    await manager.crearUsuario(usuario2);
    const consultaUsuarios = await manager.consultarUsuarios();
    console.log(consultaUsuarios);
    
}

test()
