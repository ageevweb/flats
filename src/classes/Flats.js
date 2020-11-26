let flats = [
  {
    id: 345,
    type: "Студия",
    price: 5154364,
    meters: 26.4,
    level: 5,
    img: '000031504'
  },
  {
    id: 346,
    type: "Студия",
    price: 5515292,
    meters: 26.7,
    level: 19,
    img: '000031588'
  },
  {
    id: 347,
    type: "1-комнатная",
    price: 6169115,
    meters: 32.3,
    level: 10,
    img: '000031224'
  },
  {
    id: 348,
    type: "1-комнатная",
    price: 6402730,
    meters: 32.9,
    level: 14,
    img: '000031253'
  },
  {
    id: 349,
    type: "1-комнатная",
    price: 6480427,
    meters: 36.1,
    level: 5,
    img: '000031343'
  },
  {
    id: 350,
    type: "1-комнатная",
    price: 6541570,
    meters: 33,
    level: 20,
    img: '000031295'
  },
  {
    id: 351,
    type: "1-комнатная",
    price: 6541570,
    meters: 33,
    level: 8,
    img: '000031302'
  },
  {
    id: 352,
    type: "2-комнатная",
    price: 8399303,
    meters: 51.8,
    level: 8,
    img: '000031520'
  },
  {
    id: 353,
    type: "2-комнатная",
    price: 8546737,
    meters: 49.3,
    level: 11,
    img: '000031233'
  },
  {
    id: 354,
    type: "2-комнатная",
    price: 8560557,
    meters: 51.8,
    level: 10,
    img: '000031532'
  },
  {
    id: 355,
    type: "2-комнатная",
    price: 9642998,
    meters: 53.6,
    level: 19,
    img: '000031289'
  },
  {
    id: 356,
    type: "2-комнатная",
    price: 10563518,
    meters: 53.3,
    level: 19,
    img: '000031300'
  },
  {
    id: 357,
    type: "3-комнатная",
    price: 10389590,
    meters: 66.6,
    level: 7,
    img: '000031518'
  },
  {
    id: 358,
    type: "3-комнатная",
    price: 10492892,
    meters: 62.9 ,
    level: 9,
    img: '000031529'
  },
  {
    id: 359,
    type: "4-комнатная",
    price: 11690276,
    meters: 85.4,
    level: 7,
    img: '000031333'
  },
  {
    id: 360,
    type: "4-комнатная",
    price: 15945829,
    meters: 93.4,
    level: 8,
    img: '000031327'
  }, 
]


export class Flats {
    
  static renderFlats(){
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
          <div class="flat-item__img" style="background-image: url('/img/${item.img}.jpg')">
            <div class="flat-item__number">№${item.id}</div>
          </div>
          <div class="flat-item__bottom">
            <div class="flat-item__price">${this.prettify(item.price)} р.</div>
            <div class="flat-item__for-meter">${this.prettify(Math.floor(item.price / item.meters))} р. за м<sup>2</sup></div>
          </div>
        </div>
      `
    })
    list.innerHTML = flatsArr.join('')
  }

  static prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }
}