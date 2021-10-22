class FiguraGeometrica {
   constructor(base,altezza){
      this.base    = base;
      this.altezza = altezza;
   }

   //Funzione sul prototipo
   calcolaArea(){
      return this.base * this.altezza;
   }
}

class Triangolo extends FiguraGeometrica{
   constructor(base,altezza){
      super(base,altezza);
   }

   //Dalla sottoclasse è possibile chiamare un metodo presente sia nella sottoclasse che nella
   //superclasse facendo super.metodo()    Se fai  this.metodo() viene chiamato il metodo della
   //sottoclasse.  Con la chiamata super.metodo() da dentro il metodo() della sottoclasse il
   // this dentro il metodo() della superclasse sarà sempre l'istanza della sottoclasse.
   calcolaArea(){
      return super.calcolaArea() / 2;
   }
}

class Circle extends FiguraGeometrica{
   constructor(raggio){
      super(); //istanze della superclasse inizializzate ad undefined
      this.raggio = raggio;
   }

   calcolaArea(){
      return Math.pow(this.raggio,2) * Math.PI;
   }

}