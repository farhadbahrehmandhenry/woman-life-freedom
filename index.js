gsap.registerPlugin(ScrollTrigger);

// timeline
// toggleClass
// stanndalone
// labels

// section one
var firstSec = document.getElementById('section-one');
var cloud1 = document.querySelector('.cloud-one');
var cloud2 = document.querySelector('.cloud-two');
var cloud3 = document.querySelector('.cloud-three');
var bloodDrop = document.getElementById('blood-drop');
var flood = document.getElementById('flood');
var winter1 = document.querySelector('.winter1');
var winter2 = document.querySelector('.winter2');
var winter3 = document.querySelector('.winter3');
var winter4 = document.querySelector('.winter4');
var winter5 = document.querySelector('.winter5');
var winter6 = document.querySelector('.winter6');
var winter7 = document.querySelector('.winter7');

// sky
var cloudySky = document.getElementById('cloudy-sky');
var cloud1 = document.querySelector('.cloud1');
var cloud2 = document.querySelector('.cloud2');
var cloud3 = document.querySelector('.cloud3');

// sky2
var cloudySky2 = document.getElementById('cloudy-sky-2');
var cloud4 = document.querySelector('.cloud4');
var cloud5 = document.querySelector('.cloud5');
var cloud6 = document.querySelector('.cloud6');
var sun = document.getElementById('sun');
var afterSun = document.getElementById('after-sun');
var end = document.getElementById('end');

// section three
var sectionThree = document.getElementById('section-three');
var sectionThreeText = document.getElementById('part-one');
var woman = document.getElementById('woman');
var blood1 = document.getElementById('blood-1');
var blood2 = document.getElementById('blood-2');
var blood3 = document.getElementById('blood-3');
var blood4 = document.getElementById('blood-4');

var partOneTexts = document.getElementById('part-one-texts');
var woman1 = document.querySelector('.woman1');
var woman2 = document.querySelector('.woman2');
var woman3 = document.querySelector('.woman3');
var woman4 = document.querySelector('.woman4');
var woman5 = document.querySelector('.woman5');
var woman6 = document.querySelector('.woman6');
var woman7 = document.querySelector('.woman7');
var storyOneBlood1 = document.getElementById('story-one-blood1');
var storyOneBlood2 = document.getElementById('story-one-blood2');


// section four
var sectionFour = document.getElementById('section-four');
var sectionFourText = document.getElementById('part-two');
var life = document.getElementById('life');
var lifeImage = document.querySelector('.life-image');

var partTwoTexts = document.getElementById('part-two-texts');
var life1 = document.querySelector('.life1');
var life2 = document.querySelector('.life2');
var life3 = document.querySelector('.life3');
var life4 = document.querySelector('.life4');
var life5 = document.querySelector('.life5');
var life6 = document.querySelector('.life6');
var life7 = document.querySelector('.life7');
var life8 = document.querySelector('.life8');
var life9 = document.querySelector('.life9');
var storyTwoDoll1 = document.querySelector('.story-two-doll1');
var storyTwoDoll2 = document.querySelector('.story-two-doll2');
var storyTwoDoll3 = document.querySelector('.story-two-doll3');
var storyTwoSaten = document.querySelector('.story-two-saten7');

// section five
var sectionFive = document.getElementById('section-five');
var sectionFiveText = document.getElementById('part-three');
var freedom = document.getElementById('freedom');
var cage = document.querySelector('.story-three-cage');
var bird1 = document.querySelector('.story-three-bird1');
var bird2 = document.querySelector('.story-three-bird2');
var bird3 = document.querySelector('.story-three-bird3');
var bird4 = document.querySelector('.story-three-bird4');

var partThreeTexts = document.getElementById('part-three-texts');
var freedom1 = document.querySelector('.freedom1');
var freedom2 = document.querySelector('.freedom2');
var freedom3 = document.querySelector('.freedom3');
var freedom4 = document.querySelector('.freedom4');
var freedom5 = document.querySelector('.freedom5');
var freedom6 = document.querySelector('.freedom6');
var freedom7 = document.querySelector('.freedom7');
var freedom8 = document.querySelector('.freedom8');

