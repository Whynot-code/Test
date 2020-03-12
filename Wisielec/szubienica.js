

var tytul = '<p id="tytul1">WISIELEC</p>';
var start1 = '<p id="start1" onclick="kategorie()">Start</p>';

function poczatek()
{
    document.getElementById("szubienica").innerHTML = '<img src="img/s9.jpg" alt="" />';
    document.getElementById("plansza").innerHTML = tytul;
    document.getElementById("alfabet").innerHTML = start1;
}

var kat = new Array(6);

kat[0] = "Zwierzęta"
kat[1] = "Potrawy"
kat[2] = "Rosliny"
kat[3] = "Sport"
kat[4] = "Gry komputerowe"

var zw = new Array(5);
zw[0] = "NOSOROŻEC"
zw[1] = "TYRANOZAURUS REX"
zw[2] = "NIEDŹWIEDŹ"
zw[3] = "ANTYLOPA"
zw[4] = "GUZIEC"


var pot = new Array(5);
pot[0] = "JAJECZNICA"
pot[1] = "KOTLET SCHABOWY"
pot[2] = "ZUPA PIECZARKOWA"
pot[3] = "PIZZA"
pot[4] = "KEBAB"

var ros = new Array(5);
ros[0] = "ŚWIERK"
ros[1] = "DĄB"
ros[2] = "MLECZ"
ros[3] = "CZERWONA RÓŻA"
ros[4] = "KONOPIA INDYJSKA"

var spo = new Array(5);
spo[0] = "KICKBOXING"
spo[1] = "PIŁKA NOŻNA"
spo[2] = "SKOK W DAL"
spo[3] = "KOLARSTWO"
spo[4] = "SKOKI NARCIARSKIE"

var gry = new Array(5);
gry[0] = "CALL OF DUTY"
gry[1] = "MARIO"
gry[2] = "SNAKE"
gry[3] = "MEDAL OF HONOR"
gry[4] = "KONTRA"






function kategorie()
{
    start1 = '<p class="wybierz">Wybierz kategorie:</p>';
    for (i=0; i<=4; i++)
    {
        start1 = start1 + '<div class="kategoria" onclick="rozpocznij('+i+')">'+kat[i]+'</div>';

    }
    document.getElementById("alfabet").innerHTML = start1;
    

}

var haslo = "";

function rozpocznij(wyb)
{
 var random = Math.floor(Math.random()*5);
  
 if (wyb==0) haslo = zw[random];
  else if (wyb==1) haslo = pot[random];
  else if (wyb==2) haslo= ros[random];
  else if (wyb==3) haslo = spo[random];
  else  haslo = gry[random];

  start();
}

alert(haslo);
  alert(haslo.length);

haslo = haslo.toUpperCase();

var dlugosc = haslo.length; 

var haslo1 = "";
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for (i=0; i<dlugosc; i++)
{
    if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";  //Tu nie działa
    else haslo1 = haslo1 + "-";
}



function wypisz_haslo()
{
    document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" alt="" />'
    document.getElementById("plansza").style = "margin-top: 50px";
    document.getElementById("plansza").style = "margin-bottom: 50px";
    document.getElementById("plansza").innerHTML = haslo1;
}
 

window.onload = poczatek;

var litey = new Array(35);

litey[0] = "A"
litey[1] = "Ą"
litey[2] = "B"
litey[3] = "C"
litey[4] = "Ć"
litey[5] = "D"
litey[6] = "E"
litey[7] = "Ę"
litey[8] = "F"
litey[9] = "G"
litey[10] = "H"
litey[11] = "I"
litey[12] = "J"
litey[13] = "K"
litey[14] = "L"
litey[15] = "Ł"
litey[16] = "M"
litey[17] = "N"
litey[18] = "Ń"
litey[19] = "O"
litey[20] = "Ó"
litey[21] = "P"
litey[22] = "Q"
litey[23] = "R"
litey[24] = "S"
litey[25] = "Ś"
litey[26] = "T"
litey[27] = "U"
litey[28] = "V"
litey[29] = "W"
litey[30] = "X"
litey[31] = "Y"
litey[32] = "Z"
litey[33] = "Ż"
litey[34] = "Ź"

var litery = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ"


function start()
{
    var tresc_diva = "";

    for (i=0; i<=34; i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery.charAt(i)+'</div>';
        if ((i+1) % 7==0) tresc_diva = tresc_diva + '<div style="clear: both;"></div>'; 
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
    
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
var trafiona = false;

    for (i=0; i<dlugosc; i++)
    {
        if (haslo.charAt(i) == litey[nr])
        {
        haslo1 = haslo1.ustawZnak(i, litey[nr]);
        trafiona = true;
        }
    }
   
    if (trafiona == true)
    {
        var element = "lit" + nr;
        yes.play();
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        wypisz_haslo();
    }
    else
    {
        var element = "lit" + nr;
        no.play();
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        //skucha
        ile_skuch++;
        document.getElementById("szubienica").innerHTML = '<img src="img/s'+ile_skuch+'.jpg" alt="" />'

      
    }
      //wygrana
      if (haslo == haslo1)
      {
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+ //Tutaj czyta hasło
        '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
      }
    
      //przegrana
      if (ile_skuch>=9)
      {
        document.getElementById("alfabet").innerHTML = "Nie udało się! Prawidłowe hasło: "+haslo+ //Tutaj czyta hasło
        '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
      }
      
}

