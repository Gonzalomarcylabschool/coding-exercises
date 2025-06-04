// database.js

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'coding_exercises'
  }
});

// TODO: Write a function to fetch products by price range
async function getProductsByPriceRange(minPrice, maxPrice) {
  // Your query goes here
}

(async () => {
  const products = await getProductsByPriceRange(10, 50);
  console.log(products);
})();


