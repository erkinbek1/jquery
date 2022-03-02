// let title = $('h1');
// let welcom = $('.welcom');
// let titleById = $('#title')
// let inp = $('[name="inp-name"]')
// // console.log(title, welcom, titleById, inp)
// // title.css('color', 'blue');
// // welcom.css('background-color', 'pink')
// // welcom.addClass('example1 example2') // vожем добавлять классы
// // console.log(welcom.hasClass('example2')) // можем проверять калассы есть ли они 
// // welcom.removeClass('example1')
// // titleById.append(' World')  //append добавляет в конец
// // titleById.prepend('Hello')  // prepend добавляет в начало
// title.prependTo(titleById)
// $('.center').before('<h3 class="new">New element</h3>')// before добавляет до центра 
// let result = confirm('are you 18 y.o.?');
// if(result){
//     $('h1').css('display', 'block')
// }
// $('p').empty(); // тег остается а содержимое очищается

// let num1 = +prompt("enter first number: ")
// let num2 = +prompt("enter second number: ")
// let result = num1 + num2
// $('body').html(`<h1>${result}</h1>`)
function sum(){
    let num1 = +prompt("enter first number: ")
    let num2 = +prompt("enter second number: ")
    let result = num1 + num2
    $('body').html(`<h1>${result}</h1>`)
}

function sub(){
    let num1 = +prompt("enter first number: ")
    let num2 = +prompt("enter second number: ")
    let result = num1 - num2
    $('body').html(`<h1>${result}</h1>`)
}

function mul(){
    let num1 = +prompt("enter first number: ")
    let num2 = +prompt("enter second number: ")
    let result = num1 * num2
    $('body').html(`<h1>${result}</h1>`)
}

function div(){
    let num1 = +prompt("enter first number: ")
    let num2 = +prompt("enter second number: ")
    let result = num1 / num2
    $('body').html(`<h1>${result}</h1>`)
}