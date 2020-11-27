import { getFlats } from './modules/getFlats'
import './styles/style.scss'


window.addEventListener('onload', getFlats())


document.querySelector('#btnFilter').onclick = function(){
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
