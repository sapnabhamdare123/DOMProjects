const reviews = [
    {
        id: 1,
        name: "suhana singh",
        job: "creator",
        img: "image2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam optio soluta recusandae, eius reiciendis inventore minima ipsam culpa aliquam dicta"
    },
    {
        id: 2,
        name: "ridhika sharma",
        job: "web designer",
        img: "image.jpeg",
        text: "web designer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam optio soluta recusandae, eius reiciendis inventore minima ipsam"
    },
    {
        id: 3,
        name: "linima joshi",  
        job: "frontend developer",
        img: "images3.jpeg",
        text: "frontend developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam optio soluta recusandae, eius reiciendis inventore minima"
    },
    {
        id: 4,
        name: "ruhika sidhe",  
        job: "doctor",
        img: "images4.jpeg",
        text: "doctor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam optio soluta recusandae, eius reiciendis inventore minima ipsam"
    },
    {
        id: 5,
        name: "naina kadu",  
        job: "dancer",
        img: "images5.jpeg",
        text: "dancer naina Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam optio soluta recusandae, eius reiciendis inventore minima ipsam"
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(index) {
    const item = reviews[index];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem>reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click',function () {
    currentItem--;
    if (currentItem<0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
