/* =========================================================
   POOVENDHAN PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav-links a");


if (menu && nav) {

  menu.addEventListener("click", () => {

    const isOpen =
      nav.classList.toggle("menu-open");

    menu.setAttribute(
      "aria-expanded",
      isOpen
    );

    menu.setAttribute(
      "aria-label",
      isOpen
        ? "Close menu"
        : "Open menu"
    );

  });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if (nav) {
      nav.classList.remove("menu-open");
    }

    if (menu) {

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

      menu.setAttribute(
        "aria-label",
        "Open menu"
      );

    }

  });

});


/* =========================================================
   VIDEO LAZY LOADING
   ========================================================= */

const videos =
  document.querySelectorAll("video");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.setAttribute(
              "preload",
              "metadata"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        rootMargin: "200px"
      }

    );


  videos.forEach(video => {

    observer.observe(video);

  });

}


/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */

const sections =
  document.querySelectorAll("section[id]");


const navigationLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


if ("IntersectionObserver" in window) {

  const sectionObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const currentId =
              entry.target.getAttribute("id");


            navigationLinks.forEach(link => {

              link.classList.remove(
                "active"
              );


              const href =
                link.getAttribute("href");


              if (
                href ===
                `#${currentId}`
              ) {

                link.classList.add(
                  "active"
                );

              }

            });

          }

        });

      },

      {
        rootMargin:
          "-35% 0px -55% 0px"
      }

    );


  sections.forEach(section => {

    sectionObserver.observe(
      section
    );

  });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
  document.querySelectorAll(
    ".section, .project-card, .skill-grid article, .video-card, .certificate-card, .timeline > div"
  );


revealElements.forEach(element => {

  element.classList.add(
    "reveal"
  );

});


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "show"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.08
      }

    );


  revealElements.forEach(element => {

    revealObserver.observe(
      element
    );

  });

}


/* =========================================================
   PROJECT / CERTIFICATE IMAGE FALLBACK
   ========================================================= */

const images =
  document.querySelectorAll("img");


images.forEach(image => {

  image.addEventListener(
    "error",
    () => {

      image.style.opacity = "0.35";

      image.alt =
        "Image unavailable";

    }
  );

});


/* =========================================================
   CERTIFICATE CARD HOVER
   ========================================================= */

const certificateCards =
  document.querySelectorAll(
    ".certificate-card"
  );


certificateCards.forEach(card => {

  card.addEventListener(
    "mouseenter",
    () => {

      card.style.zIndex = "5";

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.zIndex = "1";

    }
  );

});


/* =========================================================
   VIDEO PLAY MANAGEMENT
   ========================================================= */

videos.forEach(video => {

  video.addEventListener(
    "play",
    () => {

      videos.forEach(otherVideo => {

        if (
          otherVideo !== video &&
          !otherVideo.paused
        ) {

          otherVideo.pause();

        }

      });

    }
  );

});


/* =========================================================
   BACK TO TOP ON LOGO CLICK
   ========================================================= */

const brand =
  document.querySelector(".brand");


if (brand) {

  brand.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElements =
  document.querySelectorAll(
    ".footer-year"
  );


yearElements.forEach(element => {

  element.textContent =
    new Date().getFullYear();

});


/* =========================================================
   PAGE LOADED
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document.body.classList.add(
      "page-loaded"
    );

  }
);
