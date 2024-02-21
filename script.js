const addButton = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//////////////////////// Создание списка дел /////////////////////////////////////////////
addButton.addEventListener('click', () => {
    if (taskInput.value) {
        const taskTemplate = document.querySelector('#taskTemplate').content;
        const taskList = document.getElementById('taskList');
        const listElement = taskTemplate.querySelector('.listElement').cloneNode(true);
        console.log(listElement);
        listElement.querySelector('.taskText').textContent = taskInput.value;
        taskList.append(listElement);
        taskInput.value = '';


        const delBtn = listElement.querySelector('.deleteTaskBtn');
        delBtn.addEventListener('click', () => {
            const listElement = delBtn.closest('.listElement');
            listElement.remove();
        })


    }
});

////////////////////////// Карточки продуктов в интернет-магазине //////////////////////////

const cards = [
    {
        title: 'Наушники',
        price: 10000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae quas veniam harum dolorem labore? Unde, ut optio repellendus atque aperiam voluptatem totam illum labore? Repudiandae id praesentium veritatis esse.',
        url: 'https://i.pinimg.com/564x/66/6a/fe/666afe391c4ecfb65314a2f2b03750bb.jpg'
    },
    {
        title: 'Телефон',
        price: 32000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae quas veniam harum dolorem labore? Unde, ut optio repellendus atque aperiam voluptatem totam illum labore? Repudiandae id praesentium veritatis esse.',
        url: 'https://i.pinimg.com/564x/21/f8/38/21f838ae4fa8e3688e404ad5625c0e74.jpg'
    },
    {
        title: 'Телевизор',
        price: 45000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae quas veniam harum dolorem labore? Unde, ut optio repellendus atque aperiam voluptatem totam illum labore? Repudiandae id praesentium veritatis esse.',
        url: 'https://i.pinimg.com/564x/8e/9d/b1/8e9db173340200cd3fabb400480f1954.jpg'
    },
    {
        title: 'Часы',
        price: 20000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae quas veniam harum dolorem labore? Unde, ut optio repellendus atque aperiam voluptatem totam illum labore? Repudiandae id praesentium veritatis esse.',
        url: 'https://i.pinimg.com/564x/4c/b2/da/4cb2daa8b7768da3432ea431a2c113d0.jpg'
    },
    {
        title: 'Наушники',
        price: 10000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae quas veniam harum dolorem labore? Unde, ut optio repellendus atque aperiam voluptatem totam illum labore? Repudiandae id praesentium veritatis esse.',
        url: 'https://i.pinimg.com/564x/66/6a/fe/666afe391c4ecfb65314a2f2b03750bb.jpg'
    },
    {
        title: 'Телефон',
        price: 32000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae quas veniam harum dolorem labore? Unde, ut optio repellendus atque aperiam voluptatem totam illum labore? Repudiandae id praesentium veritatis esse.',
        url: 'https://i.pinimg.com/564x/21/f8/38/21f838ae4fa8e3688e404ad5625c0e74.jpg'
    }

];

function addCards(arr) {
    arr.forEach((obj) => {
        const productTemplate = document.getElementById('productTemplate').content;
        const productContainer = document.querySelector('#productContainer');
        const productCard = productTemplate.querySelector('.productCard').cloneNode(true);
        productCard.querySelector('.productImage').src = obj.url;
        productCard.querySelector('.productName').textContent = obj.title;
        productCard.querySelector('.productPrice').textContent = `цена: ${obj.price}`;
        productCard.querySelector('.productDescription').textContent = obj.description;
        productContainer.append(productCard);
    }
    )
};
addCards(cards);

/////////////// Форма регистрации с динамическим добавлением полей //////////////////////////

// Надеюсь что правильно понял задание
const addFieldBtn = document.getElementById('addFieldBtn');
addFieldBtn.addEventListener('click', () => {
    const inputTemplate = document.getElementById('inputTemplate').content;
    const registrationForm = document.getElementById('registrationForm');

    const newInput = inputTemplate.getElementById('inputField').cloneNode(true);
    newInput.textContent = 'Введите ваш Email';
    registrationForm.prepend(newInput);
})

//////////////////////////// Галерея изображений с модальным окном ///////////////////////////

const images = [
    { src: './gallery_images/img1.jpeg' },
    { src: './gallery_images/img2.jpeg' },
    { src: './gallery_images/img3.jpeg' },
    { src: './gallery_images/img4.jpeg' }
];



const imageTemplate = document.getElementById('imageTemplate').content;
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

for (let img of images) {
    const image = imageTemplate.querySelector('.galleryImage').cloneNode(true);
    image.src = img.src;
    gallery.appendChild(image);

    image.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.style = "display: flex";
        // document.body.style.overflow = "hidden";
    });
}

modal.addEventListener("click", () => {
    modal.style = "display: none";
});

//////////////////////////////// Система комментариев для блога /////////////////////////

const commentTemplate = document.getElementById('commentTemplate').content;
const comments = document.getElementById('comments');
const submitComment = document.getElementById('submitComment');
const commentInput = document.getElementById('commentInput');

submitComment.addEventListener('click', () => {

    if (commentInput.value) {
        const comment = commentTemplate.querySelector('.comment').cloneNode(true);
        comment.querySelector('.commentText').textContent = commentInput.value;
        comments.append(comment);
        commentInput.value = '';
    }
})