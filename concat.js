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
    let valk = new vogel ();
    
    let dolfijn = new  vis ();
    let orca = new     vis ();
    
    let beer = new   beest ();
    let tijger = new beest ();
    
    var beesten = [];
    beesten.push (beer, tijger);
    
    var vissen = [];
    vissen.push (orca, dolfijn);
    
    var vogels =[];
    vogels.push (uil, valk);
    
    function klik1() {
    let iets = new  beest ()
    beesten.push (iets);
    console.clear()
    console.table(beesten)
    console.table(vissen)
    console.table(vogels)
    }
    
    function klik2() {
    let iets = new  vogel ()
    vogels.push (iets);
    console.clear()
    console.table(beesten)
    console.table(vissen)
    console.table(vogels)
    }
    
    function klik3() {
    let iets = new  vis ()
    vissen.push (iets);
    console.clear()
    console.table(beesten)
    console.table(vissen)
    console.table(vogels)
    }
    
    function myFunction() {
        var alledieren = vissen.concat(beesten, vogels);
        document.getElementById("lijst").innerHTML = '';
        for (var x = 0; x < alledieren.length; x++) {  
            console.table(alledieren)
            document.getElementById("lijst").innerHTML =
        document.getElementById("lijst").innerHTML + alledieren[x].naam;
        }
        }