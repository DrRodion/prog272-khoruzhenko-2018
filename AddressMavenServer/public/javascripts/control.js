
const RouteMaster = (function() {
    'use strict';
    // Constructor
    function RouteMaster() {
		document.getElementById('getFeetInMile').onclick = getFeetInMile;
        document.getElementById('calculateFeet').onclick = calculateFeet;
        document.getElementById('calculateCircum').onclick = calculateCircum;
    }

    const calculateFeet = function() {
        const feetResult = document.getElementById('displayArea');
        var miles = document.getElementById('textbox').value;
        
        fetch('/calculateFeet' + '?miles=' + miles)
            .then((result) => result.json())
            .then((returnValue) => {
                feetResult.textContent = JSON.stringify(returnValue["result"]);
            })
            .catch((error) => { console.log(error); })
    };
    
    const getFeetInMile = function() {
        const feetResult = document.getElementById('displayArea');
        
        fetch('/calculateFeet' + '?miles=1')
            .then((result) => result.json())
            .then((returnValue) => {
                feetResult.textContent = JSON.stringify(returnValue["result"]);
            })
            .catch((error) => { console.log(error); })
    };
    
    const calculateCircum = function() {
        const circumResult = document.getElementById('displayArea');
        var radius = document.getElementById('textbox').value;
        
        fetch('/calculateCircum' + '?radius=' + radius)
            .then((result) => result.json())
            .then((returnValue) => {
                circumResult.textContent = JSON.stringify(returnValue["result"]);
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

