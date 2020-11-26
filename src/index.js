import { Flats } from './classes/Flats'
import './styles/style.scss'

window.addEventListener('onload', Flats.renderFlats())







document.querySelector('#btnFilter').onclick = function(){

  let rooms = document.querySelectorAll('.rooms__item input')
  let items = document.querySelectorAll('.flat-item')
  let currentTab = null

  rooms.forEach(elem => {
    if(elem.checked){
      currentTab = elem.value
    }
  });

  items.forEach(elem => {
    if(elem.getAttribute('data-type') !== currentTab){
      elem.classList.add('hide')
    } else {
      elem.classList.remove('hide')
    }
  });

  console.log(currentTab)



}
