// Select the container
const content = document.getElementById('content');

// Create section element
const homeSection = document.createElement('section');
homeSection.classList.add('home');
homeSection.id = 'home';

// Create text container
const homeText = document.createElement('div');
homeText.classList.add('home-text');

// Create heading
const heading = document.createElement('h1');
heading.innerHTML = `Your <span>Comfort</span> <br> Is Our <span>Happiness</span>`;

// Create paragraph
const para = document.createElement('p');
para.textContent = 'We create an environment where you can truly relax and be yourself';

// Create button
const btn = document.createElement('a');
btn.href = '#shop';
btn.classList.add('btn');
btn.textContent = 'Shop Now';

// Append everything together
homeText.appendChild(heading);
homeText.appendChild(para);
homeText.appendChild(btn);
homeSection.appendChild(homeText);
content.appendChild(homeSection);
