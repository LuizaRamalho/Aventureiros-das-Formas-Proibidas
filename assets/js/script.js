function calcularAreaTriangulo() {
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;
    const area = (base * altura) / 2;
    document.getElementById('resultado').innerText = `Área: ${area}`;
}

function calcularAreaRetangulo() {
    const largura = document.getElementById('largura').value;
    const altura = document.getElementById('altura').value;
    const area = largura * altura;
    document.getElementById('resultado-retangulo').innerText = `Área: ${area}`;
}