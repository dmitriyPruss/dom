'use strict';

// 1) По нажатию на кнопку изменить текст самой кнопки

const btn = document.createElement('button');
btn.innerText = 'Click me!';
document.body.prepend(btn);    

btn.addEventListener('click', function() {
    this.textContent = 'Don`t click me';
    this.setAttribute('disabled', true);
});
btn.after(document.createElement('br'));

// 2) Отобразить картинку. Сделать так, что бы при появлении страницы 
// отображалсь одна картинка, а при наведении мышью на неё отображалась другая.

const img = document.createElement('img');
img.src = 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg';
img.width = img.height = '300';
btn.nextElementSibling.after(img);

img.addEventListener('mouseover', function() {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirwV3sJSSt0Xf8C43cLbEv2sJR_qWmMpAKnEhdmZbl2b8Cnu8LKZ_CDDvidqsKm4-00k&usqp=CAU';
});

img.addEventListener('mouseout', function() {
    img.src = 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg';
});

// 3) Сгенерировать заданную структуру:
// <h1>Header1</h1>
// <article>
// <h2>Header2</h2>
// <div><img src="" alt=""></div>
// <p>It is paragraph</p>
// </article>
// (привязать <div id="root"></div>)

const root = document.getElementById('root');

const header1 = document.createElement('h1');
header1.textContent = 'Header1';
root.append(header1);

const article = document.createElement('article');

const header2 = document.createElement('h2');
header2.append('Header2');
article.append(header2);

const div = document.createElement('div');
div.innerHTML = '<img src="" alt="">';
article.append(div);

const p = document.createElement('p');
p.append('It is paragraph');
article.append(p);

root.append(article);

