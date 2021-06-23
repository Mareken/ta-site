const header = document.querySelector('.header')
const buttonOpenVideoModal = document.querySelector('.button-open-video-modal')
const videoModal = document.querySelector('.video-modal')
const buttonCloseVideoModal = document.querySelector(
  '.video-modal__button-close'
)
const videoModalVideo = videoModal.querySelector('video')
const videoModalOverlay = document.querySelector('.video-modal__overlay')
const mobileMenuTrigger = document.querySelector('.mobile-menu-trigger')
const mobileMenu = document.querySelector('.mobile-menu')
const buttonGotoTop = document.querySelector('.button-goto-top')
let scrollY = 0

window.addEventListener('scroll', () => {
  const previousScroll = scrollY
  const currentScroll = window.pageYOffset
  const direction = currentScroll >= previousScroll ? 'down' : 'up'

  scrollY = currentScroll

  if (direction === 'down' && currentScroll > 100) {
    header.classList.add('is-hidden')
  } else if (direction === 'up') {
    header.classList.remove('is-hidden')
  }
})

const openVideoModal = () => {
  videoModal.classList.add('show')
  document.body.style.overflowY = 'hidden'
  document.documentElement.style.overflowY = 'hidden'

  videoModalVideo.play()
}

const closeVideoModal = () => {
  videoModal.classList.remove('show')
  document.body.style.overflowY = 'auto'
  document.documentElement.style.overflowY = 'auto'

  videoModalVideo.pause()
  videoModalVideo.currentTime = 0
}

buttonOpenVideoModal.addEventListener('click', openVideoModal)
buttonCloseVideoModal.addEventListener('click', closeVideoModal)
videoModalOverlay.addEventListener('click', closeVideoModal)

if (mobileMenu) {
  mobileMenuTrigger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('show')) {
      document.body.style.overflowY = 'auto'
      document.documentElement.style.overflowY = 'auto'

      mobileMenuTrigger.classList.remove('menu-open')
      mobileMenu.classList.remove('show')
    } else {
      document.body.style.overflowY = 'hidden'
      document.documentElement.style.overflowY = 'hidden'

      mobileMenuTrigger.classList.add('menu-open')
      mobileMenu.classList.add('show')
    }
  })

  const links = mobileMenu.querySelectorAll('li > a')
  ;[...links].forEach((link) =>
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('show')) {
        document.body.style.overflowY = 'auto'
        document.documentElement.style.overflowY = 'auto'

        mobileMenuTrigger.classList.remove('menu-open')
        mobileMenu.classList.remove('show')
      }
    })
  )
}

buttonGotoTop.addEventListener('click', () => {
  window.scrollTo(0, 0)
})
