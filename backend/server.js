import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/calcular", function(req, res) {

    const {valorA, valorB, operador} = req.body;
    let total = 0;
    const operadoresValidos = ["+", "-", "%", "÷", "X"];

    if (!Number.isFinite(valorA) || !Number.isFinite(valorB)) {
        return res.status(400).json({
            mensagem: "Valores inválidos. Certifique-se de enviar números válidos."
        });
    }

    if (!operadoresValidos.includes(operador)) {
        return res.status(400).json({
            mensagem: "Operador inválido. Certifique-se de enviar um operador válido."
        });
    }

    if (valorB === 0 && operador === "÷") {
        return res.status(400).json({
            mensagem: "Divisão por zero não é permitida."
        });
    }

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