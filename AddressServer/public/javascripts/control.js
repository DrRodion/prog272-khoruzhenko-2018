const RouteMaster = (function() {
    'use strict';
    // Constructor
    function RouteMaster() {
        var getAddressList = getAddressList();
    }

    const getAddressList = function() {
        fetch('/getAddressList')
            .then((result) => result.json())
            .then((returnValue) => {
                alert(JSON.stringify(returnValue["result"]));
            })
            .catch((error) => { console.log(error); })
    };
    
    // Return constructor
    return RouteMaster;
}());

function create() {
    'use strict';
    new RouteMaster();
}

window.onload = create;

