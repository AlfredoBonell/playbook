const ChistesMalosController = require("./controllers/ChistesMalosController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Chistes Malos Api!"});
});

app.get("/v1/chistes/:id", (request, response) => {
    const id = request.params.id;
    const respuesta = ChistesMalosController.getChistesMalos(id);
    response.json({message: respuesta});
});

app.listen(port, () => {
    console.log(`Chistes Malos Api in localhost:${port}`);
});