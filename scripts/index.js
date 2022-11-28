'use strict';

const images = [
    { 'id': '1', 'url': './images/assassins-creed.jpg' },
    { 'id': '1', 'url': './images/call-of-duty.jpg' },
    { 'id': '1', 'url': './images/dead-space.jpg' },
    { 'id': '1', 'url': './images/final-fantasy.jpg' },
    { 'id': '1', 'url': './images/god-of-war.jpg' },
    { 'id': '1', 'url': './images/The-Last-of-Us.jpg' },
];

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'/>
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector("#next").addEventListener("click", next);