//------------ header-------------------------------------------
const headerElm = document.querySelector(".header");

//----- Create header logo ---
const headerImg = document.createElement("img");
headerImg.classList.add("header__logo");

headerImg.src = "/assets/cube.png";
headerImg.alt = 'Header image';

//-----create header navigation ---
const headerNav = document.createElement("nav");
headerNav.classList.add("header__nav");

headerNav.innerHTML = `<img class="header__img" src= "/assets/Group.png" alt="Header nav Image">`;

//------Add header logo and header navigation  ------------
headerElm.append(headerImg, headerNav);


//----------- hero ---------------------------------
const heroElm = document.querySelector(".hero");

//--------- Create hero image ------
const heroImg = document.createElement("div");
heroImg.classList.add("hero__image");
heroImg.innerHTML = `<img class="hero__img" src="${hero.image}" alt="Hero image">`;

//---------- Create hero body ---------
const heroBody = document.createElement("div");

heroBody.classList.add("hero__body");
heroBody.innerHTML = `<h4 class="hero__head">${hero.headline}</h4>
<p class="para--style">${hero.copy}</p>
<button class="btn"><img class="btn--img" src="${hero.icon}" alt="Icon"> Explore</button>`;

//----- Add hero image and hero body------

heroElm.append(heroImg, heroBody);


//--------------- Services-----------------------------

const serviceElm = document.querySelector(".services");

//------- Create service divs-------
const servicesDiv = document.createElement("div");
servicesDiv.classList.add("services__card");

services.forEach((service) => {
  
  const serviceCard = document.createElement("div");
  serviceCard.classList.add("service__card");
  
  serviceCard.innerHTML = `<img class="card__img" src="${service.illustration}" alt="illustration">
  <div class="card__body">
  <h4 class="card__head">${service.headline}</h4>
  <p class="para--style">${service.text}</p>
  <p class="card__para--color">${service.linktext}</p>
</div>
  `;  
  servicesDiv.append(serviceCard)    
})
serviceElm.append(servicesDiv)


//---------------- facilities -------------------------------------

const facilitiesElm = document.querySelector(".facilities");

facilitiesElm.innerHTML = `<h2 class="facilities__head">${facilities.headline}</h2>`;

const facilitiesDiv = document.createElement("div");
facilitiesDiv.classList.add("facilities__card");


  facilities.options.forEach((option) => {
    const facilityDiv = document.createElement("div");
    facilityDiv.classList.add("facility__card");
    facilityDiv.innerHTML = `
    <img class="facility__img" src="${option.icon}" alt="icon" >
    <div class="facility__card--body">
    <h2 class="facility__head">${option.headline}</h2>
    <p class="para--style">${option.text}</p>
    <p class="card__para--color">Show me more</p>`;
    facilitiesDiv.append(facilityDiv)
  })

facilitiesElm.append(facilitiesDiv)


//--------------- Sites ---------------------------------------
const sitesElm = document.querySelector(".sites");

sitesElm.innerHTML = `
<div class="site__text">
  <h2 class="sites__head">${sites.headline}</h2>
  <p class="para--style">${sites.text}</p>
  <button class="btn"><img class="btn--img" src="${sites.btnicon}" alt="btnicon"> Start</button>
</div>
`
sites.places.forEach((place) => {
  const placeDiv = document.createElement("div");
  placeDiv.classList.add("place__card");
  placeDiv.innerHTML = `
  <img class="place__img" src="${place.img}" alt="place Image">
  <h4 class="place__head">${place.name}</h4>
  <p class="palce--para">${place.city}</p>
  <p class="card__para--color">View the site</p>
  `;
sitesElm.append(placeDiv);
})



//--------------- Advantages-----------------------------------
const advantagesElm = document.querySelector(".advantages");

advantagesElm.innerHTML = `<h2 class="facilities__head">Our Advantages</h2>`;

const advantagesDiv = document.createElement("div");
advantagesDiv.classList.add("facilities__card");


advantages.forEach((adv) => {
    const advantageDiv = document.createElement("div");
    advantageDiv.classList.add("facility__card");
    advantageDiv.innerHTML = `
    <img class="facility__img" src="${adv.icon}" alt="icon" >
    <div class="facility__card--body">
    <h2 class="facility__head">${adv.headline}</h2>
    <p class="para--style">${adv.text}</p>`
    advantagesDiv.append(advantageDiv)
  })

advantagesElm.append(advantagesDiv)

