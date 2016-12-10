// "use strict";

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

// $schema.addEventListener("click", function(e) {

//     console.log("click", e.target, e.target.nodeName);

//     if (e.target.nodeName == "rect")
//     {
//         $plot = e.target.parentNode;
        
//         for (x=0; x < $plots.length; x++)
//         {
//             $plots[x].classList.remove("is-animate");
//         }

//         $info.innerHTML = '';

//         $info.innerHTML = [
//             '<h3>№ ', $plot.getAttribute('data-number'), '</h3>',
//             '<p>', $plot.getAttribute('data-name'), '</p>',
//         ].join('');
    
//         $plot.classList.add("is-animate");
//     }

// });

// var app = angular.module('app',[]);

// app.component('ourComponent', {
//     // Binds the attibute data to the component controller.
//     bindings: {
//         data: '@'
//     },

//     // We can now access the data from the data attribute with `$ctrl`
//     template:'<p>{{ $ctrl.data }}</p>'
// });

// app.directive('listDirective', function () {
//     return {
//         // Isolated scope binding
//         scope: {
//             message: '='
//         },
//         // Inline template which is binded to message variable in the component controller
//         template: '<div>Hello {{$ctrl.message}}</div>',
//         // The controller that handles our component logic
//         controller: function () {
//                 this.message = "Thomas directive"
//         },
//         //defaults, automatically set when using .component()
//         controllerAs: '$ctrl',
//         bindToController: true
//     };
// });

// app.component('listComponent', {
//     // isolated scope binding
//     bindings: {
//         message: '='
//     },

//     // Inline template which is binded to message variable
//     // in the component controller
//     template:'<div>Hello {{$ctrl.message}}</div>',

//     // The controller that handles our component logic
//     controller: function () {
//         this.message = "Thomas component"
//     }
// });