//document.getElementById('top') - Ищет в документе элемент с указанным идентификатором.
//document.getElementsByClassName(') - Ищет во всём документе элементы с указанным классом.
//document.getElementsByTagName('p') - Ищет во всём документе элементы с указанным именем тега.
//document.getElementsByName('')
//document.querySelector('.bottom') - Ищет во всём документе первый попавшийся элемент, соответствующий указанному CSS-селектору.
//document.querySelectorAll('') -Ищет во всём документе элементы, соответствующие указанному CSS-селектору.
//closest('')

// window.getComputedStyle:Можно получить полный перечень всех фактически применённых к элементу (любым способом, в т.ч. с учётом каскадирования) стилевых свойств специальным методом

// Можно также вторым аргументом методу getComputedStyle передать имя псевдокласса CSS, например ':hover', если нужно узнать стилевые свойства, которые будут применены к элементу, если к нему будет поднесена мышь.


// Также, есть возможность отключать и подключать целые стилевые таблицы. Стилевые таблицы — теги <style> и <link>, содержащие наборы стилевых правил. Они могут быть найдены в DOM, как и любые другие элементы (например, через document.getElementById), а также могут быть найдены в document.styleSheets (это объект, подобный массиву, т.е. содержит свойство length и индексы от 0 до length-1; кроме того, если в теге <style> или <link> задан атрибут title, соответствующая стилевая таблица может быть найдена в document.styleSheets по данному ключу).

var btnLike = document.getElementById('like');
//console.log(btnLike);

var title = document.getElementsByClassName('text');
//console.log(title[0]);

var boxItems = document.getElementsByClassName('box-item');
// console.log(boxItems[0]);
// console.log(boxItems[1]);
// console.log(boxItems[2]);
// for (var i = 0; i < boxItems.length; i++) {
//     console.log(boxItems[i]);
// }


var btns = document.getElementsByTagName('button');
//console.log(btns);
// for (var i = 0; i < btns.length; i++) {
//     console.log(btns[i]);
// }


var inputDate = document.getElementsByName('currentDate');
//console.log(inputDate[0]);


var container = document.querySelector('.box-item');
//console.log(container);


var countDiv = document.querySelectorAll('section .box-item');
// console.log(countDiv);

// test
function colorDiv() {
    // var colorDiv = document.getElementById('box2');
    // colorDiv.style.backgroundColor = 'green';
    // var colorDiv = document.querySelector
    //     ('.box div');
    // var colorDiv = document.getElementsByClassName('box-item');
    // for (var i = 0; i < colorDiv.length; i++) {
    //     var elem = colorDiv[i];
    // elem.style.backgroundColor = 'green';
    // elem.style.cssText = 'background-color: yellow';
    //     var style = window.getComputedStyle(elem)
    //     alert(style)
    // }
    // console.log(colorDiv);
    // colorDiv.style.cssText = 'color: red';
    // colorDiv.style.cssText = 'background-color: blue; color: red';
    // var colorDiv = document.getElementsByClassName('box')[0];
    // colorDiv.style.border = '4px solid red';
    // var elems = document.getElementsByTagName('div');
    // for (var i = 0; i < elems.length; i++) {
    //     var elem = elems[i];
    //     // elem.style.color = 'green';
    //     elem.style.border = '3px solid red';

    // }
    // нужно перебирать
    var p = document.getElementsByTagName('p');
    for (var i = 0; i < p.length; i++) {
        var s = p[i];
        s.style.color = 'red';
    }
}

function newClick() {
    var newCl = document.getElementsByClassName('box-item');
    for (var i = 0; i < newCl.length; i++) {
        var newClic = newCl[2];
        // newClic.style.color = 'green'
        newClic.style.cssText = 'border: 4px dotted red; font-size: 40px'
    }
}
function backClick() {
    var bod = document.getElementsByTagName('body');
    for (var e = 0; e < bod.length; e++) {
        var bb = bod[e];
        bb.style.cssText = 'background-color: green'
    }
}
function querySellAl() {
    var all = document.querySelectorAll('.box');
    for (var c = 0; c < all.length; c++) {
        // console.log(all[c])
        var a = all[c];
        a.style.cssText = 'font-seze: 20px; color: pink; border: 2px dashed blue'
    }
}

//CSS
function changeTitle() {
    var title1 = document.getElementsByClassName('text')[0];
    //title1.style.color = 'green';
    //title1.style.fontSize = '100px';
    title1.style.cssText = 'font-size: 100px; color: green;';
}
//changeTitle();

function changeBoxItems() {
    var allBox = document.querySelectorAll('.box-item');
    allBox.forEach(function (element, index) {
        if (index % 2 === 0) {
            element.style.border = '10px dotted blue';
        }
    })
}