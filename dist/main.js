var albumList = [
  { albumName: 'Dark Side of the Moon',
    albumTag:  'darkside',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
  },
  { albumName: 'Ho Ho Hee Hee',
    albumTag:  'hoho',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
  },
  { albumName: 'The Grand Wazoo',
    albumTag:  'wazoo',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
  },
  { albumName: 'Dark Side of the Moon',
    albumTag:  'wowzers',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
  },
  { albumName: 'Ho Ho Hee Hee',
    albumTag:  'shrimp',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
  },
  { albumName: 'The Grand Wazoo',
    albumTag:  'blurgh',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
  }
];
var $albumBox = $('.album-list');
console.log(albumList);

albumList.forEach(function(album,i){
  var totalInsert = '<a class="album-button" href="#' + album.albumTag + '"><img src="' + album.photos[0] + '">' + album.albumName + '</a>';
  console.log(totalInsert);
  $albumBox.append(totalInsert);
});

window.addEventListener('hashchange',function(){
    $albumBox.addClass('side-albums');
    $('.album-button').addClass('side-bar');
    $('img').addClass('hide');
    currentAlbumName = location.hash.slice(1);
    console.log(location.hash);
});