var gun = document.querySelector('.story-three-gun');
var bullet1 = document.querySelector('.story-three-bullet1');
var bullet2 = document.querySelector('.story-three-bullet2');
var bullet3 = document.querySelector('.story-three-bullet3');
var bullet4 = document.querySelector('.story-three-bullet4');
var bullet5 = document.querySelector('.story-three-bullet5');

// section six
var sectionSix = document.getElementById('section-six');
var sectionSixText = document.getElementById('part-four');
var womanLifeFreedom = document.getElementById('woman-life-freedom');
var impact1 = document.querySelector('.story-three-impact1');
var impact2 = document.querySelector('.story-three-impact2');
var impact3 = document.querySelector('.story-three-impact3');
var bloodImpact1 = document.getElementById('impact-blood-1');
var bloodImpact2 = document.getElementById('impact-blood-2');
var bloodImpact3 = document.getElementById('impact-blood-3');

var partFourTexts = document.getElementById('part-four-texts');
var womanLifeFreedom1 = document.querySelector('.woman-life-freedom1');
var womanLifeFreedom2 = document.querySelector('.woman-life-freedom2');
var womanLifeFreedom3 = document.querySelector('.woman-life-freedom3');
var womanLifeFreedom4 = document.querySelector('.woman-life-freedom4');

// animations
var cloud1Move = gsap.to(cloud1, { scale: 1.1, duration: 9, delay: 2 });
var cloud2Move = gsap.to(cloud2, { scale: 1.1, duration: 7, delay: 5 });
var cloud3Move = gsap.to(cloud3, { scale: 1.1, duration: 11 });

cloud1Move.repeat(10).yoyo(true).play();
cloud2Move.repeat(10).yoyo(true).play();
cloud3Move.repeat(10).yoyo(true).play();

ScrollTrigger.create({
  trigger: flood,
  duration: 2,
  start: "top 95%",
  end: "top 30%",
  pin: bloodDrop,
  pinSpacing: false,
  scrub: 1,
});

const winterTl = gsap.timeline({
  scrollTrigger: {
    trigger: flood,
    start: "top 50%",
    end: "bottom 40%",
    scrub: 1,
  }
});

winterTl
  .to(winter1, { opacity: 1, duration: 1 })
  .to(winter1, { scale: 1.5, duration: 1 })
  .to(winter1, { opacity: 0, duration: 1 })
  .to(winter2, { opacity: 1, duration: 1 })
  .to(winter2, { scale: 1.5, duration: 1 })
  .to(winter2, { opacity: 0, duration: 1 })
  .to(winter3, { opacity: 1, duration: 1 })
  .to(winter3, { scale: 1.5, duration: 1 })
  .to(winter3, { opacity: 0, duration: 1 })
  .to(winter4, { opacity: 1, duration: 1 })
  .to(winter4, { scale: 1.5, duration: 1 })
  .to(winter4, { opacity: 0, duration: 1 })
  .to(winter5, { opacity: 1, duration: 1 })
  .to(winter5, { scale: 1.5, duration: 1 })
  .to(winter5, { opacity: 0, duration: 1 })
  .to(winter6, { opacity: 1, duration: 1 })
  .to(winter6, { scale: 1.5, duration: 1 })
  .to(winter6, { opacity: 0, duration: 1 })
  .to(winter7, { opacity: 1, duration: 1 })
  .to(winter7, { scale: 1.5, duration: 1 })
  .to(winter7, { opacity: 0, duration: 1 })

const skyTl = gsap.timeline({
  scrollTrigger: {
    trigger: cloudySky,
    start: "top 95%",
    end: "top 5%",
    scrub: 1,
  }
});

skyTl
  .to(cloudySky, { backgroundColor: '#CC1100', duration: 3 })
  .to(cloud1, { opacity: 0.8, duration: 2 })
  .to(cloud2, { opacity: 0.8, duration: 1 })
  .to(cloud3, { opacity: 0.8, duration: 1 })
  .to(cloudySky, { backgroundColor: '#343636', duration: 2 })

gsap.to(sectionThreeText, {
  opacity: 0.9,
  duration: 2,
  scrollTrigger: {
    trigger: sectionThree,
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
    trigger: sectionThree,
    start: "35% center",
    end: "35% 25%",
    scrub: 3,
  }
});

gsap.to(blood1, {
  height: '1.5rem',
  duration: 5,
  scrollTrigger: {
    trigger: woman,
    scrub: 3,
  }
});

