let mealTypes = [
  {
    title: 'Soups',
    query: 'soups',
    icon: 'ion-spoon',
    index: 0,
    meals: [
      {
        name: 'Chicken Tortilla soup',
        price: 2,
        prepTime: 1,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/328329.jpg'
      },
      {
        name: 'Caldo de Res (beef soup)',
        price: 4,
        prepTime: 5,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/3445336.jpg'
      },
      {
        name: 'Vegetarian Tortilla stew',
        price: 3,
        prepTime: 2,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/328329.jpg'
      },
      {
        name: 'Chicken Taco soup',
        price: 3,
        prepTime: 3,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/3706561.jpg'
      }
    ]
  },
  {
    title: 'Main Courses',
    query: 'mains',
    icon: 'ion-fork',
    index: 1,
    meals: [
      {
        name: 'Enchiladas Suizas',
        price: 10,
        prepTime: 7,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/374569.jpg'
      },
      {
        name: 'Grilled Fish Tacos with Chipotle-Lime Dressing',
        price: 10,
        prepTime: 7,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/1006044.jpg'
      },
      {
        name: 'Taco Salad I',
        price: 8,
        prepTime: 5,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/38529.jpg'
      },
      {
        name: 'Fabulous Fajitas',
        price: 9,
        prepTime: 10,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/656089.jpg'
      },
      {
        name: 'Chili Rellenos Casserole',
        price: 10,
        prepTime: 12,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/829340.jpg'
      },
      {
        name: 'Bean Quesadillas',
        price: 10,
        prepTime: 10,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/634160.jpg'
      },
      {
        name: 'Black Bean and Corn Quesadillas',
        price: 11,
        prepTime: 10,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/1112216.jpg'
      },
      {
        name: 'Addictive Sweet Potato Burritos',
        price: 13,
        prepTime: 14,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/269632.jpg'
      },
      {
        name: 'Delicious Black Bean Burritos',
        price: 14,
        prepTime: 12,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/641449.jpg'
      }
    ]
  },
  {
    title: 'Drinks and Desserts',
    query: 'drinks',
    icon: 'ion-android-bar',
    index: 2,
    meals: [
      {
        name: 'Water',
        price: 2,
        prepTime: 1,
        url: 'https://www.przystanek-eko.pl/wp-content/uploads/2015/12/woda-w-szklance.jpg'
      },
      {
        name: 'Pepsi Cola',
        price: 3,
        prepTime: 1,
        url: 'http://kfc.cz/assets/uploads/puszka-pepsi.jpg'
      },
      {
        name: 'Mirinda',
        price: 3,
        prepTime: 1,
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRu50yfQSJrrrZdE49DpMe6_GE53-A0u_m_20fnVDdwRzDq9DRb1g'
      },
      {
        name: 'Mountain Dew',
        price: 3,
        prepTime: 1,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fWWehpVzb_mxJ0gcG4yrY91dvJR9FRis42REVT-IKcvpQN8JWg'
      },
      {
        name: 'Tea',
        price: 2.5,
        prepTime: 2,
        url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdKoTrvhrOElzKya_RHuTYOyUVKUf3TmFEo7vl0rQAMbcdTDewWQ'
      },
      {
        name: 'Latte',
        price: 3.5,
        prepTime: 3,
        url: 'http://monkeysee.com/wp-content/uploads/2016/05/msl_k_jdubois_gsuekoff_latte_03-21-087.jpg'
      },
      {
        name: 'Margarita',
        price: 5,
        prepTime: 4,
        url: 'http://images.media-allrecipes.com/images/55527.jpg'
      },
      {
        name: 'Strawberry Margarita',
        price: 5.5,
        prepTime: 4,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/1006403.jpg'
      },
      {
        name: 'Watermelon Agua Fresca',
        price: 5,
        prepTime: 4,
        url: 'http://www.wholefoodsmarket.com/sites/default/files/styles/header_recipe/public/media/293-1_0.jpg'
      },
      {
        name: 'Agua Fresca de Pepino',
        price: 5,
        prepTime: 4,
        url: 'http://images-gmi-pmc.edge-generalmills.com/b2290fd4-e1db-4789-8772-c88845fa2a14.jpg'
      },
      {
        name: 'Salty Chihuahua',
        price: 5,
        prepTime: 4,
        url: 'http://whiteonricecouple.com/recipe/images/2009/01/grapefruit-cocktail-9-550x365.jpg'
      },
      {
        name: 'Paloma',
        price: 5,
        prepTime: 4,
        url: 'http://www.tastecocktails.com/wp-content/uploads/2016/04/paloma-feature.png'
      },
      {
        name: 'Churros',
        price: 3,
        prepTime: 2,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/392145.jpg'
      },
      {
        name: 'Sopapilla Cheesecake',
        price: 4,
        prepTime: 2,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/329129.jpg'
      },
      {
        name: 'Marranitos',
        price: 3,
        prepTime: 2,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/72915.jpg'
      },
      {
        name: 'Avocado Lime Cheesecake',
        price: 5,
        prepTime: 2,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/437356.jpg'
      },
      {
        name: 'Apple Enchilada Dessert',
        price: 4,
        prepTime: 4,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/456621.jpg'
      },
      {
        name: 'Polvorones de Canele (Cinnamon Cookies)',
        price: 2.5,
        prepTime: 1,
        url: 'http://images.media-allrecipes.com/userphotos/560x315/351503.jpg'
      }
    ]
  }
]

export default mealTypes
