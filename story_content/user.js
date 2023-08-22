function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6aL7aGwfkz8":
        Script1();
        break;
  }
}

function Script1()
{
  // Refer to Storyline player
let player = GetPlayer();

// Get input numeric variables from Articulate Storyline
let loanAmount = player.GetVar("LoanAmount");
let term = player.GetVar("Term");
let interestRate = player.GetVar("InterestRate1");
let comision = player.GetVar("Comision");

// Convert annual interest rate to monthly interest rate
let monthlyInterestRate = (interestRate / 100) / 12;

// Convert Comision to percentage and calculate comision amount
let comisionp = (comision / 100);
let pagocomision = comisionp * loanAmount;

// Calculate monthly and total payment using formula for loan payment
let numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, term);
let denominator = Math.pow(1 + monthlyInterestRate, term) - 1;
let monthlyPayment = numerator / denominator;

let pagoTotFrances = ((numerator / denominator) * term) + pagocomision ;

// Calculate monthly declining balance payment using formula for loan payment
let numerator1 = loanAmount / term ;
let denominator1 = loanAmount * monthlyInterestRate ;
let monthlyPayment1 = (numerator1 + denominator1) ;

let cuota1 = (loanAmount / term) + (loanAmount * monthlyInterestRate) ;
let cuotan = (loanAmount / term) + ((loanAmount / term) * monthlyInterestRate) ;
let pagoTotSaldos = ((cuota1 + cuotan) * (term / 2)) + pagocomision ;


// Display monthly fixed payment to user
player.SetVar("payment", + monthlyPayment.toFixed(0));

// Display monthly payment to user
player.SetVar("payment1", + monthlyPayment1.toFixed(0));

// Display total payment to user
player.SetVar("PagoTotFrances", + pagoTotFrances.toFixed(0));
player.SetVar("PagoTotSaldos", + pagoTotSaldos.toFixed(0));


// alert("Pago Mensual del préstamo (Cuota Fija): $" + monthlyPayment.toFixed(2));
// alert("Pago Mensual del préstamo (Sobre Saldos): $" + monthlyPayment1.toFixed(2));
// alert("Pago Total del préstamo Sobre Saldos: $" + pagoTotSaldos.toFixed(2));
// alert("Pago Total del préstamo Francés: $" + pagoTotFrances.toFixed(2));
// alert("CUOTA1: $" + cuota1.toFixed(2));
// alert("CUOTAN: $" + cuotan.toFixed(2));

}

