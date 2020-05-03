var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
  var regex;
  $scope.escapeRegExp = function(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  $scope.gridItems = [
    {
      img: './assets/ondernemers/ilias.jpg',
      headerText: 'Ilias Delicatesse',
      blurbText: 'Maak kennis met het ruime assortiment aan oa. olijven, tapas, noten, chocolade, zuidvruchten van Ilias Delicatessen.',
      linkUrl: 'https://www.iliasdeli.nl/',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/lelyfoto.jpg',
      headerText: 'LelyFoto',
      blurbText: 'Een snelle foto bij uw (voor)deur in deze corona tijden? Voor slechts €12,50 komt Lelufoto langs!',
      linkUrl: 'https://www.lelyfoto.nl/',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/janwillem.jpg',
      headerText: 'Jan Willem Nije',
      blurbText: 'Fysieke therapie met massage, shiatsu of Jin Shin Jyutsu',
      linkUrl: 'http://janwillemnije.nl/',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/scubanova.jpeg',
      headerText: 'Scuba nova duikschool',
      blurbText: 'De PADI duikschool en winkel met duikspullen ',
      linkUrl: 'https://www.scubanova.nl/',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/Joia-ilona.jpeg',
      headerText: 'Joia-ilona',
      blurbText: 'JOIA brengt culturen, materialen en kleuren uit verschillende werelden samen. Een traditionele stijl met een moderne twist.',
      linkUrl: 'https://www.joiailona.nl/',
      linkLocation: 'https://www.google.com/maps/dir/52.5117462,5.4984959/Cederhof+15,+8172+DV+Vaassen/@52.4168315,5.4847281,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47c7c66b8513d8d1:0x41eb584b87b5086c!2m2!1d5.9530145!2d52.280177'
    },
    {
      img: './assets/ondernemers/thereadshop.jpg',
      headerText: 'The Readshop',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, blanditiis autem, ex quidem hic unde dolorum ',
      linkUrl: 'https://www.nu.nl',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/chiba.jpeg',
      headerText: 'Chiba kleding',
      blurbText: 'Modemerk Chiba Clothing, gevestigd in Lelystad',
      linkUrl: 'https://www.nu.nl',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/konditorei-noor.jpg',
      headerText: 'Konditorei Noor',
      blurbText: 'Konditorie Noor is een gezellige nieuwe eetgelegenheid, een tafel vol heerlijke zoete en hartige hapjes',
      linkUrl: 'https://www.konditoreinoor.nl/',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/ptfood.jpeg',
      headerText: 'PTFood',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit unde!',
      linkUrl: 'https://www.nu.nl',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/sindjaja.jpg',
      headerText: 'Toko Sindjaja',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, sequi. Tempore delectus quas illum ex!',
      linkUrl: 'http://www.toko-sindjaja.nl/',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/tropica.jpg',
      headerText: 'Dierenspeciaalzaak Tropica',
      blurbText: 'DSZ Tropica Lelystad de huisdierdeskundige. Al 30 jaar een begrip in Lelystad.',
      linkUrl: 'http://tropicalelystad.nl/',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/ukkies.jpg',
      headerText: 'Ukkies Place',
      blurbText: 'Baby & Kinderkleding en Accessoires shoppen doe je bij Ukkiesplace.',
      linkUrl: 'https://www.ukkiesplace.nl/',
      linkLocation: '#'
    }
  ];
  $scope.search = '';
  $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
  });
  $scope.filterBySearch = function(gridItem) {
      if (!$scope.search) return true;
      return regex.test(gridItem.headerText + " " + gridItem.blurbText);
  };
  $scope.toggleBlurb = function($event) {
    console.log($event);
  };
});
