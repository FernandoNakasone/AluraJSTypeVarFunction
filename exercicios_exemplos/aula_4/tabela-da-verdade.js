/// true && true = true
/// true && false = false
/// false && true = false
/// false && false = false

const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}

/// true || true = true
/// true || false = true
/// false || true = true
/// false || false = false

const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}