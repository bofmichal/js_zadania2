//zadanie 2
function los1(){
    var los1=(Math.floor(Math.random()*10));
    document.getElementById("liczba1").innerHTML=los1;    
}
function los2(){
    var los2=(Math.floor(Math.random()*10));
    document.getElementById("liczba2").innerHTML=los2;
    
}
function los3(){
    var los3=(Math.floor(Math.random()*10));
    document.getElementById("liczba3").innerHTML=los3;
}

function sort(){
    var liczba1=document.getElementById("liczba1").innerHTML;
    var liczba2=document.getElementById("liczba2").innerHTML;
    var liczba3=document.getElementById("liczba3").innerHTML;
    var myArray=[];
    myArray[0]=liczba1;
    myArray[1]=liczba2;
    myArray[2]=liczba3;    
    var zmiana;
            do {
            zmiana = false;
            for (var i = 0; i < myArray.length; ++i) {
            if (myArray[i] > myArray[i + 1]) {
            var tmp = myArray[i];
            myArray[i] = myArray[i + 1];
            myArray[i + 1] = tmp;
            zmiana = true;
            }
            }
            } while (zmiana)    
                document.getElementById("sortowane").innerHTML=myArray;
}

function sortuj(){
    var liczba1=document.getElementById("licz1").value;
    var liczba2=document.getElementById("licz2").value;
    var liczba3=document.getElementById("licz3").value;
    var myArray=[];
    myArray[0]=liczba1;
    myArray[1]=liczba2;
    myArray[2]=liczba3;    
    var zmiana;
            do {
            zmiana = false;
            for (var i = 0; i < myArray.length; ++i) {
            if (myArray[i] > myArray[i + 1]) {
            var tmp = myArray[i];
            myArray[i] = myArray[i + 1];
            myArray[i + 1] = tmp;
            zmiana = true;
            }
            }
            } while (zmiana)
                document.getElementById("posortowane").innerHTML=myArray;
}

//zadanie 3
function nieparzyste(){
    var ar = [];
for (var i = 0; i < 100; ++i) {
ar[i] = 2 * i + 1;
if(ar[i]>98){
    break;
}
}
document.getElementById("nieparzyste").innerHTML=ar;
}
//zadanie 4 
var ar = [];
function losliczb(){
    //var ar = [];
for (var i = 0; i < 10; ++i) {
ar[i]=(Math.floor(Math.random()*20)+1);
    //document.getElementById("liczby").innerHTML=ar; 
}
document.getElementById("liczby").innerHTML=ar;
}

function sumliczb(){
    //var ar=[];
    //ar=[document.getElementById("liczby").innerHTML];
    //ar=document.getElementById("liczby").innerHTML;
    //ar[i]=ar[document.getElementById("liczby").innerHTML];
    var sum = 0; 
for (var i = 0; i < ar.length; ++i) {
sum= sum + ar[i];
}
console.log(sum);
document.getElementById("suma").innerHTML=sum;
}

//zadanie 5 

function losliczb2(){
    var ar = [];
/*for (var i = 0; i < 10; ++i) {
ar[i]=(Math.floor(Math.random()*20)+1);
console.log("ar[" + i + "] = " + ar[i]);
}
var sum = 0; 
for (var i = 0; i < ar.length; ++i) {
    
sum= sum + ar[i];*/
    var suma=0;
    var srednia;
    do {
//ar[i] = (Math.floor(Math.random()*20)+1);
//suma += ar;
for (var i = 0; i < 10; ++i) {
ar[i]=(Math.floor(Math.random()*20)+1);
console.log("ar[" + i + "] = " + ar[i]);     
}
for (var i = 0; i < ar.length; ++i) {    
suma= suma + ar[i];
srednia=suma/ar.length;
}

} while(suma < 100)
console.log(ar + " (suma: " + suma + ")");
document.getElementById("liczby2").innerHTML=ar;
document.getElementById("suma2").innerHTML=suma;
document.getElementById("srednia").innerHTML=srednia;
}

//zadanie 6
function rownanie(){
    var liczba1=parseFloat(document.getElementById("li1").value);
    var liczba2=parseFloat(document.getElementById("li2").value);
    var liczba3=parseFloat(document.getElementById("li3").value);
    var delta;
    if(isNaN(liczba1)){
        //document.getElementById("wynik").innerHTML="wpisz liczbę rzeczywistą w polu a";
        alert("wpisz liczbę rzeczywistą w polu a");
    }
    if(isNaN(liczba2)){
        //document.getElementById("wynik").innerHTML="wpisz liczbę rzeczywistą w polu a";
        alert("wpisz liczbę rzeczywistą w polu b");
    }
    if(isNaN(liczba3)){
        //document.getElementById("wynik").innerHTML="wpisz liczbę rzeczywistą w polu a";
        alert("wpisz liczbę rzeczywistą w polu c");
    }
    delta=(Math.pow(liczba2, 2))-4*liczba1*liczba3;
    document.getElementById("delta").innerHTML=delta;
    console.log(delta);
    if(delta==0){
        document.getElementById("wynik").innerHTML="Równanie ma jedno rozwiązanie";
    }
    if(delta>0){
        document.getElementById("wynik").innerHTML="Równanie ma dwa rozwiązania";
    }
    if(delta<0){
        document.getElementById("wynik").innerHTML="Równanie nie ma rozwiązań";
    }
}
//zadanie 7
var losowanie=(Math.floor(Math.random()*100)+1);
function zgadywanka(){
    var tur=parseInt(document.getElementById("zgadnij").value);
    if(isNaN(tur) || tur>100 || tur<=0){
        alert("wpisz liczbę od 1 do 100");
    }
    if(losowanie==tur){
        document.getElementById("podpowiedz").innerHTML="TRAFILES!!!";
    }
    if(losowanie>tur){
        document.getElementById("podpowiedz").innerHTML="wiecej";
    }
    if(losowanie<tur){
        document.getElementById("podpowiedz").innerHTML="mniej";
    }
}

//zadanie 8 
var max=101; 
var min=0;              
var cGuess=(Math.floor(Math.random()*100)+1);       
var Guesses=1;
var swoja=document.getElementById("swoja").value;
function kompzgad(){
    if (isNaN(document.getElementById("swoja").value) || document.getElementById("swoja").value>100){
        alert("Wpisz liczbę z przedziału 1 - 100");
    }
    document.getElementById("Guesser").value=cGuess;
    document.getElementById("guesses").value=1;
    if(cGuess==swoja){
        document.getElementById("odpowiedz").innerHTML="TRAFILES!!!";
    }
    
}
function zgadles(){
    document.getElementById("odpowiedz").innerHTML="TRAFILES!!!";
}
function Guess(n){
    
    if(n==1){		
   min=cGuess;
   if(cGuess==document.getElementById("swoja").value){
        document.getElementById("odpowiedz").innerHTML="TRAFILES!!!";
        
    }
  }
  else {			//n!=1 (n==2) then the user pressed "Lower", thus a similar idea
   max=cGuess
   if(cGuess==document.getElementById("swoja").value){
        document.getElementById("odpowiedz").innerHTML="TRAFILES!!!";
        
    }
  }
  Guesses=Guesses+1	
  cGuess=Math.floor((max+min)/2) 
  Guesser.value=cGuess		
  guesses.value=Guesses	
  if(cGuess==swoja){
        document.getElementById("odpowiedz").innerHTML="TRAFILES!!!";
    }
}

function Start(){		
  document.getElementById("odpowiedz").innerHTML="";
  document.getElementById("swoja").value="";
  document.getElementById("Guesser").value="";
  document.getElementById("guesses").value="";
}