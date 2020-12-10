import { prettify } from './prettifyNum'

export function renderFlats(flats) {
  let list = document.getElementById('list')
  let flatsArr = flats.map((item) => {
    return `
      <div class="flat-item"
        data-level="${item.level}"
        data-type="${item.type}"
        data-meters="${item.meters}"
        data-id="${item.id}"
        data-price="${item.price}"
      >
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
        <button class="flat-item__more btn">подробнее</button>
      </div>
    `
  })
  list.innerHTML = ''
  list.innerHTML = flatsArr.join('')
}

