var elHeroTitle = document.querySelector(".js-hero-title");
var elHeroTopLeaf = document.querySelector(".js-hero-top-leaf");
var elHeroMountains = document.querySelector(".js-hero-mountains");
var elHeroLeftBottomImg = document.querySelector(".js-hero-left-bottom-island");
var elHeroRightBottomImg = document.querySelector(".js-hero-right-bottom-island");
var elInformationSection = document.querySelector(".js-information-section")

window.addEventListener("scroll", function() {

  if(window.innerHeight >= 864) {
    elInformationSection.style.top = -110 + "px";
  }else {
    elInformationSection.style.top = 0;
  }

  var scrollValue = window.scrollY;
  console.log(scrollValue);
  document.body.style.overflowX = "hidden";
  elHeroTitle.style.marginTop = scrollValue * 1.5 + "px";

  elHeroTopLeaf.style.top = scrollValue * -1.5 + "px";
  elHeroTopLeaf.style.left = scrollValue * 1.5 + "px";

  elHeroMountains.style.top = scrollValue * 1 + "px";

  elHeroLeftBottomImg.style.top = scrollValue * 0.7 + "px";
  elHeroLeftBottomImg.style.left = scrollValue * -1.5 + "px";

  elHeroRightBottomImg.style.top = scrollValue * 0.8 + "px";
  elHeroRightBottomImg.style.left = scrollValue * 1 + "px";

  if(scrollValue > 700) {
    elHeroTitle.style.marginTop = 0;
    elHeroTopLeaf.style.top = 0;
    elHeroTopLeaf.style.left = 0;
    elHeroMountains.style.top = 0;
    elHeroLeftBottomImg.style.top = 0;
    elHeroLeftBottomImg.style.left = 0;
    elHeroRightBottomImg.style.top = 0;
    elHeroRightBottomImg.style.top = 0;
  }

  if (scrollValue > 1200) {
    elInformationSection.style.top = 0;
  }


});