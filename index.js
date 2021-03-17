// initialisation d'un tableau vide pour stocker les valeur du clique " ajouter au panier"
let tableCart = [];


// Au clique on push l'objet "contentCar" dans le tableau
$('.add-to-cart').click(function() {
    let $this = $(this);
    let id = $this.attr('data-id');
    let name = $this.attr('data-name');
    let price = $this.attr('data-price');
    let qte = parseInt($this.attr('data-qte'));

    let newArticle = true;

    tableCart.forEach(function(element) {
      // si l'article est déjà présent, on incrémente la quantité
      if (element.id == id) {
          newArticle = false;
          element.qte += qte;
          console.log('qte modifier')
      }
    });

      if (newArticle) {
        tableCart.push({
          id: id,
          name: name,
          price: price,
          qte: qte,
        });
    console.log('creation ok')
    }
})

function createParamsModal() {
  let articles = ''
  let qte = 0
  let price = 0
  
    tableCart.forEach((element) => {
      articles = '<p>'+element.name+'</p>'
      $('#article-modal').append(articles);
      let itemPrice = element.price.replace(',', '.') * 1000;
      subTotal = (itemPrice * element.qte) / 1000
      price = '<p>'+subTotal+'</p>'
      $('#price-modal').append(price);
      qte = '<p>'+element.qte+'</p>'
      $('#qte-modal').append(qte);
    })
    
}
$('.buy').click(() => {
  createParamsModal()
})  





