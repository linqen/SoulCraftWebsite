/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  // var navbarShrink = function () {
  //     const navbarCollapsible = document.body.querySelector('#mainNav');
  //     if (!navbarCollapsible) {
  //         return;
  //     }
  //     if (window.scrollY === 0) {
  //         navbarCollapsible.classList.remove('navbar-shrink')
  //     } else {
  //         navbarCollapsible.classList.add('navbar-shrink')
  //     }

  // };

  // Shrink the navbar
  // navbarShrink();

  // Shrink the navbar when page is scrolled
  // document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  const gradient = document.getElementById("gradient-title");
  let angle = 0;

  function changeGradient() {
    angle++;
    gradient.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,1) 9%, rgba(255,200,0,1) 100%)`;
    gradient.style.webkitBackgroundClip = "text";
    // gradient.style.webkitTextFillColor = "transparent";
    if (angle >= 360) {
      angle = 0;
    }

    requestAnimationFrame(changeGradient);
  }

  changeGradient();

  // Collapse responsive navbar when toggler is visible
  // const navbarToggler = document.body.querySelector('.navbar-toggler');
  // console.log(navbarToggler);
  // const responsiveNavItems = [].slice.call(
  //     document.querySelectorAll('#navbarResponsive .nav-link')
  // );
  // responsiveNavItems.map(function (responsiveNavItem) {
  //     responsiveNavItem.addEventListener('click', () => {
  //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
  //             navbarToggler.click();
  //         }
  //     });
  // });
});
