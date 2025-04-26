class Botol{
    constructor(){
    this.Merek=''
    this.Warna=''
    this.CapasitasMl = 0
    }
    
    bukabotol(){
        // logika membuka botol
    }

    minum(){
        // logika meminum air
    }

    plintirbotol(){
        // logika plintir botol untuk dibuang

    }

    buangbotol(){
        // logika membuang botol pada tempatnya
    }
}

var Minumsaya = new Botol();
Minumsaya.Merek = "LeMineral";
Minumsaya.Warna = "Bening";
Minumsaya.CapasitasMl = 300;

Minumsaya.bukabotol();
Minumsaya.minum();
Minumsaya.plintirbotol();
Minumsaya.buangbotol();

console.log(Minumsaya)
