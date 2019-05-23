class verzorger {

    constructor(naam) {
    this.naam = naam;
    }   
    }
    
    let harry = new verzorger ('harry');
    let barry = new verzorger ('barry');
    
    let verzorgers = [];
    verzorgers.push (harry, barry);
    
    
                class beest {
    
                 constructor(naam,dier, verzorger) {
                this.naam = naam;
                this.dier = dier;
                this.verzorger = verzorger;
                 }   
                 }  
                    
                 class vis {
    
    constructor(naam,dier, verzorger) {
    this.naam = naam;
    this.dier = dier;
    this.verzorger = verzorger;
    }   
    }    
    
    class vogel {
    
    constructor(naam,dier, verzorger) {
    this.naam = naam;
    this.dier = dier;
    this.verzorger = verzorger;
    }   
    }
    
    let uil = new  vogel ('meneer uil', 'uil', harry);
    let valk = new vogel('valkje', 'sperwer', barry);
    
    let dolfijn = new  vis ('bubbels', 'dolfijn', barry);
    let orca = new vis ('willy', 'orca', harry);
    
    let beer = new   beest ('baloe', 'beer', harry);
    let tijger = new beest ('kahn', 'tijger',harry);
    
    var beesten = [];
    beesten.push (beer, tijger);
    
    var vissen = [];
    vissen.push (orca, dolfijn);
    
    var vogels =[];
    vogels.push (uil, valk);
    
    var alledieren = vissen.concat(beesten, vogels);
    
    console.log(beesten)
    console.log(vissen)
    console.log(vogels)
    console.log(alledieren)
    console.log(verzorgers)    
    
    function myFunction() {
    document.getElementById("lijst").innerHTML = '';
    for (var x = 0; x < alledieren.length; x++) {  
    document.getElementById("lijst").innerHTML =
    document.getElementById("lijst").innerHTML + alledieren[x].naam + ": " + alledieren[x].dier + ", ";
    }
    } 
    
    function klik1() {
    let iets = new  beest ('iets', 'wat')
    beesten.push (iets);
   var alledieren = vissen.concat(beesten, vogels);
    console.clear()
    console.log(beesten)
    console.log(vissen)
    console.log(vogels)
    console.log(alledieren)
    console.log(verzorgers) 
    }
    
    function klik2() {
    let iets = new  vogel ('iets', 'wat')
    vogels.push (iets);
    var alledieren = vissen.concat(beesten, vogels);
    console.clear()
    console.log(beesten)
    console.log(vissen)
    console.log(vogels)
    console.log(alledieren)
    console.log(verzorgers) 
    }
    
    function klik3() {
    let iets = new  vis ('iets', 'wat')
    vissen.push (iets);
    var alledieren = vissen.concat(beesten, vogels);
    console.clear()
    console.log(beesten)
    console.log(vissen)
    console.log(vogels)
    console.log(alledieren)
    console.log(verzorgers) 
    }
