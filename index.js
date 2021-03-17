// initialisation d'un tableau vide pour stocker les valeur du clique " ajouter au panier"
let tableCart = []

// Au clique on push l'objet "contentCar" dans le tableau
$('.add-to-cart').click(function() {
    let $this = $(this);
    let id = $this.attr('data-id')
    let name = $this.attr('data-name')
    let price = $this.attr('data-price')
    let qte = parseInt($this.attr('data-qte'))

    let newArticle = true

    tableCart.forEach(function(element) {
      // si l'article est déjà présent, on incrémente la quantité
      if (element.id == id) {
          newArticle = false;
          element.qte += qte;
          console.log('qte modifier')
      }
    })

      if (newArticle) {
        tableCart.push({
          id: id,
          name: name,
          price: price,
          qte: qte,
        })
    console.log('creation ok' ,tableCart)
    }

    // on stock le le tableau d'objet dans le sessionStorage
    sessionStorage.setItem('tableCart',JSON.stringify(tableCart))   
})

// remplissage de la modal pour quelle soit prete lors de l'apel 

function displayCart() {
  $('#article-modal').text('');
  $('#price-modal').text('');
  $('#qte-modal').text('');

  JSON.parse(sessionStorage.getItem('tableCart')).forEach((element) => {
    articles = '<p>'+element.name+'</p>'
    $('#article-modal').append(articles);
    let itemPrice = element.price.replace(',', '.') * 1000
    subTotal = (itemPrice * element.qte) / 1000
    price = '<p>'+subTotal+'</p>'
    $('#price-modal').append(price)
    qte = '<p>'+element.qte+'</p>'
    $('#qte-modal').append(qte)
  })
}

// appel de la modal au click 

$('.buy').click(function() {
 displayCart()
 console.log(JSON.parse(sessionStorage.getItem('tableCart')))
})

console.log(JSON.parse(sessionStorage.getItem('tableCart')))