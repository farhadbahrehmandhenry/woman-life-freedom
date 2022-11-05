# woman-life-freedom

[Live Demo](https://farhadbahrehmandhenry.github.io/woman-life-freedom/index.html)               


gsap core => creates animation
scrollTrigger => triggers those animatiions

// to
// from
// fromTo

// to => from 0 to 500
gsap.to('.square', {
    duration: 5,
    x: 500,
    opacity: 0
});

// from => from 500 to 0
gsap.from('.square', {
    duration: 5,
    x: 500,
    opacity: 0
});

// fromTo => from red to blue
gsap.from('.square', 
{backgroundColor: 'red},
{
  backgroundColor: 'blue',
  duration: 4
}
);