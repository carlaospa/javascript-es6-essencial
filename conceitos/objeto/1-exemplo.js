class Animal{
    constructor(qtdePatas){
        this.qtdePatas = qtdePatas;
    }
}

class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde = morde;
    }
}

const pug = new Cachorro(false);
console.log(pug);