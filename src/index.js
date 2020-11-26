import { Flats } from './classes/Flats'
import './styles/style.scss'

window.addEventListener('onload', Flats.renderFlats())







document.querySelector('#btnFilter').onclick = function(){
  let inputs = document.querySelectorAll('.rooms__item input')
  console.log(inputs)

}
