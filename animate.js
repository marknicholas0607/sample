anime({
  targets: '.title',
  translateX: 50,
  direction: 'alternate',
  delay: function(el, i, l) {
    return i * 100;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 100;
  }
});
anime({
  targets: '.semi-title',
  translateX: 50,
  direction: 'alternate',
  delay: function(el, i, l) {
    return i * 150;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 150;
  }
});
var relativeEl = document.querySelector('.slider1');
relativeEl.style.transform = 'translateX(0px)';

anime({
  targets: '.slider1',
  translateX: {
    value: '*=1', // 100px * 2.5 = '250px'
    duration: 1200
  },
  width: {
    value: '-=20px', // 28 - 20 = '8px'
    duration: 1200,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 1200,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});

anime({
  targets: '.ikot',
  translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 600 },
    { value: 0, duration: 500, delay: 600 }
  ],
  scaleX: [
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleY: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 700, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.75, duration: 50, delay: 700, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)'
});

anime({
  targets: '.svg',
  translateX: -250,
  direction: 'alternate',
  easing: 'spring(1, 70, 10, 0)'
})

function myFunction() {
  var element = document.getElementById("body");
  var text = document.getElementById("h1");
  var text2 = document.getElementById("title");
  var text3 = document.getElementById("title2");
  var text4 = document.getElementById("ikot");
  var semi2 = document.getElementById("semi2");

  element.classList.toggle("black-background");
  semi2.classList.toggle("haha");
  text.classList.toggle("white-text");
  text2.classList.toggle("white-text");
  text3.classList.toggle("white-text");
  text4.classList.toggle("white-text");
}


