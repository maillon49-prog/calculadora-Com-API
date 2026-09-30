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


    res.status(400).json({
        mensagem: total
    });

});

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000");
});