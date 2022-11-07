// 1//
// Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.
function citat(){
    var bazaCitata = ["inteligencija bez ambijije je poput ptice bez krila.- Salvador Dali",
                        "ambicija je poslednje utociste neuspehu.-Oskar Vajld",
                        "zene koje teze da budu jednake muskarcimaimaju nedostatka ambicija.-Merlin Monro"];
                        return bazaCitata[Math.floor(Math.random() * bazaCitata.length)]
}
console.log(citat())

// //2 
// Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).
function daLiJePrestupna(godina){
    if ((godina % 4 == 0 && godina % 100 != 0 )|| godina % 400 == 0){
        return "godina je prestupna";

    }
    else{
        return " godina nije prestupna";
    }
}
console.log(daLiJePrestupna(1900));

// //3
// Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

function slova(rec){
    var countSamo = rec.match(/[aeiou]/gi).length;
    var countSug = rec.match(/(?![aeiou])[a-z]/gi).length;
    return"ima" +countSamo+ "samoglasnika i " +countSug+ "suglasnika";
}
    console.log(slova("neka recenica random koju sam napisala"));

//4
// Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.
function tipPodataka(niz){
    output=[];
    for (i=0; i<niz.length; i++){
        output.push(typeof niz[i]);
    }
    return output;
}
console.log(tipPodataka(["rec", 3478, null, undefined, Infinity, "opet rec"]));

//5



//6
// Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.
// Primer 1:"Computer" =>[ 8,"C", "r", "pu", "not found"]
// Primer 2: "Science" =>[7, "S", "e", "e", "@ index 5"]

function opisStringa(string){
    var opis = "";
    var indexDrug = 0;
    var sred2="";
    if (string.length%2==0){
        sred2 = string[(string.length/2)-1] + string[(string.length/2)];
    }
    else {sred2=string[Math.floor8(string.length/2)];console.log(sred2)
}
}
return opis;
console.log(opisStinga("computer"));

