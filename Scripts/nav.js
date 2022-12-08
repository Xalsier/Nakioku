const navDiv = document.createElement('div');
navDiv.className = 'nav';

const nav = document.createElement('nav');
navDiv.appendChild(nav);

const ul = document.createElement('ul');
nav.appendChild(ul);

const items = ['Gallery', 'Music', 'Calendar', 'Roadmap'];

for (const item of items) {
    const li = document.createElement('li');
    ul.appendChild(li);

    const a = document.createElement('a');
    a.textContent = item;
    a.href = `Pages/${item.toLowerCase()}.html`;
    li.appendChild(a);
}

document.body.appendChild(navDiv);
