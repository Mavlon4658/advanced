const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const langs = document.querySelectorAll('.select_lang');

if (langs.length) {
    langs.forEach(el => {
        el.querySelector('.select_lang__btn').onclick = () => {
            el.classList.toggle('active');
        }
        el.querySelectorAll('.select_lang__list li').forEach(langItem => {
            langItem.onclick = () => {
                el.classList.remove('active');
                el.querySelector('.select_lang__btn input').value = langItem.textContent;
            }
        })
    })
}

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal__open');
const modalBg = document.querySelector('.modal__bg');
const modalClose = document.querySelector('.modal__close');

modalOpen.onclick = e => {
    e.preventDefault();
    modal.classList.add('active');
    bodyHidden();
}

modalClose.onclick = () => {
    modal.classList.remove('active');
    bodyVisible();
}

modalBg.onclick = () => {
    modal.classList.remove('active');
    bodyVisible();
}

const bars = document.querySelector('.header .bars');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

bars.onclick = () => {
    mobileMenu.classList.add('active');
    bodyHidden();
}

mobileMenuClose.onclick = () => {
    mobileMenu.classList.remove('active');
    bodyVisible();
}

document.addEventListener('click', event => {
    if (langs.length) {
        langs.forEach(el => {
            if (!el.contains(event.target)) {
                el.classList.remove('active');
            }
        })
    }
})