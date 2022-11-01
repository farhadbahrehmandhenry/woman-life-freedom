// section one
var firstSec = document.getElementById('section-one');
var cloud1 = document.querySelector('.cloud-circle1');
var cloud2 = document.querySelector('.cloud-circle2');
var cloud3 = document.querySelector('.cloud-circle3');
var sun = document.getElementById('sun');

// section two
var iran = document.getElementById('iran-title');
var firstParagraph = document.getElementById('first-paragraph');
var secondParagraph = document.getElementById('second-paragraph');

// section three
var partOne = document.getElementById('section-three');
var partOneText = document.getElementById('part-one');
var woman = document.getElementById('woman');

// animations
var cloud1Move = gsap.to(cloud1, { scale: 1.1, duration: 9, delay: 2 });
var cloud2Move = gsap.to(cloud2, { scale: 1.1, duration: 7, delay: 5 });
var cloud3Move = gsap.to(cloud3, { scale: 1.1, duration: 11 });

cloud1Move.repeat(10).yoyo(true).play();
cloud2Move.repeat(10).yoyo(true).play();
cloud3Move.repeat(10).yoyo(true).play();

gsap.to(cloud1, {
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: partOne,
    start: "top 85%",
    end: "top 80%",
    scrub: 3,
    toggleActions: "play complete none none" // onEnter onLeave onEnterBack onLeaveBack
  }
});

gsap.to(cloud2, {
  x: 1000,
  duration: 5,
  scrollTrigger: {
    trigger: partOne,
    start: "top 80%",
    end: "top 75%",
    scrub: 3,
    toggleActions: "play complete none none"
  }
});

gsap.to(cloud3, {
  y: -500,
  duration: 5,
  scrollTrigger: {
    trigger: partOne,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
    toggleActions: "play complete none none"
  }
});

gsap.to(firstParagraph, {
  opacity: 1,
  ease: true,
  duration: 3,
  scrollTrigger: {
    trigger: iran,
    start: "top 60%",
    end: "top 35%",
    pin: firstParagraph,
    pinSpacing: true,
    scrub: 3,
  }
});

gsap.to(iran, {
  opacity: 0.8,
  duration: 5,
  ease: true,
  scrollTrigger: {
    trigger: secondParagraph,
    start: "top 70%",
    end: "top 20%",
    pin: iran,
    pinSpacing: true,
    scrub: 3,
  }
});

gsap.to(secondParagraph, {
  opacity: 1,
  ease: true,
  duration: 3,
  scrollTrigger: {
    trigger: secondParagraph,
    start: "top center",
    end: "top 10%",
    pin: true,
    scrub: 3,
  }
});

gsap.to(sun, {
  scale: 3,
  duration: 5,
  scrollTrigger: {
    trigger: partOne,
    start: "top 80%",
    end: "top 50%",
    scrub: 3,
  }
});

gsap.to([sun, cloud1, cloud2, cloud3], {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: partOne,
    start: "top center",
    end: "top 25%",
    scrub: 3,
  }
});

gsap.to(partOneText, {
  opacity: 0.9,
  duration: 2,
  scrollTrigger: {
    trigger: partOne,
    start: "25% center",
    end: "25% 25%",
    scrub: 3,
  }
});

gsap.to(woman, {
  opacity: 0.9,
  scale: 1.2,
  duration: 2,
  scrollTrigger: {
    trigger: partOne,
    start: "35% center",
    end: "35% 25%",
    scrub: 3,
  }
});