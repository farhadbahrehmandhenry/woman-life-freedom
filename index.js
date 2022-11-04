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
var sun = document.getElementById('sun');

// section two
var iran = document.getElementById('iran-title');
var firstParagraph = document.getElementById('first-paragraph');
var secondParagraph = document.getElementById('second-paragraph');

// section three
var sectionThree = document.getElementById('section-three');
var sectionThreeText = document.getElementById('part-one');
var woman = document.getElementById('woman');
var blood1 = document.getElementById('blood-1');
var blood2 = document.getElementById('blood-2');
var blood3 = document.getElementById('blood-3');
var blood4 = document.getElementById('blood-4');

// section four
var sectionFour = document.getElementById('section-four');
var sectionOneTitle = document.getElementById('story-one-title');
var women = document.getElementById('women');
var storyOneOne = document.getElementById('story-one-one');
var storyOneTwo = document.getElementById('story-one-two');
var storyOneThree = document.getElementById('story-one-three');
var storyOneFour = document.getElementById('story-one-four');
var storyOneFive = document.getElementById('story-one-five');
var storyOneSix = document.getElementById('story-one-six');
var storyOneSeven = document.getElementById('story-one-seven');
var desperate = document.getElementById('desperate');
var happy = document.querySelector('#story-one-title .changable .show');

// animations
// var cloud1Move = gsap.to(cloud1, { scale: 1.1, duration: 9, delay: 2 });
// var cloud2Move = gsap.to(cloud2, { scale: 1.1, duration: 7, delay: 5 });
// var cloud3Move = gsap.to(cloud3, { scale: 1.1, duration: 11 });

// cloud1Move.repeat(10).yoyo(true).play();
// cloud2Move.repeat(10).yoyo(true).play();
// cloud3Move.repeat(10).yoyo(true).play();

// gsap.to(cloud1, {
//   x: -500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: sectionThree,
//     start: "top 85%",
//     end: "top 80%",
//     scrub: 3,
//     toggleActions: "play complete none none" // onEnter onLeave onEnterBack onLeaveBack
//   }
// });

// gsap.to(cloud2, {
//   x: 1000,
//   duration: 5,
//   scrollTrigger: {
//     trigger: sectionThree,
//     start: "top 80%",
//     end: "top 75%",
//     scrub: 3,
//     toggleActions: "play complete none none"
//   }
// });

// gsap.to(cloud3, {
//   y: -500,
//   duration: 5,
//   scrollTrigger: {
//     trigger: sectionThree,
//     start: "top 75%",
//     end: "top 70%",
//     scrub: 3,
//     toggleActions: "play complete none none"
//   }
// });

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

// gsap.to(sun, {
//   scale: 3,
//   duration: 5,
//   scrollTrigger: {
//     trigger: sectionThree,
//     start: "top 80%",
//     end: "top 50%",
//     scrub: 3,
//   }
// });

// gsap.to([sun, cloud1, cloud2, cloud3], {
//   opacity: 0,
//   duration: 3,
//   scrollTrigger: {
//     trigger: sectionThree,
//     start: "top center",
//     end: "top 25%",
//     scrub: 3,
//   }
// });

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
  height: '10rem',
  duration: 5,
  scrollTrigger: {
    trigger: woman,
    scrub: 3,
  }
});

// 1
const storyOneOneTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionFour,
    start: "bottom 75%",
    pin: sectionOneTitle,
    scrub: 1,
  }
});

storyOneOneTl
  .to(storyOneOne, { opacity: 0.8, duration: 2 })
  .to(storyOneOne, { opacity: 0, duration: 1 })

// 2
const storyOneTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: storyOneOne,
    start: "bottom center",
    pin: sectionOneTitle,
    scrub: 1,
  }
});

storyOneTwoTl.to(storyOneTwo, { opacity: 0.8, duration: 1 })
  .to(storyOneTwo, { opacity: 0, duration: 1 })

// 3
const storyOneThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: storyOneTwo,
    start: "bottom center",
    pin: sectionOneTitle,
    scrub: 1,
  }
});

storyOneThreeTl.to(storyOneThree, { opacity: 0.8, duration: 1 })
  .to(storyOneThree, { opacity: 0, duration: 1 })

// 4
const storyOneFourTl = gsap.timeline({
  scrollTrigger: {
    trigger: storyOneThree,
    start: "bottom center",
    pin: sectionOneTitle,
    scrub: 1,
  }
});

storyOneFourTl.to(storyOneFour, { opacity: 0.8, duration: 1 })
  .to(storyOneFour, { opacity: 0, duration: 1 })

