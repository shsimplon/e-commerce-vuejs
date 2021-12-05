// data
const products = [
  {
    id: 1,
    description: "robe",
    price: 12,
    img: "assets/img/download-1.jpg",
  },
  {
    id: 2,
    description: "robe",
    price: 20,
    img: "assets/img/download-2.jpg",
  },
  {
    id: 3,
    description: "robe",
    price: 5,
    img: "assets/img/download-3.jpg",
  },
  {
    id: 4,
    description: "robe",
    price: 8,
    img: "assets/img/download.jpg",
  },
  {
    id: 5,
    description: "robe",
    price: 3,
    img: "assets/img/images.jpg",
  },
  {
    id: 6,
    description: "robe",
    price: 65,
    img: "assets/img/shopping-1.png",
  },
  {
    id: 7,
    description: "robe",
    price: 25,
    img: "assets/img/shopping-2.png",
  },
  {
    id: 8,
    description: "robe",
    price: 28,
    img: "assets/img/shopping.png",
  },
  {
    id: 9,
    description: "robe",
    price: 4,
    img: "assets/img/images-copie.jpg",
  },
  {
    id: 10,
    description: "robe",
    price: 29,
    img: "assets/img/images-1-copie.jpg",
  },
  {
    id: 11,
    description: "robe",
    price: 87,
    img: "assets/img/shopping.png",
  },
  {
    id: 12,
    description: "robe",
    price: 6,
    img: "assets/img/shopping-1.png",
  },
];

// 1. Define route components.
const Home = {
  template: "#home",
  name: "HOME",
  data: () => {
    return {
      products,
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get("like"));
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
    },
    cartTotalAmount() {
      let total = 0;
      for (let i in this.cart) {
        total = total + this.cart[i].quantity * this.cart[i].price;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let i in this.cart) {
        itemTotal = itemTotal + this.cart[i].quantity;
      }
      return itemTotal;
    },
  },
  methods: {
    setLikeCookie() {
      document.addEventListener("input", () => {
        setTimeout(() => {
          $cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
    },
    addToCart(product) {
      //chech if already in array

      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1,
      });
      console.log(quantity);
    },
    cartPlusOne(product) {
      product.quantity = product.quantity + 1;
    },
    cartDeleteOne(product, id) {
      if (product.quantity == 1) {
        this.cartdelete(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    cartdelete(id) {
      this.$delete(this.cart, id);
    },
  },

  mounted: () => {
    this.getLikeCookie;
  },
};

const UserSettings = {
  template: "<h1> User Settings</h1>",
  name: " UserSettings",
};

const WishLists = {
  template: "<h1> Wish Lists</h1>",
  name: " WishLists",
};
const ShoppingCart = {
  template: "<h1>Shopping Cart</h1>",
  name: "ShoppingCart",
};
//2. Define some routes
const routes = [
  { path: "/", component: Home },
  { path: "/User-Settings", component: UserSettings },
  { path: "/Wish-Lists", component: WishLists },

  { path: "/Shopping-Cart", component: ShoppingCart },
];

// 3. Create the router instance and pass the `routes` option

const router = new VueRouter({
  routes,
});

/****/ //************************ */ */
//INSANCE VUE
// var app = new Vue({
//   el: "#app",
//   router,
// });
const app = new Vue({
  router,
}).$mount("#app");
