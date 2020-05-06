var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
  var regex;
  $scope.escapeRegExp = function(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  $scope.gridItems = [
    {
      img: './assets/ondernemers/sindjaja.jpg',
      headerText: 'Toko Sindjaja',
      blurbText: 'Overheerlijke gerechten en snacks van Toko Sindjaja',
      blurbFans: '6',
      blurbEmo: '🍜',
      blurbHashTags: '#Indonesisch #catering #snacks',
      linkUrl: 'http://www.toko-sindjaja.nl/',
      linkLocation: 'https://www.google.com/maps/place/Toko+Sindjaja/@52.5112565,5.4726759,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6268ceb4e88dd:0x29f9755c2c807892!8m2!3d52.5112565!4d5.4748646'
    },
    {
      img: './assets/ondernemers/ptfood.jpeg',
      headerText: 'PTFood',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit unde!',
      blurbFans: '4',
      blurbEmo: '🍲',
      blurbHashTags: '#bestellen #gerechten #FoodForLove',
      linkUrl: '#',
      linkLocation: '#'
    },
    {
      img: './assets/ondernemers/konditorei-noor.jpg',
      headerText: 'Konditorei Noor',
      blurbText: 'Konditorie Noor is een gezellige nieuwe eetgelegenheid, een tafel vol heerlijke zoete en hartige hapjes',
      blurbFans: '7',
      blurbEmo: '🍪',
      blurbHashTags: '#ontbijt #highttea #eetgelegenheid ',
      linkUrl: 'https://www.facebook.com/KonditoreiNoor/',
      linkLocation: 'https://www.google.com/maps/place/Konditorei+Noor/@52.5071383,5.4749333,17.92z/data=!4m5!3m4!1s0x47c62755b19c5cd1:0x74c66122b6594c4d!8m2!3d52.5072476!4d5.4756373'
    },
    {
      img: './assets/ondernemers/scubanova.jpeg',
      headerText: 'Scuba nova duikschool',
      blurbText: 'De PADI duikschool en winkel met duikspullen ',
      blurbFans: '4',
      blurbEmo: '🐠',
      blurbHashTags: '#Duikschool #PADI #opleiding',
      linkUrl: 'https://www.scubanova.nl/',
      linkLocation: 'https://www.google.com/maps/place/Scuba+Nova/@52.4853678,5.4865149,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6263ede3c1621:0xbf2c83c6996fa998!8m2!3d52.4853678!4d5.4887036'
    },

    {
      img: './assets/ondernemers/lelyfoto.jpg',
      headerText: 'LelyFoto',
      blurbText: 'Voor slechts €12,50 komt Lelyfoto langs!',
      blurbFans: '6',
      blurbEmo: '📸',
      blurbHashTags: '#fotografie #portret #groepen',
      linkUrl: 'https://www.lelyfoto.nl/',
      linkLocation: 'https://www.google.com/maps/place/Lelyfoto/@52.5031725,5.4446368,17z/data=!3m1!4b1!4m5!3m4!1s0x47c626bb36732557:0x36d38fd6deefcb3e!8m2!3d52.5031725!4d5.4468255'
    },
    {
      img: './assets/ondernemers/thereadshop.jpg',
      headerText: 'The Readshop',
      blurbText: 'Boekhandel met een ruim assortiment.',
      blurbFans: '5',
      blurbEmo: '📚',
      blurbHashTags: '#tijdschriften #kantoorartikelen #boeken',
      linkUrl: 'https://www.readshop.nl/Winkel/1F-16-A0-70-4F-2A-7D-3B/The-Read-Shop-Lelystad-Kroonpassage',
      linkLocation: 'https://www.google.com/maps/place/The+Read+Shop/@52.4989506,5.4572208,14.3z/data=!4m8!1m2!2m1!1sThe+Readshop+lelystad!3m4!1s0x47c6268c183b987b:0x9bc35d76011f4931!8m2!3d52.5074771!4d5.4748885'
    },
    {
      img: './assets/ondernemers/chiba.jpeg',
      headerText: 'Chiba kleding',
      blurbText: 'Modemerk Chiba Clothing, gevestigd in Lelystad',
      blurbFans: '6',
      blurbEmo: '🤵',
      blurbHashTags: '#menswear #womenswear #kledingcollectie',
      linkUrl: 'https://www.chibaclothing.com/',
      linkLocation: 'https://www.google.com/maps/place/Chiba+Clothing/@52.5064867,5.4742689,17z/data=!3m1!4b1!4m5!3m4!1s0x47c627af9d8caea9:0x34f8d63716ee18e9!8m2!3d52.5064867!4d5.4764576'
    },
    {
      img: './assets/ondernemers/ukkies.jpg',
      headerText: 'Ukkies Place',
      blurbText: 'Baby & Kinderkleding en Accessoires shoppen doe je bij Ukkiesplace.',
      blurbFans: '5',
      blurbEmo: '👶',
      blurbHashTags: '#babykleding #kinderkleding #trendy',
      linkUrl: 'https://www.ukkiesplace.nl/',
      linkLocation: 'https://www.google.com/maps/place/Ukkiesplace/@52.5088448,5.4730021,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6267cc40a76d3:0x720ffa7fdc8935dc!8m2!3d52.5088448!4d5.4751908'
    },
    {
      img: './assets/ondernemers/janwillem.jpg',
      headerText: 'Jan Willem Nije',
      blurbText: 'Fysieke therapie met massage, shiatsu of Jin Shin Jyutsu',
      blurbFans: '3',
      blurbEmo: '💆🏻',
      blurbHashTags: '#Massage #Shiatsu #JinShinJyutsu',
      linkUrl: 'http://janwillemnije.nl/',
      linkLocation: 'http://janwillemnije.nl/contact/'
    },
    {
      img: './assets/ondernemers/tropica.jpg',
      headerText: 'Dierenspeciaalzaak Tropica',
      blurbText: 'DSZ Tropica Lelystad de huisdierdeskundige. Al 30 jaar een begrip in Lelystad.',
      blurbFans: '4',
      blurbEmo: '🐶',
      blurbHashTags: '#huisdierdeskundige #assortiment #artikelen',
      linkUrl: 'http://tropicalelystad.nl/',
      linkLocation: 'https://www.google.com/maps/place/Dierenspeciaalzaak+Tropica/@52.5064502,5.4753548,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6268955fd6247:0x3a04bc88743b2b4a!8m2!3d52.506447!4d5.4775488'
    },
    {
      img: './assets/ondernemers/Joia-ilona.jpeg',
      headerText: 'Joia-ilona',
      blurbText: 'JOIA brengt culturen, materialen en kleuren uit verschillende werelden samen. Een traditionele stijl met een moderne twist.',
      blurbFans: '5',
      blurbEmo: '💎',
      blurbHashTags: '#accessoires #handgemaakt #culturen',
      linkUrl: 'https://www.joiailona.nl/',
      linkLocation: 'https://www.google.com/maps/dir/52.5117462,5.4984959/Cederhof+15,+8172+DV+Vaassen/@52.4168315,5.4847281,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47c7c66b8513d8d1:0x41eb584b87b5086c!2m2!1d5.9530145!2d52.280177'
    },
    {
      img: './assets/ondernemers/ilias.jpg',
      headerText: 'Ilias Delicatessen',
      blurbText: 'Bezorging door heel Nederland!',
      blurbFans: '5',
      blurbEmo: '🥜',
      blurbHashTags: '#olijven #tapas #delicatessenkraam',
      linkUrl: 'https://www.iliasdeli.nl/',
      linkLocation: 'https://www.google.com/maps/place/Ilias+Delicatessen/@52.1755765,4.4944083,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5c6b93b50edd9:0xe6710346d4879abd!8m2!3d52.1755765!4d4.496597'
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
