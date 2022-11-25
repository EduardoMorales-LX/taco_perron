const seccionesPagina = new fullpage("#fullpage", {
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: "easeInOutCubic",
    scrollingSpeed: 700,
    css3: true,
    easingcss3: "ease-out",
    loopBottom: false,
    anchors: ["productos", "direcciones", "formulario"],
    menu: "#menu",
    sectionsColor: ["#add2ca", "#5ea2a3", "#478a90"],
    verticalCentered: true,
    controlArrows: false,
    slidesNavigation: true,
    // afterLoad: function (origin, destination) {
    //     if (destination.anchor == "contacto") {
    //         document.querySelector(".footer h2").style.opacity = 1;
    //     }
    // },
});
