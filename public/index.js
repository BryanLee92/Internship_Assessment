// data
const fName = document.getElementById("name");
const date = document.getElementById("date");
const address = document.getElementById("address");
const postcode = document.getElementById("postcode");
const city = document.getElementById("city");
const state = document.getElementById("state");

// btn
const btn = document.getElementById("submit");

//backendURL
const baseURL = "http://localhost:10000/";

// Max date
let max = new Date().toISOString().split("T")[0];
date.setAttribute("max", max);

btn.addEventListener('click', (e) =>{
    e.preventDefault();

    const response = fetch(baseURL + 'register', 
    {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullName:fName.value,
            dateOfBirth:date.value,
            address:address.value,
            postcode:postcode.value,
            city:city.value,
            state:state.value
        }),
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log('ERROR: '+ error)
    })
});

// for prevent alphabet in postcode
function restrictAlphabets(e){
    let x = e.which || e.keycode;
    if((x >= 48 && x <= 57)){
        return true;
    } else {
        return false;
    }
};

//search for city and state
async function searchPostcode(data){
    const response = await fetch(baseURL + 'postcode', 
    {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            postcode:data.value
        }),
    });
    try {
        const received = await response.json();
        return sendData(received);
    }
    catch(error) {
        console.log('ERROR: '+ error);
    }
}
function sendData(data){
    city.value = data.city;
    state.value = data.state;
}