// 5
const storyOneFiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: storyOneFour,
    start: "bottom center",
    pin: sectionOneTitle,
    scrub: 1,
  }
});

storyOneFiveTl.to(storyOneFive, { opacity: 0.8, duration: 1 })
  .to(storyOneFive, { opacity: 0, duration: 1 })

// 6
const storyOneSixTl = gsap.timeline({
  scrollTrigger: {
    trigger: storyOneFive,
    start: "bottom center",
    pin: sectionOneTitle,
    scrub: 1,
  }
});

storyOneSixTl.to(storyOneSix, { opacity: 0.8, duration: 1 })
  .to(storyOneSix, { opacity: 0, duration: 1 })

// 7
const storyOneSevenTl = gsap.timeline({
  scrollTrigger: {
    trigger: storyOneSix,
    start: "bottom center",
    pin: sectionOneTitle,
    scrub: 1,
  }
});

storyOneSevenTl.to(storyOneSeven, { opacity: 0.8, duration: 1 })
  .to(storyOneSeven, { opacity: 0, duration: 1 })

// gsap.to(happy, {
//   top: "-20%",
//   scrollTrigger: {
//     trigger: storyOneTwo,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(desperate, {
//   top: "80%",
//   scrollTrigger: {
//     trigger: storyOneTwo,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//     // toggleClass: 'hide',
//   }
// });

// gsap.to(happy, {
//   top: "-40%",
//   scrollTrigger: {
//     trigger: storyOneThree,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(desperate, {
//   top: "60%",
//   scrollTrigger: {
//     trigger: storyOneThree,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(happy, {
//   top: "-60%",
//   scrollTrigger: {
//     trigger: storyOneFour,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(desperate, {
//   top: "40%",
//   scrollTrigger: {
//     trigger: storyOneFour,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(happy, {
//   top: "-80%",
//   scrollTrigger: {
//     trigger: storyOneFive,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(desperate, {
//   top: "20%",
//   scrollTrigger: {
//     trigger: storyOneFive,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(happy, {
//   top: "-80%",
//   scrollTrigger: {
//     trigger: storyOneSix,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(desperate, {
//   top: "20%",
//   scrollTrigger: {
//     trigger: storyOneSix,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(happy, {
//   top: "-100%",
//   scrollTrigger: {
//     trigger: storyOneSeven,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// gsap.to(desperate, {
//   top: "0",
//   scrollTrigger: {
//     trigger: storyOneSeven,
//     start: "top 85%",
//     end: "top 40%",
//     scrub: 1,
//   }
// });

// standalone toggleClass
// ScrollTrigger.create({
//   trigger: storyOneOne,
//   duration: 2,
//   start: "bottom 70%",
//   scrub: 1,
//   toggleClass: 'dark',
// });

ScrollTrigger.create({
  trigger: storyOneOne,
  duration: 2,
  start: "bottom 80%",
  end: "bottom 75%",
  scrub: 1,
  toggleClass: { targets: happy, className: 'blink' },
});

ScrollTrigger.create({
  trigger: storyOneTwo,
  duration: 2,
  start: "bottom 80%",
  end: "bottom 65%",
  scrub: 1,
  toggleClass: { targets: happy, className: 'blink' },
});

ScrollTrigger.create({
  trigger: storyOneThree,
  duration: 2,
  start: "bottom 80%",
  end: "bottom 65%",
  scrub: 1,
  toggleClass: { targets: happy, className: 'blink' },
});

ScrollTrigger.create({
  trigger: storyOneFour,
  duration: 2,
  start: "bottom 80%",
  end: "bottom 65%",
  scrub: 1,
  toggleClass: { targets: happy, className: 'blink' },
});

ScrollTrigger.create({
  trigger: storyOneFive,
  duration: 2,
  start: "bottom 80%",
  end: "bottom 65%",
  scrub: 1,
  toggleClass: { targets: happy, className: 'blink' },
});

ScrollTrigger.create({
  trigger: storyOneSix,
  duration: 2,
  start: "bottom 80%",
  end: "bottom 65%",
  scrub: 1,
  toggleClass: { targets: happy, className: 'blink' },
});

ScrollTrigger.create({
  trigger: storyOneSeven,
  duration: 2,
  start: "top 60%",
  end: "bottom 60%",
  scrub: 1,
  toggleClass: { targets: happy, className: 'move' },
  markers: true,
  // onUpdate: (self) => (),
  // there are more hooks
  // onEnter: () => alert('because of Reyhaneh, Down with dicatator!'),
  onLeave: () => alert('Because of Reyhaneh, Down with dicatator!'),
  // onEnterBack: () => (),
  // onLEaveBack: () => ()
});
