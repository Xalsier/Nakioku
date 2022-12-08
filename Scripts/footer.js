const contactParagraph = document.createElement('p');
contactParagraph.textContent = 'Contact';

const twitterButton = document.createElement('button');
twitterButton.innerHTML = '<img src="https://abs.twimg.com/favicons/favicon.ico" alt="Twitter logo"/>';
const twitterLink = document.createElement('a');
twitterLink.href = 'https://twitter.com/Xalsier';
twitterLink.appendChild(twitterButton);

const instagramButton = document.createElement('button');
instagramButton.textContent = 'Instagram';
const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/xalsier';
instagramLink.appendChild(instagramButton);

const paragraph = document.createElement('p');
paragraph.textContent = 'Please let me know if something is not working!';

document.body.appendChild(contactParagraph);
document.body.appendChild(twitterLink);
document.body.appendChild(instagramLink);
document.body.appendChild(paragraph);