gsap.to(blood2, {
  height: '2.5rem',
  duration: 5,
  scrollTrigger: {
    trigger: woman,
    scrub: 3,
  }
});

gsap.to(blood3, {
  height: '85%',
  duration: 5,
  scrollTrigger: {
    trigger: woman,
    scrub: 3,
  }
});

gsap.to(blood4, {
  height: '30rem',
  duration: 5,
  scrollTrigger: {
    trigger: woman,
    scrub: 3,
  }
});

// ScrollTrigger.create({
//   trigger: storyOneSeven,
//   duration: 2,
//   start: "top 60%",
//   end: "bottom 60%",
//   scrub: 1,
//   toggleClass: { targets: happy, className: 'move' },
//   // onUpdate: (self) => (),
//   // there are more hooks
//   // onEnter: () => alert('because of Reyhaneh, Down with dicatator!'),
//   onLeave: () => {
//     happy.innerText = 'desperate';
//     alert('Because of Reyhaneh, Down with dicatator!')
//   },
//   // onEnterBack: () => (),
//   // onLEaveBack: () => ()
// });

const womanTl = gsap.timeline({
  scrollTrigger: {
    trigger: partOneTexts,
    start: "top 40%",
    end: "bottom 40%",
    scrub: 1,
  }
});

womanTl
  .to(woman1, { opacity: 1, duration: 2 })
  .to(woman1, { opacity: 0, duration: 2 })
  .to(woman2, { opacity: 1, duration: 2 })
  .to(woman2, { opacity: 0, duration: 2 })
  .to(woman3, { opacity: 1, duration: 2 })
  .to(woman3, { opacity: 0, duration: 2 })
  .to(woman4, { opacity: 1, duration: 2 })
  .to(woman4, { opacity: 0, duration: 2 })
  .to(storyOneBlood2, { opacity: 1, duration: 2 })
  .to(woman5, { opacity: 1, duration: 2 })
  .to(woman5, { opacity: 0, duration: 2 })
  .to(woman6, { opacity: 1, duration: 2 })
  .to(woman6, { opacity: 0, duration: 2 })
  .to(woman7, { opacity: 1, duration: 2 })
  .to(woman7, { opacity: 0, duration: 2 })

gsap.to(".parallax-blood", {
  scrollTrigger: {
    trigger: partOneTexts,
    scrub: true
  },
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none"
});

gsap.to(sectionFourText, {
  opacity: 0.9,
  duration: 2,
  scrollTrigger: {
    trigger: sectionFour,
    start: "25% center",
    end: "25% 25%",
    scrub: 3,
  }
});

gsap.to(life, {
  opacity: 0.9,
  scale: 1.2,
  duration: 2,
  scrollTrigger: {
    trigger: sectionFour,
    start: "35% center",
    end: "35% 25%",
    scrub: 3,
  }
});

gsap.to(lifeImage, {
  opacity: 0.9,
  scale: 1.4,
  x: "80%",
  duration: 2,
  scrollTrigger: {
    trigger: sectionFour,
    start: "45% center",
    end: "45% 25%",
    scrub: 3,
  }
});

const lifeTl = gsap.timeline({
  scrollTrigger: {
    trigger: partTwoTexts,
    start: "top 40%",
    end: "bottom 40%",
    scrub: 1,
  }
});

lifeTl
  .to(life1, { opacity: 1, duration: 2 })
  .to(life1, { opacity: 0, duration: 2 })
  .to(life2, { opacity: 1, duration: 2 })
  .to(storyTwoDoll1, { opacity: 1, duration: 2 })
  .to(life2, { opacity: 0, duration: 2 })
  .to(life3, { opacity: 1, duration: 2 })
  .to(storyTwoDoll1, { opacity: 0, duration: 2 })
  .to(life3, { opacity: 0, duration: 2 })
  .to(life4, { opacity: 1, duration: 2 })
  .to(storyTwoDoll2, { opacity: 0.7, duration: 2 })
  .to(life4, { opacity: 0, duration: 2 })
  .to(life5, { opacity: 1, duration: 2 })
  .to(life5, { opacity: 0, duration: 2 })
  .to(storyTwoDoll2, { opacity: 0, duration: 2 })
  .to(life6, { opacity: 1, duration: 2 })
  .to(storyTwoSaten, { opacity: 1, duration: 1 })
  .to(life6, { opacity: 0, duration: 2 })
  .to(storyTwoDoll3, { opacity: 0.7, duration: 2 })
  .to(life7, { opacity: 1, duration: 2 })
  .to(life7, { opacity: 0, duration: 2 })
  .to(life8, { opacity: 1, duration: 2 })
  .to(life8, { opacity: 0, duration: 2 })
  .to(storyTwoDoll3, { opacity: 0, duration: 2 })
  .to(life9, { opacity: 1, duration: 2 })
  .to(life9, { opacity: 0, duration: 2 })

