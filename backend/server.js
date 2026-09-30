import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/calcular", function(req, res) {

    const {valorA, valorB, operador} = req.body;
    let total = 0;

    if (operador === "+") {
        total = valorA + valorB;
    }
    if (operador === "-") {
        total = valorA - valorB;
    }
    if (operador === "%") {
        total = valorA * valorB / 100;
    }
    if (operador === "÷") {
        total = valorA / valorB;
    }
    if (operador === "X") {
        total = valorA * valorB;
    }


    res.status(200).json({
        mensagem: total
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Servidor rodando na porta ${PORT}`);
});