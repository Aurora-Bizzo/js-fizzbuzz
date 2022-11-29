const container = document.querySelector('.box-area')
let element;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        element = `<div class="box box-green>Fizz</div>"`
    }
    else if (i % 5 === 0) {
        element = `<div class="box box-yellow>Buzz</div>"`
    }
    else if (i % 5 === 0 && i % 3 === 0) {
        element = `<div class="box box-red>FizzBuzz</div>"`
    }
    else {
        element = `<div class="box box-blue>${i}</div>"`
    }
}

container.innerHTML += element;

