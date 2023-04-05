const images = document.querySelectorAll('.js-image')
const next = document.querySelector('.slider-next')
const prev = document.querySelector('.slider-prev')

let activeIndex = 0

next.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex === images.length -1) {
        activeIndex = 0
    } else{
        activeIndex = activeIndex + 1
    }
    

    images[activeIndex].classList.add('active')
})

prev.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex === 0) {
        activeIndex = images.length - 1
    } else{
        activeIndex = activeIndex - 1
    }
    
    images[activeIndex].classList.add('active')
})
