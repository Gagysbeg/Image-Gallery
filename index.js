let image_container = document.querySelector('.image_container');
fetch('data.json')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        image_container.innerHTML +=
       ` <div class="img">
            <img src="${item.path}" alt="${item.title}">
         
        </div>`
})
})
.catch(error => {
    console.log(error);
})