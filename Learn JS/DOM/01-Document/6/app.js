// const elem = document.querySelector('#elem');
// console.log(elem.getAttribute('about'));
// elem.setAttribute('type', 'none');
// console.log(elem.outerHTML);

// const a = document.querySelector('#a');
// console.log(a.getAttribute('href'));
// console.log(a.href);


//      Нестандартные атрибуты, dataset
// const per = document.querySelector('#wawa');
// console.log(per.dataset.aboutUser);


//      1
// const primer = document.querySelector('[data-widget-name]');
// console.log(primer.dataset.widgetName);

//      2
let links = document.querySelectorAll('ul li a');
for (let link of links) {
    let valueAttr = link.getAttribute('href');
    if (valueAttr.includes('://') && !valueAttr.startsWith('http://internal.com')) {
        link.style.color = 'orange';
    }
}

