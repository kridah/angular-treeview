angular.module('tree', [], function($compileProvider) {

    $compileProvider.directive('compile', function($compile) {
        return function(scope, element, attrs) {
            scope.$watch(
                function(scope) {
                    return scope.$eval(attrs.compile);
                },
                function(value) {
                    "use strict";

                    if(!value)
                        return;

                    element.html('<div class="tree-view-item" ng-click="" tree="t"></div>');

                    $compile(element.contents())(scope);
                });
        };
    })
}).directive( 'tree', function ( ) {


        var nodeClick = null;

        return {
            scope : {
              tree : "=",
              nodeClick : "&"
            },
            restrict: 'A',
            template : '{{ tree.name }} <div ng-repeat="t in tree.children" compile="t"></div>',
            link: function ( scope, elem, attr, ctrl ) {


                if(!nodeClick){

                        nodeClick = scope.nodeClick;
                }

                elem[0].addEventListener("click", function(e){

                    if(e.stopPropagation()){
                        e.preventDefault();
                    }

                    nodeClick({ data : scope.tree});

                });

            }
        }
});
