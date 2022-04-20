class SpiderMan {
  constructor(nombre, edad, actor, numPeliculas, estudio) {
    this.nombre = nombre;
    this.edad = edad;
    this.actor = actor;
    this.numPeliculas = numPeliculas;
    this.estudio = estudio;
  }

  getInfo() {
    return "Hey, I'm " + this.actor + " from " + this.estudio + " studio";
  }
}

// Esta línea nos permite exportar nuestra clase
module.exports = SpiderMan;
