let entryPoint = document.getElementById('main');

let images = 
    ['https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
    'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg'];

//Create checkbox elements
function checkboxGen(images, amount) {
    for(let i = 0; i < amount; i++){

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('imageCheckbox', 'shadow-sm', 'lazyload');
        checkbox.setAttribute('aria-label', 'checkbox with an image');
        //url to use for our lazyloader, there is a uri for the svg on top of the image
        checkbox.dataset.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23ff0000' id='Capa_1' width='800px' height='800px' viewBox='0 0 449.438 449.438' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M0,109.969v52.594h38.25v-52.594c0-39.55,36.462-71.719,81.281-71.719h52.594V0h-52.594C53.617,0,0,49.333,0,109.969z'/%3E%3Cpath d='M38.25,329.906v-43.031H0v43.031c0,63.677,55.854,119.531,119.531,119.531h52.594v-38.25h-52.594 C76.988,411.188,38.25,372.44,38.25,329.906z'/%3E%3Cpath d='M411.188,329.906c0,44.819-32.168,81.281-71.719,81.281h-52.594v38.25h52.594c60.636,0,109.969-53.617,109.969-119.531 v-43.031h-38.25V329.906z'/%3E%3Cpath d='M339.469,0h-52.594v38.25h52.594c42.228,0,71.719,29.491,71.719,71.719v52.594h38.25v-52.594 C449.438,46.254,403.193,0,339.469,0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), url(${images[i % (images.length)]})`;
        entryPoint.append(checkbox)
    }
}

//lazy loader
function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {

        entry.target.style.backgroundImage = entry.target.dataset.backgroundImage;
        entry.target.classList.remove('lazyload');

        observer.unobserve(entry.target);
        }
    });
}

checkboxGen(images, 20);

const checkboxes = document.querySelectorAll('.lazyload');
const observer = new IntersectionObserver(handleIntersection);
checkboxes.forEach(image => observer.observe(image));