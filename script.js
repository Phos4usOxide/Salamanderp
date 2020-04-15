/** Add any JavaScript you need to this file. */

//Product information
products = [
  //img is image name which can be different
  {
    name: 'Austria',
    price: 9.99,
    description: 'The flag of Austria, to bask in Beethoven\'s glory. Landscape orientation.',
    category: 'flag',
    img: 'austria'
  },
  {
    name: 'Canada',
    price: 9.99,
    description: 'The maple syrup, I mean flag, of Canada eh. Landscape orientation.',
    category: 'flag',
    img: 'canada'
  },
  {
    name: 'Cat',
    price: 11.99,
    description: 'A cute cat and a good getaway distraction. Portrait orientation.',
    category: 'animal',
    img: 'cat'
  },
  {
    name: 'Crab',
    price: 11.99,
    description: 'Snip snip! Watch out for the claws on this crab! Landscape orientation.',
    category: 'animal',
    img: 'crab'
  },
  {
    name: 'Czech Republic',
    price: 9.99,
    description: 'You Prague-ably don\'t want the Czechia flag but buy it anyway. Landscape orientation.',
    category: 'flag',
    img: 'czechrepublic'
  },
  {
    name: 'Denmark',
    price: 9.99,
    description: 'The flag of Denmark (No danishes incuded). Landscape orientation.',
    category: 'flag',
    img: 'denmark'
  },
  {
    name: 'Dog',
    price: 11.99,
    description: 'Great for when your kid wants a dog but you don\'t. Portrait orientation.',
    category: 'animal',
    img: 'dog'
  },
  {
    name: 'Finland',
    price: 9.99,
    description: 'The flag of Finland to Finnish your room\'s decor. Landscape orientation.',
    category: 'flag',
    img: 'finland'
  },
  {
    name: 'France',
    price: 9.99,
    description: 'Baguette over here and buy this flag of France. Landscape orientation.',
    category: 'flag',
    img: 'france'
  },
  {
    name: 'Germany',
    price: 9.99,
    description: 'The flag of Lederhosen, I mean Germany. Landscape orientation.',
    category: 'flag',
    img: 'germany'
  },
  {
    name: 'Goat',
    price: 10.99,
    description: 'The almighty goat overlord of doom and destruction. Square. Sizes: 24", 30", 36".',
    category: 'animal',
    img: 'goat'
  },
  {
    name: 'Graveyard',
    price: 11.99,
    description: 'BOO! Haha, it\'s just me. Or is it? Portrait orientation.',
    category: 'scenery',
    img: 'graveyard'
  },
  {
    name: 'Greece',
    price: 9.99,
    description: 'The flag of Greece to honour Zeus. Landscape orientation.',
    category: 'flag',
    img: 'greece'
  },
  {
    name: 'Hungary',
    price: 9.99,
    description: 'The flag of Hungary in case you\'re hungry. Landscape orientation.',
    category: 'flag',
    img: 'hungary'
  },
  {
    name: 'Iceland',
    price: 9.99,
    description: 'The flag of Iceland for your viking needs. Landscape orientation.',
    category: 'flag',
    img: 'iceland'
  },
  {
    name: 'Italy',
    price: 9.99,
    description: 'Mamma mia! Check out this flag of Italy! Landscape orientation.',
    category: 'flag',
    img: 'italy'
  },
  {
    name: 'Jamaica',
    price: 9.99,
    description: 'Yeahhh mannn, the Jamaican flag. Landscape orientation.',
    category: 'flag',
    img: 'jamaica'
  },
  {
    name: 'Nature',
    price: 9.99,
    description: 'Keep calm and respect nature, or else. Square. Sizes: 24", 30", 36".',
    category: 'misc',
    img: 'nature'
  },
  {
    name: 'Norway',
    price: 9.99,
    description: 'The flag of Norway for your inner viking. Landscape orientation.',
    category: 'flag',
    img: 'norway'
  },
  {
    name: 'Rainbow Cubes',
    price: 9.99,
    description: 'A glitch in the matrix? Nope, just rainbow cubes, but fancy nonetheless. Square. Sizes: 24", 30", 36".',
    category: 'misc',
    img: 'rainbowcubes'
  },
  {
    name: 'Rainbow Squares',
    price: 9.99,
    description: 'Have you ever wanted to feel the power of chroma? Square. Sizes: 24", 30", 36".',
    category: 'misc',
    img: 'rainbowsquares'
  },
  {
    name: 'Romania',
    price: 9.99,
    description: 'The flag of Romania, approved by Dracula himself! Landscape orientation.',
    category: 'flag',
    img: 'romania'
  },
  {
    name: 'Russia',
    price: 9.99,
    description: 'In mother Russia, flag buys you (but buy it anyway). Landscape orientation.',
    category: 'flag',
    img: 'russia'
  },
  {
    name: 'Summer',
    price: 11.99,
    description: 'A nice day in the park. Chirp chirp. Portrait orientation.',
    category: 'scenery',
    img: 'summer'
  },
  {
    name: 'Sweden',
    price: 9.99,
    description: 'The flag of Sweden (No meatballs incuded). Landscape orientation',
    category: 'flag',
    img: 'sweden'
  },
  {
    name: 'TicTacToe',
    price: 9.99,
    description: 'A representation of your sad life, never winning. But hey, at least you don\'t lose! Square. Sizes: 24", 30", 36".',
    category: 'misc',
    img: 'tictactoe'
  },
  {
    name: 'United Kingdom',
    price: 9.99,
    description: 'Oi Chap! That\'s the flag of the United Kingdom, that is! Landscape orientation.',
    category: 'flag',
    img: 'unitedkingdom'
  },
  {
    name: 'United States',
    price: 9.99,
    description: 'Oh say can you see, by the flag of USA. Landscape orientation.',
    category: 'flag',
    img: 'unitedstates'
  }
];

function clearGallery() {
  var gallery = document.getElementById('gallery');
  while (gallery.hasChildNodes()) {
    gallery.removeChild(gallery.childNodes[0]);
  }
}

function loadProducts(c) {
  clearGallery();
  var gallery = document.getElementById('gallery');
  var current = document.getElementById('current-category');
  current.innerHTML = 'There are no products with that category.';
  for (var i = 0; i < products.length; i++) {
    if (products[i].category == c || c == 'all') {
      var div = document.createElement('div');
      var img = document.createElement('img');
      var name = document.createElement('p');
      var price = document.createElement('p');
      var desc = document.createElement('p');
      div.setAttribute('class', 'gallery-item');
      img.src = 'images/' + products[i].img + '.jpg';
      img.alt = products[i].name;
      name.innerHTML = products[i].name;
      price.innerHTML = '$' + products[i].price;
      desc.innerHTML = products[i].description;
      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(price);
      div.appendChild(desc);
      gallery.appendChild(div);
      current.innerHTML = '- ' + c.toUpperCase() + ' POSTERS - ';
    }
  }
}

window.onload = function() {
  loadProducts('all');
};
