var config = {
    type: Phaser.AUTO, // Navegador escolhe automaticamento o tipo de renderizador da página web
    // Altura e largura do jogo
    width: 800, 
    height: 600,

    scene: { // Funções que serão executadas durante o ciclo do jogo
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game (config);
var peixinho;

function preload () {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/tubarao.png');
}
function create () {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo');
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);
}
function update () { 
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}

