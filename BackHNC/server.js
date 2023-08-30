const express = require("express");
const cors = require("cors");
const { PrismaClient } = require('./generated/client'); // Importez le Prisma Client

const app = express();

app.use(cors());

const prisma = new PrismaClient(); // Créez une instance du Prisma Client

app.get("/", (req, res) => {
    res.json("Back is Packing");
});

app.get("/feedback", async (req, res) => {
    try {
        const feedback = await prisma.feedback.findMany();
        res.json(feedback);
    } catch (error) {
        console.error("Erreur lors de la requête Prisma : " + error);
        res.status(500).json("Erreur serveur");
    }
});

app.listen(8081, () => {
    console.log("Écoute sur le port 8081");
});
