'use strict';

/**
 * @ngdoc function
 * @name onthebeachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onthebeachApp
 */
angular.module('onthebeachApp')
  .controller('MainCtrl', function ($scope) {
    $scope.holidays = [
    	{'resort': 'Costa Adeje Gran Hotel',
    	 'location': 'Costa Adeje, Tenerife',
    	 'stars': 5,
    	 'price': 1136.50,
    	 'imgsrc': '.././images/image_01.png',
    	 'departure': '3 July 2014',
    	 'duration': 7,
    	 'airport': 'East Midlands',
    	 'people': '2 Adults, 2 Children & 1 Infant',
         'details': false,
         'fullDetails': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper, neque quis luctus egestas, magna diam volutpat tellus, ac venenatis eros ex quis lectus. Quisque nec metus non tortor tempor fermentum quis sit amet lacus. Etiam sagittis a nisi ut sodales. Morbi lacinia lectus ac nulla eleifend, ut aliquet tortor molestie. Integer elementum mauris ut justo dignissim fringilla. Sed imperdiet hendrerit augue quis accumsan. Donec pulvinar nec magna malesuada luctus. Maecenas tempus vel ex eget egestas. Donec gravida auctor nunc, a hendrerit metus auctor non. Etiam venenatis ornare metus, vel faucibus lacus porta ac. Aenean vitae euismod neque, vel accumsan turpis. Integer lobortis eu libero a interdum.'
    	},
    	{'resort': 'Aguamarina Golf Hotel and Apartments',
    	 'location': 'Costa Adeje, Tenerife',
    	 'stars': 4,
    	 'price': 499.99,
    	 'imgsrc': '.././images/image_02.png',
    	 'departure': '3 July 2014',
    	 'duration': 7,
    	 'airport': 'Manchester',
    	 'people': '2 Adults & 2 Children',
         'details': false,
         'fullDetails': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper, neque quis luctus egestas, magna diam volutpat tellus, ac venenatis eros ex quis lectus. Quisque nec metus non tortor tempor fermentum quis sit amet lacus. Etiam sagittis a nisi ut sodales. Morbi lacinia lectus ac nulla eleifend, ut aliquet tortor molestie. Integer elementum mauris ut justo dignissim fringilla. Sed imperdiet hendrerit augue quis accumsan. Donec pulvinar nec magna malesuada luctus. Maecenas tempus vel ex eget egestas. Donec gravida auctor nunc, a hendrerit metus auctor non. Etiam venenatis ornare metus, vel faucibus lacus porta ac. Aenean vitae euismod neque, vel accumsan turpis. Integer lobortis eu libero a interdum.'
    	},
    	{'resort': 'Laguna Park II',
    	 'location': 'Costa Adeje, Tenerife',
    	 'stars': 3,
    	 'price': 696.80,
    	 'imgsrc': '.././images/image_03.png',
    	 'departure': '27 May 2014',
    	 'duration': 7,
    	 'airport': 'Liverpool',
    	 'people': '2 Adults & 1 Child',
         'details': false,
         'fullDetails': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper, neque quis luctus egestas, magna diam volutpat tellus, ac venenatis eros ex quis lectus. Quisque nec metus non tortor tempor fermentum quis sit amet lacus. Etiam sagittis a nisi ut sodales. Morbi lacinia lectus ac nulla eleifend, ut aliquet tortor molestie. Integer elementum mauris ut justo dignissim fringilla. Sed imperdiet hendrerit augue quis accumsan. Donec pulvinar nec magna malesuada luctus. Maecenas tempus vel ex eget egestas. Donec gravida auctor nunc, a hendrerit metus auctor non. Etiam venenatis ornare metus, vel faucibus lacus porta ac. Aenean vitae euismod neque, vel accumsan turpis. Integer lobortis eu libero a interdum.'
    	}
    ];

    $scope.orderProp = 'price';

    $scope.starRepeater = function(holiday){
        var rating = {};
        for(var i = 0; i < holiday.stars; i++){
            rating[i] = '<i class="fa fa-star"></i>';
            }
        return rating;
    }

    $scope.setOrder = function(order){
    	$scope.orderProp = order;
    }

    $scope.toggleDetails = function(holiday){
          holiday.details = !holiday.details;
            }
  });
