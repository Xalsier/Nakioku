fetch('navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

  // Get the current URL
  var currentURL = location.pathname;

  // Get the list of navigation items
  var navItems = document.querySelectorAll('nav ul li a');

  // Loop through the items and add a class to the one that matches the current URL
  navItems.forEach(function(navItem) {
    if (navItem.getAttribute('href') === currentURL) {
      navItem.classList.add('active');
    }
  })
