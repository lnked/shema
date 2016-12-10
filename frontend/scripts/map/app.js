(function(app){
    'use strict';

    // #
    var informationTemplate = [
        '<div class="schema__information" id="schema-information"></div>'
    ].join(' ');

    app.component('information', {
        template: informationTemplate,
        controller: function () {}
    });

    // #
    var overlayTemplate = [
        '<div class="schema__overlay">',
            '<object type="image/svg+xml" ng-attr-data="{{$ctrl.svg}}"></object>',

            // '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 984 601" ng-click="overlay.click();">',

                // '<g data-hover="#830AAF" data-name="Объект 1" data-number="1">',
                //     '<rect x="247.497" y="0.002" width="243" height="232"></rect>',
                // '</g>',
                
                // '<g data-hover="#AE181E" data-name="Объект 2" data-number="2">',
                //     '<rect x="0.497" y="232.002" width="243" height="137"></rect>',
                // '</g>',
                
                // '<g data-hover="#45D50A" data-name="Объект 3" data-number="3">',
                //     '<rect x="493.497" y="232.002" width="243" height="137"></rect>',
                // '</g>',

                // '<g data-hover="#27D2EB" data-name="Объект 4" data-number="4">',
                //     '<rect x="740.496" y="232.002" width="243" height="137"></rect>',
                // '</g>',
                
                // '<g data-hover="#DC4E75" data-name="Объект 5" data-number="5">',
                //     '<rect x="247.497" y="369.002" width="243" height="232"></rect>',
                // '</g>',

            // '</svg>',
        '</div>',
    ].join(' ');
    
    app.directive('overlay', function() {
        return {
            restrict: 'E',
            scope: { svg: '=' },
            template: overlayTemplate,
            replace: true
        }
    });

    app.component('overlay1', {
        bindings: {
            svg: '='
        },
        template: overlayTemplate,
        controller: function () {

            console.log(this.svg);

            this.click = function(e) {
                alert("click");
                console.log("click", e.target, e.target.nodeName);
            }

            // var statusElm = angular.element(element[0].getSVGDocument().getElementById("status"));

            // statusElm.on("click", function(event) {
            //     scope.$apply(function() {
            //         scope.currentStatus='alert';
            //     });
            // });

            // var $schema = document.getElementById("schema"),
            //     $info = document.getElementById("schema-information"),
            //     $plots = $schema.querySelectorAll("g"),
            //     $plot = null, x = 0;

            // for (x in $plots)
            // {
            //     if (typeof($plots[x]) == 'object' && typeof($plots[x].getAttribute('data-hover')) !== 'undefined')
            //     {
            //         $plots[x].style.color = $plots[x].getAttribute('data-hover');    
            //     }
            // }
        }
    });

    // #
    app.component('background', {
        bindings: { src: '<' },
        template: [
            '<div class="schema__background">',
                '<img src="{{$ctrl.src}}" width="100%" height="100%" alt="">',
            '</div>'
        ].join(' ')
    });

})(angular.module('app', []));

// var app = angular.module('app', []);

// var schema = [
//     '<div class="schema">',
//         '<div class="schema__information" id="schema-information"></div>',

//         '<div class="navbar-header">',
//             '<a class="navbar-brand" href="#">{{$ctrl.brand}}</a>',
//         '</div>',
//         '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
//             '<ul class="nav navbar-nav">',
//                 '<li ng-repeat="menu in $ctrl.menu">',
//                     '<a href="{{menu.component}}">{{menu.name}} <span class="sr-only">(current)</span></a>',
//                 '</li>',
//             '</ul>',
//         '</div>',
//     '</div>'
// ];

// app.component('schema', {
//     bindings: { brand: '<' },
//     template: schema,
//     controller: function () {
//         this.menu = [
//             {
//                 name: 'Home',
//                 component: 'home'
//             },
//             {
//                 name: 'About',
//                 component: 'about'
//             },
//             {
//                 name: 'Contact',
//                 component: 'contact'
//             }
//         ];
//     }
// });

// var navbar = [
//     '<nav class="navbar navbar-default">',
//         '<div class="container">',
//             '<div class="navbar-header">',
//                 '<a class="navbar-brand" href="#">{{$ctrl.brand}}</a>',
//             '</div>',
//             '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
//                 '<ul class="nav navbar-nav">',
//                     '<li ng-repeat="menu in $ctrl.menu">',
//                         '<a href="{{menu.component}}">{{menu.name}} <span class="sr-only">(current)</span></a>',
//                     '</li>',
//                 '</ul>',
//             '</div>',
//         '</div>',
//     '</nav>'
// ].join(' ');

// app.component('menuBar', {
//     bindings: { brand: '<' },
//     template: navbar,
//     controller: function () {
//         this.menu = [
//             {
//                 name: 'Home',
//                 component: 'home'
//             },
//             {
//                 name: 'About',
//                 component: 'about'
//             },
//             {
//                 name: 'Contact',
//                 component: 'contact'
//             }
//         ];
//     }
// });

// var userInfo = [
//     '<div class="container">',
//     '<table class="table table-bordered">',
//     '<tr><td id="caption" colspan="4">{{$ctrl.name}}</td></tr>',
//     '<th><td>Name</td><td>City</td><td>Country</td></th>',
//     '<tr ng-repeat="user in $ctrl.records">',
//     '<td></td>',
//     '<td>{{user.name}}</td>',
//     '<td>{{user.city}}</td>',
//     '<td>{{user.country}}</td>',
//     '</tr>',
//     '</table>',
//     '</div>'
// ].join(' ');

// app.component('userInfo', {
//     bindings: { name: '<' },
//     template: userInfo,
//     controller: function () {
//         this.records = [
//             {
//                 name: 'Alfreds Futterkiste',
//                 city: 'Berlin',
//                 country: 'Germany'
//             },
//             {
//                 name: 'Ana Trujillo Emparedados y helados',
//                 city: 'M\xE9xico D.F.',
//                 country: 'Mexico'
//             },
//             {
//                 name: 'Blondel p\xE8re et fils',
//                 city: 'Strasbourg',
//                 country: 'France'
//             },
//             {
//                 name: 'B\xF3lido Comidas preparadas',
//                 city: 'Madrid',
//                 country: 'Spain'
//             }
//         ];
//     }
// });