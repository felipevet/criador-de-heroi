class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar() {
        let ataque 
        if (this.tipo === "mago" || this.tipo === "guerreiro" || this.tipo === "monge" || this.tipo === "ninja") {
            if (this.tipo === "mago") {
                ataque = "magia"
            } else if (this.tipo === "guerreiro") {
                ataque = "espada"
            } else if (this.tipo === "monge") {
               ataque = "artes marciais"
            } else {
               ataque = "shuriken"
            }
    
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        } else {
            console.log("Os dados são inválidos, por favor tente outra vez?")
        }
        }
}

let heroi = new hero("Joderson", "28", "mago")
heroi.atacar()