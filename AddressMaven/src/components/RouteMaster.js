const RouteMaster = (function() { 
    function RouteMaster() {}
	
	// Get AddressList via server route
    const getAddressList = function() {
        fetch('../address-list')
            .then((result) => result.json())
            .then((returnValue) => {
                alert(JSON.stringify(returnValue["result"]));
            })
            .catch((error) => { console.log(error); })
    };

    return RouteMaster;
}());

function create() {
    new RouteMaster();
}

window.onload = create;
