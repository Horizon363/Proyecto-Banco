var saldoDebito = 5000;
var saldoCredito = -12000;
var limiteCredito = 60000;

function pagarTarjetaDeCredito() {
    var montoPago = parseFloat(prompt("Ingrese el monto a pagar:"));

    if (!isNaN(montoPago) && montoPago > 0) {
        if (montoPago <= saldoDebito) {
            saldoDebito -= montoPago;
            saldoCredito += montoPago;
            limiteCredito += montoPago;
            alert("Pago realizado con éxito");
        } else {
            var saldoRestante = montoPago - saldoDebito;
            if (saldoRestante <= limiteCredito) {
                saldoDebito = 0;
                saldoCredito += saldoRestante;
                limiteCredito -= saldoRestante;
                alert("Pago realizado con éxito");
            } else {
                alert("Monto insuficiente en la tarjeta de débito y límite de crédito");
            }
        }
    } else {
        alert("Monto de pago inválido");
    }

    actualizarSaldos();
}

function depositarATarjetaDeDebito() {
    var montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));

    if (!isNaN(montoDeposito) && montoDeposito > 0) {
        saldoDebito += montoDeposito;
        alert("Depósito realizado con éxito");
    } else {
        alert("Monto de depósito inválido");
    }

    actualizarSaldos();
}

function actualizarSaldos() {
    var saldoDebitoElement = document.getElementById("saldo-debito");
    var saldoCreditoElement = document.getElementById("saldo-credito");
    var limiteCreditoElement = document.getElementById("limite-credito");

    saldoDebitoElement.textContent = "Saldo: $" + saldoDebito.toFixed(2);
    saldoCreditoElement.textContent = "Saldo: $" + saldoCredito.toFixed(2);
    limiteCreditoElement.textContent = "Límite de Crédito: $" + limiteCredito.toFixed(2);
}

