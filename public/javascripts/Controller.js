function Controller($scope){


    var firstNode = [{

        name : "CMS 1",
        children :[
            {
                name : "CMS 2",
                children :[

                ]
            },
            {
                name : "CMS 3",
                children :[
                    {
                        name : "CMS 4",
                        children :[

                        ]
                    },
                    {
                        name : "CMS 5",
                        children :[

                        ]
                    },
                    {
                        name : "CMS 6",
                        children :[
                            {
                                name : "CMS 7",
                                children :[

                                ]
                            }
                        ]
                    }
                ]
            }

        ]
    },
        {

            name : "CMS 1",
            children :[
                {
                    name : "CMS 2",
                    children :[

                    ]
                },
                {
                    name : "CMS 3",
                    children :[
                        {
                            name : "CMS 4",
                            children :[

                            ]
                        },
                        {
                            name : "CMS 5",
                            children :[

                            ]
                        },
                        {
                            name : "CMS 6",
                            children :[
                                {
                                    name : "CMS 7",
                                    children :[

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name : "CMS 3",
                    children :[
                        {
                            name : "CMS 6",
                            children :[
                                {
                                    name : "CMS 7",
                                    children :[

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name : "CMS 3",
                    children :[
                        {
                            name : "CMS 4",
                            children :[

                            ]
                        },
                        {
                            name : "CMS 6",
                            children :[
                                {
                                    name : "CMS 7",
                                    children :[

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                     name : "CMS 3",
                     children : []
                }

            ]
        }];

    $scope.onClick = function(element){

       element.children.push({
           name : "HELLO",
           children :[

           ]
       });
    }

    $scope.tree = firstNode;

}