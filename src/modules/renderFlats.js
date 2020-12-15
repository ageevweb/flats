import { prettify } from './prettifyNum'
import { openModal } from './modal'

export function renderFlats(flats) {
  let list = document.getElementById('list')
  let flatsArr = flats.map((item) => {
    return `
      <div class="flat-item">
        <div class="flat-item__wrapper">
          <div class="flat-item__top">
            <div class="flat-item__level">${item.level} этаж</div>
            <div class="flat-item__type">${item.type}</div>
            <div class="flat-item__meters">${item.meters} м<sup>2</sup></div>
          </div>
          <div class="flat-item__img" style="background-image: url('img/${item.img}.jpg')">
            <div class="flat-item__number">№${item.id}</div>
          </div>
          <div class="flat-item__bottom">
            <div class="flat-item__price">${prettify(item.price)} р.</div>
            <div class="flat-item__for-meter">${prettify(Math.floor(item.price / item.meters))} р. за м<sup>2</sup></div>
          </div>
          <button class="flat-item__more btn" data-id="${item.id}" >подробнее</button>
        </div>
      </div>
    `
  })

  list.innerHTML = ''
  list.innerHTML = flatsArr.join('')

  document.querySelectorAll('.flat-item__more').forEach(function(item) {
    item.onclick = () => openModal(item.getAttribute('data-id'))
  })
}

