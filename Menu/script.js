const menu = [
    {
        id: 1,
        titlery: "Breakfast",
        pri: "Buttermilk Pancakes",
        categoce: 15.99,
        img: "image1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Lunch",
        price: 15.99,
        img: "image2.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "Shakes",
        price: 6.99,
        img: "image3.jpeg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Country Delight",
        category: "Breakfast",
        price: 20.99,
        img: "image4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "Lunch",
        price: 22.99,
        img: "image5.jpeg",
        desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "Shakes",
        price: 18.99,
        img: "image6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "Breakfast",
        price: 8.99,
        img: "image7.jpeg",
        desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "American Classic",
        category: "Lunch",
        price: 12.99,
        img: "image8.jpeg",
        desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        category: "Shakes",
        price: 16.99,
        img: "image9.jpeg",
        desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Bison Steak",
        category: "Dinner",
        price: 22.99,
        img: "image10.jpeg",
        desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector('.container');
const btnContainer = document.querySelector('.Buttons');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `<div class="box1 ${item.category}">
            <img src=${item.img} alt=${item.title}>
            <div class="info">
                <h3>${item.title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $${item.price}</h3>
                <hr class="hr-info">
                <p class="p-info">${item.desc}</p>
            </div>
        </div>`;
    }).join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All']);
    const categoryBtns = categories.map(category => {
        return `<button class="Btn" data-category=${category}>${category}</button>`;
    }).join('');
    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll('.Btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            const menuCategory = menu.filter(menuItem => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'All') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}


