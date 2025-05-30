export const info = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Biblioteca",
      version: "1.0.0",
      description: "API para gestionar una biblioteca",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./src/docs/*.yml"],
};