gsap.to(".parallax-bg", {
  scrollTrigger: {
    trigger: partTwoTexts,
    start: "60% center",
    scrub: true,
  },
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none"
});

gsap.to(sectionFiveText, {
  opacity: 0.9,
  duration: 2,
  scrollTrigger: {
    trigger: sectionFive,
    start: "25% center",
    end: "25% 25%",
    scrub: 3,
  }
});

gsap.to(freedom, {
  opacity: 0.9,
  scale: 1.2,
  duration: 2,
  scrollTrigger: {
    trigger: sectionFive,
    start: "35% center",
    end: "35% 25%",
    scrub: 3,
  }
});

const cageTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionFive,
    start: "bottom bottom",
    end: "bottom 80%",
    scrub: 1,
  }
});

cageTl
  .to(cage, { opacity: 1, duration: 1 })
  .to(bird1, { opacity: 1, duration: 1 })
  .to(bird2, { opacity: 1, duration: 1 })
  .to(bird3, { opacity: 1, duration: 1 })
  .to(bird4, { opacity: 1, duration: 1 })

const freedomTl = gsap.timeline({
  scrollTrigger: {
    trigger: partThreeTexts,
    start: "top 40%",
    end: "bottom 40%",
    scrub: 1,
  }
});

freedomTl
  .to(freedom1, { opacity: 1, duration: 2 })
  .to(freedom1, { opacity: 0, duration: 2 })
  .to(freedom2, { opacity: 1, duration: 2 })
  .to(freedom2, { opacity: 0, duration: 2 })
  .to(freedom3, { opacity: 1, duration: 2 })
  .to(freedom3, { opacity: 0, duration: 2 })
  .to(freedom4, { opacity: 1, duration: 2 })
  .to(freedom4, { opacity: 0, duration: 2 })
  .to(freedom5, { opacity: 1, duration: 2 })
  .to(freedom5, { opacity: 0, duration: 2 })
  .to(freedom6, { opacity: 1, duration: 2 })
  .to(freedom6, { opacity: 0, duration: 2 })
  .to(freedom7, { opacity: 1, duration: 2 })
  .to(freedom7, { opacity: 0, duration: 2 })
  .to(freedom8, { opacity: 1, duration: 2 })
  .to(freedom8, { opacity: 0, duration: 2 })

// gsap.to(".parallax-gun", {
//   scrollTrigger: {
//     trigger: ".story-three-gun",
//     scrub: true
//   },
//   y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
//   ease: "none"
// });

// ScrollTrigger.create({
//   trigger: partThreeTexts,
//   duration: 2,
//   start: "20% 30%",
//   end: "bottom bottom",
//   pin: gun,
//   pinSpacing: false,
//   scrub: 1,
// });

// ScrollTrigger.create({
//   trigger: partThreeTexts,
//   duration: 2,
//   start: "20% 30%",
//   end: "bottom bottom",
//   pin: bullet,
//   pinSpacing: false,
//   scrub: 1,
// });

// const bulletTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: gun,
//     start: "top 30%",
//     end: "top 20%",
//     scrub: 4,
//     markers: true
//   }
// });

// freedomTl
//   .to(bullet, { left: '30rem', duration: 6 })

gsap.to(bullet1, {
  left: '100%',
  duration: 5,
  scrollTrigger: {
    trigger: gun,
    start: "top 80%",
    end: "top 20%",
    scrub: 3,
  }
});

gsap.to(bullet2, {
  left: '100%',
  duration: 5,
  scrollTrigger: {
    trigger: partThreeTexts,
    start: "50% bottom",
    end: "50% top",
    scrub: 3,
  }
});


