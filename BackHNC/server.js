const express = require("express");
const cors = require("cors");
const { PrismaClient } = require('./prisma/generated/client'); // Importez le Prisma Client

const app = express();

app.use(express.json());
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

app.get("/appointment", async (req, res) => {
    try {
        const appointment = await prisma.appointment.findMany();
        res.json(appointment);
    } catch (error) {
        console.error("Erreur lors de la requête Prisma : " + error);
        res.status(500).json("Erreur serveur");
    }
});

// Route POST pour créer un rendez-vous avec date et heure actuelles
app.post("/appointment", async (req, res) => {
    try {
        console.log(req.body)
        // Récupérez les données du corps de la requête
        const {
            first_name,
            last_name,
            email,
            phone,
            country,
            state,
            profession,
            financing_type,
            housing_type
        } = req.body;

        // Créez un nouvel enregistrement dans la table Appointment avec la date et l'heure actuelles
        const newAppointment = await prisma.$queryRaw`INSERT INTO Appointment (date, time, first_name, last_name, email, phone, country, state, profession, financing_type, housing_type)
                                                     VALUES (NOW(), CURTIME(), ${first_name}, ${last_name}, ${email}, ${phone}, ${country}, ${state}, ${profession}, ${financing_type}, ${housing_type})`;

        // Renvoyez les données du rendez-vous créé en réponse
        res.json(newAppointment);
    } catch (error) {
        console.error("Erreur lors de la création du rendez-vous : " + error);
        res.status(500).json("Erreur serveur");
    }
});






app.get("/property", async (req, res) => {
    try {
        const property = await prisma.property.findMany();
        res.json(property);
    } catch (error) {
        console.error("Erreur lors de la requête Prisma : " + error);
        res.status(500).json("Erreur serveur");
    }
});


app.listen(8081, () => {
    console.log("Écoute sur le port 8081");
});
