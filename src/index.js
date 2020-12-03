import { getFlats } from './modules/getFlats'
import './styles/style.scss'
import flats from './modules/db'
import noUiSlider from 'nouislider'

window.addEventListener('onload', getFlats())

document.querySelector('#btnFilter').onclick = function(){
  console.log(range1.noUiSlider.get())
  let rooms = document.querySelectorAll('.rooms__item input')
  let items = document.querySelectorAll('.flat-item')
  let currentTab = null

  rooms.forEach(elem => {
    if(elem.checked){
      currentTab = elem.value
    }
  });
  const filteredItems = flats.filter(item => item.type == currentTab).filter(item => item.price >= 10000000)
  console.log(filteredItems)

  if(currentTab == 'all'){
    items.forEach(elem => {
      elem.classList.remove('hide')
    })
    return true
  }

  items.forEach(elem => {
    if(elem.getAttribute('data-type') !== currentTab){
      elem.classList.add('hide')
    } else {
      elem.classList.remove('hide')
    }
  });

  console.log(currentTab)
}




let range1 = document.getElementById('range1');
let range2 = document.getElementById('range2');


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
  document.querySelector('.range-fields__item1-1').innerHTML = Math.round(range1.noUiSlider.get()[0])
  document.querySelector('.range-fields__item1-2').innerHTML = Math.round(range1.noUiSlider.get()[1])
});


noUiSlider.create(range2, {
  start: [20, 99],
  connect: true,
  behaviour: 'snap',
  range: {
      'min': 1,
      'max': 99
  }
});

range2.noUiSlider.on('update', function() {
  document.querySelector('.range-fields__item2-1').innerHTML = Math.round(range2.noUiSlider.get()[0])
  document.querySelector('.range-fields__item2-2').innerHTML = Math.round(range2.noUiSlider.get()[1])
});


noUiSlider.create(range3, {
  start: [0, 1600000],
  connect: true,
  behaviour: 'snap',
  range: {
      'min': 1,
      'max': 1600000
  }
});

range3.noUiSlider.on('update', function() {
  document.querySelector('.range-fields__item3-1').innerHTML = Math.round(range3.noUiSlider.get()[0])
  document.querySelector('.range-fields__item3-2').innerHTML = Math.round(range3.noUiSlider.get()[1])
});




// x.toFixed(2)