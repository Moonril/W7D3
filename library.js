const getBooks = function (){
    const booksURL = 'https://striveschool-api.herokuapp.com/books'

    fetch(booksURL)
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error ('not ok')
        }
    })
    .then((data) => { 

        //data è un array di oggetti
        const cols = document.querySelectorAll('.col')
        
        cols.forEach((col, index) => {
            if (data[index]) {
                const bookCover = data[index].img
                const bookTitle = data[index].title
                const bookPrice = data[index].price
                
                col.innerHTML += `
                <div class="card">
                    <img src=${bookCover} class="card-img-top w-100" alt="book cover" height="400">
                    <div class="card-body text-center">
                        <h5 class="card-title">${bookTitle}</h5>
                        <p class="card-text"><span>${bookPrice}</span>€</p>
                        <a href="#" class="btn btn-primary">Compra</a>
                    </div>
                </div>
                `
            }
        });


    })
    .catch((err) => {
        console.log('errore', err)
    })



}

getBooks()

// premendo compra => salva titolo bookTitle in un carrello
// salva contenuto del carrello in local storage
