let product =[
    {
       name:"dairymilk",
       price:120,
       instock:true
    },
    {
        name:"RedBull",
        price:150,
        instock:false
    },
    {
        name:"kitkat",
        price:100,
        instock:true
    }
]

console.log(product[0].name);

let products = {
    dairymilk: {
        name: "dairymilk",
        price: 120,
        instock: true
    },
    RedBull: {
        name: "RedBull",
        price: 150,
        instock: false
    },
    kitkat: {
        name: "kitkat",
        price: 100,
        instock: true
    }
};

console.log(products.RedBull.instock);