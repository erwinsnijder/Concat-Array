var vissoort = ['orca','dolfijn','maanvis','kreeft','piranha','haai','Cichlidae','koi','siergarnaal','meerval'];
var diersoort = [];
var vogelsoort = [];
    
                class beest {
    
                 constructor() {
                this.naam = "soort";
                }   
                }  
                    
                 class vis {
    
    constructor() {
    this.naam = vissoort[Math.floor(Math.random() * vissoort.length)];
    }   
    }    
    
    class vogel {
    
    constructor() {
    this.naam = "soort";
    }   
    }
    
    let uil = new  vogel ();
    let valk = new vogel();
    
    let dolfijn = new  vis ();
    let orca = new vis ();
    
    let beer = new   beest ();
    let tijger = new beest ();
    
    var beesten = [];
    beesten.push (beer, tijger);
    
    var vissen = [];
    vissen.push (orca, dolfijn);
    
    var vogels =[];
    vogels.push (uil, valk);
    
    var alledieren = vissen.concat(beesten, vogels);
    
    // console.log(beesten)
    // console.log(vissen)
    // console.log(vogels)
    // console.log(alledieren)
        
     
    
    function klik1() {
    let iets = new  beest ('iets', 'wat')
    beesten.push (iets);
    var alledieren = vissen.concat(beesten, vogels);
    console.clear()
    console.log(beesten)
    console.log(vissen)
    console.log(vogels)
    console.log(alledieren)
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
    }
    
    function myFunction() {
        document.getElementById("lijst").innerHTML = '';
        for (var x = 0; x < alledieren.length; x++) {  
        console.log(alledieren)
            document.getElementById("lijst").innerHTML =
        document.getElementById("lijst").innerHTML + alledieren[x].naam + ": " + alledieren[x].dier + ", ";
        }
        }