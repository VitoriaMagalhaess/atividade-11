console.log('Oi');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
const starsContainer = document.getElementById('stars-container');
// Criando um novo elemento para o canvas
let canvas = document.createElement('canvas');
canvas.width = window.innerWidth; // Largura da tela
canvas.height = window.innerHeight; // Altura da tela
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

// Array de luas com suas propriedades
let luas = [
    { x: 100, y: 100, radius: 30, color: 'red', dx: 2, dy: 1 },
    { x: 200, y: 150, radius: 30, color: 'blue', dx: -2, dy: 2 },
    { x: 300, y: 200, radius: 30, color: 'green', dx: 3, dy: -1 },
    { x: 400, y: 250, radius: 30, color: 'yellow', dx: -3, dy: 2 },
    { x: 500, y: 300, radius: 30, color: 'pink', dx: 1, dy: -2 }
];

// Função para desenhar as luas
function desenharLuas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    luas.forEach(lua => {
        ctx.beginPath();
        ctx.arc(lua.x, lua.y, lua.radius, 0, Math.PI * 2);
        ctx.fillStyle = lua.color;
        ctx.fill();
        ctx.closePath();

        // Atualiza a posição da lua
        lua.x += lua.dx;
        lua.y += lua.dy;

        // Verifica se a lua atingiu as bordas do canvas
        if (lua.x + lua.radius > canvas.width || lua.x - lua.radius < 0) {
            lua.dx = -lua.dx; // Inverte a direção
        }
        if (lua.y + lua.radius > canvas.height || lua.y - lua.radius < 0) {
            lua.dy = -lua.dy; // Inverte a direção
        }
    });
}

// Animação das luas
function animar() {
    desenharLuas();
    requestAnimationFrame(animar); // Chamando a função de animação
}

// Iniciando a animação
animar();

