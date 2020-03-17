const newArrivalItem = [
  {
    imageurl: 'images/mobile1.png',
    alttext: 'mobile1',
    titletext: 'I Phone',
    cart: [
      {
        cartIcon: 'images/cart.png',
        whishlist: 'images/whishlist.png'
      }
    ]
  },
  {
    imageurl: 'images/mobile1.png',
    alttext: 'Moto G',
    titletext: 'I Phone',
    cart: [
      {
        cartIcon: 'images/cart.png',
        whishlist: 'images/whishlist.png'
      }
    ]
  },
  {
    imageurl: 'images/mobile1.png',
    alttext: 'Moto G',
    titletext: 'I Phone',
    cart: [
      {
        cartIcon: 'images/cart.png',
        whishlist: 'images/whishlist.png'
      }
    ]
  },
  {
    imageurl: 'images/mobile2.png',
    alttext: 'Moto G',
    titletext: '',
    cart: []
  }
]

const bestsalesItem = [
  {
    imageurl: 'images/mobile1.png',
    alttext: 'IPhone 6s',
    titletext: 'IPhone 6s',
    cartIcon: 'images/cart.png',
    rating: 'images/rating.png'
  },
  {
    imageurl: 'images/mobile1.png',
    alttext: 'IPhone 6s',
    titletext: 'IPhone 6s',
    cartIcon: 'images/cart.png',
    rating: 'images/rating.png'
  },
  {
    imageurl: 'images/mobile1.png',
    alttext: 'IPhone 6s',
    titletext: 'IPhone 6s',
    cartIcon: 'images/cart.png',
    rating: 'images/rating.png'
  }
]

const userreviewItems = [
  {
    imageurl: 'images/mobile1.png',
    alttext: 'IPhone 6s',
    reviewcomments: 'Very good Performance, look and feels ae good',
    reviewlinkurl:'www.google.com'
   },
   {
    imageurl: 'images/mobile1.png',
    alttext: 'IPhone 6s',
    reviewcomments: 'Very good Performance, look and feels ae good',
    reviewlinkurl:'www.google.com'
   },
   {
    imageurl: 'images/mobile1.png',
    alttext: 'IPhone 6s',
    reviewcomments: 'Very good Performance, look and feels ae good',
    reviewlinkurl:'www.google.com'
   }
]

function newArrivalTemplate(newItem) {
  return `<aside>
    <div>
     <img src=${newItem.imageurl} alt=${newItem.alttext} />
     <h2>${newItem.titletext}</h2>
          ${newItem.cart.length ? 
         ` <div class='actionContainer'>
            <img src=${newItem.cart[0].cartIcon} />
            <img src=${newItem.cart[0].whishlist} /> 
          </div>`:
           `<a href='#' class='btn'>Notify Me</a>`
        }
      </div>
     </div>
    </aside>`
}

function bestSalesTemplate(newItem) {
  return `<aside>
    <div>
     <img src=${newItem.imageurl} alt=${newItem.alttext} />
     <h2>${newItem.titletext}</h2>
     <img src=${newItem.rating} />
     <div><img src='images/cart.png' /> Add to cart<div>
     </div>
    </aside>`
}

function userreviewTemplate(newItem) {
  return `<aside>
    <div>
     <img src=${newItem.imageurl} alt=${newItem.alttext} />
     <div><a href=${newItem.reviewlinkurl}>${newItem.reviewcomments}</a></div>
     </div>
    </aside>`
}

let pageId = document.getElementById("page");
let newArrivalItemClass = pageId.getElementsByClassName("newArriavalItem")[0];
let bestsalesItemClass = pageId.getElementsByClassName("bestsaleItems")[0]
let userreviewClass = pageId.getElementsByClassName("userreviewItems")[0]


let newArrivalMobile = newArrivalItem.map(newArrivalTemplate).join('');
newArrivalItemClass.innerHTML = newArrivalMobile;

let bestSalesMobile = bestsalesItem.map(bestSalesTemplate).join('');
bestsalesItemClass.innerHTML = bestSalesMobile;

let userreviewMobile = userreviewItems.map(userreviewTemplate).join('');
userreviewClass.innerHTML = userreviewMobile
