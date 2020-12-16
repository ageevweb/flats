import flats from './db'

export function openModal(a){
  let flatItem = flats.find(flat => flat.id == +a),
      fragment = '',
      modal = document.querySelector('.modal'),
      bg = document.querySelector('.modal__bg'),
      btnClose = document.querySelector('.modal__close'),
      modalInner = document.querySelector('.modal__info')

  modalInner.innerHTML = ''

  fragment = `
    <div class="modal__left" style="background-image: url('img/${flatItem.img}.jpg')"></div>
    <div class="modal__right">${flatItem.description}</div>
  `

  modalInner.innerHTML = fragment

  modal.classList.add('open')

  btnClose.onclick = () => {
    modal.classList.remove('open')
  }
  bg.onclick = () => {
    modal.classList.remove('open')
  }
}
