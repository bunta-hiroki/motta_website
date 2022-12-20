
console.log('test');

var swipertop = new Swiper('.swipertop', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
          delay: 3000,
      },
  
  });
  
  // -------------popularswiper----------------
  const popularswiperfirst = new Swiper('.popularswiperfirst', {
    // Optional parameters
    loop: true,
    // width: 370 ,
    slidesPerView: 2.5,
    centeredSlides: true,
    // number:2.5,
    // touchRatio: 1,
    // SimulateTouch: true,
  
  
    // If we need pagination
    pagination: {
      el: '.popularswiper-paginationfirst',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  const popularswipersecond = new Swiper('.popularswipersecond', {
    // Optional parameters
    loop: true,
    // width: 370 ,
    slidesPerView: 2.5,
    centeredSlides: true,
    // number:2.5,
    // touchRatio: 1,
    // SimulateTouch: true,
  
  
    // If we need pagination
    pagination: {
      el: '.popularswiper-paginationsecond',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const popularswiperthird = new Swiper('.popularswiperthird', {
    // Optional parameters
    loop: true,
    // width: 370 ,
    slidesPerView: 2.5,
    centeredSlides: true,
    // number:2.5,
    // touchRatio: 1,
    // SimulateTouch: true,
  
  
    // If we need pagination
    pagination: {
      el: '.popularswiper-paginationthird',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const popularswiperfour = new Swiper('.popularswiperfour', {
    // Optional parameters
    loop: true,
    // width: 370 ,
    slidesPerView: 2.5,
    centeredSlides: true,
    // number:2.5,
    // touchRatio: 1,
    // SimulateTouch: true,
  
  
    // If we need pagination
    pagination: {
      el: '.popularswiper-paginationfour',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  
  // -------------animationfrombotoom------------------
  
  const h1 = document.querySelectorAll(".featureleft h2, .featureleft p, .featureleft a, .collection, .collections h2 , .collections2 h2 ,.collections3 h2, .viewmorewrap"),
        header = document.querySelector('header');
        swipercontainer =  document.querySelector('.swiper-container').clientHeight;
        // console.log(swipercontainer);
  
  let scrollY;
  window.addEventListener("scroll", function() {
    for (let i = 0; i < h1.length; i++) {
     const getElementDistance = h1[i].getBoundingClientRect().top + h1[i].clientHeight  * .5
    
     if(window.innerHeight > getElementDistance){
       h1[i].classList.add("animationfrombottom");
     }
    }
  
    if(window.scrollY > 50) {
      if (scrollY > window.scrollY) {
        header.classList.remove('show')
      } else {
        header.classList.add('show')
      }
    } else {
      header.classList.remove('show')
    }
    
    if(window.scrollY > swipercontainer){
      header.classList.add('black');
    } else {
      header.classList.remove('black');
    }
    
    scrollY = window.scrollY
  });
  
  
  
  
  
  // -----------------------------------------
  
  const iconmenubarwrap = document.querySelector(".headernavright > .iconmenubarwrap");
  
  iconmenubarwrap.addEventListener("click", function() {
    const openmenu = document.querySelector(".openmenu");
    openmenu.classList.toggle('toggle');
  
    // const iconmenubar1 = document.querySelector(".iconmenubar1");
  
    // console.log(iconmenubar1);
  
    const iconmenubar1 = document.querySelector(".iconmenubar1");
    iconmenubar1.classList.toggle('transformR');
  
    const iconmenubar2 = document.querySelector(".iconmenubar2");
    iconmenubar2.classList.toggle('hidden');
  
    const iconmenubar3 = document.querySelector(".iconmenubar3");
    iconmenubar3.classList.toggle('transformL');
  
  });
  
  
  const itemsHeight = document.querySelector('.items.open').clientHeight;
  document.querySelector('.items.open').style.height = 0;
  document.querySelector('.items.open').classList.remove('open');
  const menubar = document.querySelector(".menubar");
  
  menubar.addEventListener("click", function(){
  
    const menubarsecond = document.querySelector(".menubarsecond");
    menubarsecond.classList.toggle('close');
  
    const items = document.querySelector(".items");
    items.classList.toggle('open');
    items.style.height = menubarsecond.classList.contains('close') ? itemsHeight + 'px' : 0;
  });
  