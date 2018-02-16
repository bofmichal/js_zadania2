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