const container = document.querySelector('.box-area')

for (let i = 1; i <= 100; i++) {
    let element;

    if (i % 5 === 0 && i % 3 === 0) {
        element = `<div class="box box-red">FizzBuzz</div>`
    }
    else if (i % 3 === 0) {
        element = `<div class="box box-green">Fizz</div>`
    }
    else if (i % 5 === 0) {
        element = `<div class="box box-yellow">Buzz</div>`
    }
    else {
        element = `<div class="box box-blue">${i}</div>`
    }

    container.innerHTML += element;
}



