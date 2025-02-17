/*for(var i=0; i<10; i+=2){
    alert(i)
}*/


/*var random=Math.floor(Math.random()*10)+5
alert(random)*/

var random=Math.floor(Math.random()*99)+1
var x=Number(prompt("zadejte náhodné číslo od 1 do 100"))
var pokusy=0
while(x!=random){
    var x=Number(prompt("zadejte náhodné číslo od 1 do 100"))
    if(x<random){
        alert("hledané číslo je větší než to vaše")
        pokusy++
    }
    else if (x>random){
        alert("hledané číslo je menší než to vaše")
        pokusy++
    }
}
alert("našli jste hledané číslo")
alert("Gratuluji! Uhádl jsi číslo "+random+" za "+pokusy+" pokusů" )

