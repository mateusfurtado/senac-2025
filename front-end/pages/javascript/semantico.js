var right = document.querySelector('.right')

for(let i = 0;i< 10; i++){
    right.innerHTML +=`
            <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvz-cKC0Yw7ZQEzUSLGby_FrWt6od_-7oxQ&s" alt="" width="200" height="auto">
                <h3>Titulo da imagem</h3>
            </div>
    `
}