$('#all-countries-button').click(function(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((theThingIGetBack)=>{
        $('#list').html("<ul id='the-ul'></ul>")

        theThingIGetBack.data.forEach((eachCountry)=>{
            $('#the-ul').append(
            `
            <li>
            ${eachCountry.name}
            </li>
            `
                )
        })
    })
    .catch((err)=>{
        console.log('THIS IS AN ERROR',err);
    })
})



function getCountry(e) {
    e.preventDefault();

    let input = $("#capitalHere").val()
    axios.get('https://restcountries.eu/rest/v2/capital/'+input)
    .then((response) => {
        $("#answer").html(response.data[0].name)    
})
    .catch(err => {
        console.log('err => ', err) 
    })
}

$('#submitHere').click(getCountry);


function getCountryInfo(e) {
    e.preventDefault();

    let input2 = $("#countryHere").val()
    axios.get('https://restcountries.eu/rest/v2/name/'+input2)
    .then((response) => {
        console.log(response)
        $("#name").html(response.data[0].name)    
        $("#nativeName").html(response.data[0].nativeName) 
        $("#theCapital").html(response.data[0].capital) 
        $("#region").html(response.data[0].region) 
        $("#population").html(response.data[0].population) 
    })
    .catch(err => {
        console.log('err => ', err) 
    })
}

$('#submit2Here').click(getCountryInfo);



