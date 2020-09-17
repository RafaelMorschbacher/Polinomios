var ax1= document.getElementById('x5')
var bx1= document.getElementById('x4')
var cx1= document.getElementById('x3')
var dx1= document.getElementById('x2')
var ex1= document.getElementById('x1')
var ix1= document.getElementById('ind')
var res= document.getElementById('res')


function gerar(){
var a= Number(ax1.value)
var b= Number(bx1.value)
var c= Number(cx1.value)
var d= Number(dx1.value)
var e= Number(ex1.value)
var i= Number(ix1.value)
var showfunct= document.getElementById('showfunct')
res.innerHTML=('')

showfunct.innerHTML= (`Sua função é: <br><strong>${a}x⁵ + ${b}x⁴ + ${c}x³ + ${d}x² + ${e}x + ${i}</strong>`)
res.innerhtml=('')
}

function função(x){
var a= Number(ax1.value)
var b= Number(bx1.value)
var c= Number(cx1.value)
var d= Number(dx1.value)
var e= Number(ex1.value)
var i= Number(ix1.value)
return a*x**5 + b*x**4 + c*x**3 + d*x**2 + e*x + i 
}

function calcular(){
var variavel= document.getElementById('variavel')
var v1= Number(variavel.value)
res.innerHTML+= (`f(${v1})=`+ função(v1) + '<br>')
}