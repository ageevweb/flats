import noUiSlider from 'nouislider'
import { prettify } from './prettifyNum'

let range1 = document.getElementById('range1');
let range2 = document.getElementById('range2');
let range3 = document.getElementById('range3');

noUiSlider.create(range1, {
  start: [1, 30],
  connect: true,
  behaviour: 'snap',
  range: {
      'min': 1,
      'max': 30
  }
});
range1.noUiSlider.on('update', function() {
  let v1 = +range1.noUiSlider.get()[0]
  let v2 = +range1.noUiSlider.get()[1]
  document.querySelector('.range-fields__item1-1').innerHTML = v1.toFixed()
  document.querySelector('.range-fields__item1-2').innerHTML = v2.toFixed()
});


noUiSlider.create(range2, {
  start: [1, 99],
  connect: true,
  behaviour: 'snap',
  range: {
      'min': 1,
      'max': 99
  }
});
range2.noUiSlider.on('update', function() {
  let v1 = +range2.noUiSlider.get()[0]
  let v2 = +range2.noUiSlider.get()[1]
  document.querySelector('.range-fields__item2-1').innerHTML = v1.toFixed()
  document.querySelector('.range-fields__item2-2').innerHTML = v2.toFixed()
});


noUiSlider.create(range3, {
  start: [0, 16000000],
  connect: true,
  behaviour: 'snap',
  range: {
      'min': 1,
      'max': 16000000
  }
});
range3.noUiSlider.on('update', function() {
  let v1 = +range3.noUiSlider.get()[0]
  let v2 = +range3.noUiSlider.get()[1]
  document.querySelector('.range-fields__item3-1').innerHTML = prettify(v1.toFixed())
  document.querySelector('.range-fields__item3-2').innerHTML = prettify(v2.toFixed())
});