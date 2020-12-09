import { getFlats } from './modules/getFlats'
import './styles/style.scss'
import flats from './modules/db'
import './modules/multiranges'


window.addEventListener('onload', getFlats(flats))


document.querySelector('#btnFilter').onclick = function(e){
  e.preventDefault()

  let r1_from = (+range1.noUiSlider.get()[0]).toFixed(0)
  let r1_to = (+range1.noUiSlider.get()[1]).toFixed(0)
  let r2_from = (+range2.noUiSlider.get()[0]).toFixed(0)
  let r2_to = (+range2.noUiSlider.get()[1]).toFixed(0)
  let r3_from = (+range3.noUiSlider.get()[0]).toFixed(0)
  let r3_to = (+range3.noUiSlider.get()[1]).toFixed(0)
  let rooms = document.querySelectorAll('.rooms__item input')
  let items = document.querySelectorAll('.flat-item')
  let currentTab = null
  let filteredItems = []

  rooms.forEach(elem => {
    if(elem.checked){
      currentTab = elem.value
    }
  });

  if(currentTab === 'all'){
    filteredItems = flats.filter(item => item.level >= +r1_from && item.level <= +r1_to)
                               .filter(item => item.meters >= +r2_from && item.meters <= +r2_to)
                               .filter(item => item.price >= +r3_from && item.price <= +r3_to)
  } else {
    filteredItems = flats.filter(item => item.type === currentTab)
                               .filter(item => item.level >= +r1_from && item.level <= +r1_to)
                               .filter(item => item.meters >= +r2_from && item.meters <= +r2_to)
                               .filter(item => item.price >= +r3_from && item.price <= +r3_to)
  }

  getFlats(filteredItems)
}
