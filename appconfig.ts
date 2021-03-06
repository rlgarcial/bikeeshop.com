/*
  Global constants witch could be used in app
 */

export const API_GLOBALS = {
  url: 'https://infodb.iutmetz.univ-lorraine.fr/~cabreras1u/api.bikeeshop.com/',
  source_urn: {
      category: 'categories.php/categories',
      description_order: 'description_orders.php/description_orders',
      orders: 'orders.php/orders',
      products: 'products.php/products',
      users: 'users.php/users'
  }
};


export const API_GEO_FR = {
  url: 'https://geo.api.gouv.fr',
  source_urn: {
    regions: 'regions',
    departements: 'departements',
    communes: 'communes'
  }
};

export const APP_CURRENCIES = {
  dollar: '$',
  euro: '€'
};
