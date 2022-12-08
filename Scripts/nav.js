fetch('../navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    oldelem.innerHTML = text;
})