gsap.to(bullet3, {
  left: '100%',
  duration: 5,
  scrollTrigger: {
    trigger: partThreeTexts,
    start: "75% 95%",
    end: "bottom 5%",
    scrub: 3,
  }
});

gsap.to(bullet4, {
  left: '100%',
  duration: 5,
  scrollTrigger: {
    trigger: partThreeTexts,
    start: "80% 95%",
    end: "bottom 5%",
    scrub: 3,
  }
});

gsap.to(bullet5, {
  left: '100%',
  duration: 5,
  scrollTrigger: {
    trigger: partThreeTexts,
    start: "85% 95%",
    end: "bottom 5%",
    scrub: 3,
  }
});

gsap.to(sectionSixText, {
  opacity: 0.9,
  duration: 2,
  scrollTrigger: {
    trigger: sectionSix,
    start: "25% center",
    end: "25% 25%",
    scrub: 3,
  }
});

gsap.to(womanLifeFreedom, {
  opacity: 0.9,
  scale: 1.1,
  duration: 2,
  scrollTrigger: {
    trigger: sectionSix,
    start: "35% center",
    end: "35% 25%",
    scrub: 3,
  }
});

gsap.to(bloodImpact1, {
  height: '30rem',
  duration: 5,
  scrollTrigger: {
    trigger: sectionSix,
    start: "top 80%",
    scrub: 3,
  }
});

// gsap.to(bloodImpact2, {
//   height: '10rem',
//   duration: 5,
//   scrollTrigger: {
//     trigger: sectionSix,
//     start: "top 40%",
//     scrub: 3,
//   }
// });

// gsap.to(bloodImpact3, {
//   height: '3rem',
//   duration: 5,
//   scrollTrigger: {
//     trigger: sectionSix,
//     start: "top 20%",
//     scrub: 3,
//   }
// });

const womanLifeFreedomTl = gsap.timeline({
  scrollTrigger: {
    trigger: partFourTexts,
    start: "top 40%",
    end: "bottom 40%",
    scrub: 1,
  }
});

womanLifeFreedomTl
  .to(womanLifeFreedom1, { opacity: 1, duration: 2 })
  .to(womanLifeFreedom1, { opacity: 0, duration: 2 })
  .to(womanLifeFreedom2, { opacity: 1, duration: 2 })
  .to(womanLifeFreedom2, { opacity: 0, duration: 2 })
  .to(womanLifeFreedom3, { opacity: 1, duration: 2 })
  .to(womanLifeFreedom3, { opacity: 0, duration: 2 })
  .to(womanLifeFreedom4, { opacity: 1, duration: 2 })
  .to(womanLifeFreedom4, { scale: 2, duration: 3 })
  .to(womanLifeFreedom4, { opacity: 0, duration: 2 })

const sky2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: cloudySky2,
    start: "top 30%",
    end: "50% 70%",
    scrub: 1,
  }
});

sky2Tl
  .to(cloudySky2, { backgroundColor: '#343636', duration: 3 })
  .to(cloud4, { left: "-50%", duration: 5 })
  .to(cloud4, { opacity: 0.8, duration: 5 })
  .to(cloud5, { top: "-30%", duration: 5 })
  .to(cloud5, { opacity: 0.8, duration: 5 })
  .to(cloudySky2, { backgroundColor: '#87ceeb', duration: 5 })
  .to(cloud6, { right: "-50%", duration: 5 })
  .to(cloud6, { opacity: 0.8, duration: 5 })

gsap.to(sun, {
  scale: 5,
  duration: 5,
  scrollTrigger: {
    trigger: cloudySky2,
    start: "50% 80%",
    end: "60% 80%",
    scrub: 3,
    pin: sun,
  }
});

gsap.to(end, {
  opacity: 1,
  scale: 4,
  duration: 5,
  scrollTrigger: {
    trigger: cloudySky2,
    start: "70% 80%",
    scrub: 3,
  }
});

// gsap.to(end, {
//   opacity: 1,
//   scale: 1.5,
//   duration: 5,
//   scrollTrigger: {
//     trigger: afterSun,
//     start: "center 70%",
//     scrub: 3,
//     // markers: true
//   }
// });