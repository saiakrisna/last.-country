let getNationality = async () => {
    try {
        let getData = await fetch("https://restcountries.eu/rest/v2/region/europe");
        let data = await getData.json();
        data.forEach(function (data) {
            console.log(data)
                let div = document.createElement('div')
                div.className = "col-lg-3 col-md-6 mb-4 data";
            
                div.innerHTML =
                '<div class="card h-100">' +
                    '<img class="card-img-top" src="' +data.flag+ '" alt="frishian flag">'+
                        '<div class="card-body">' +
                            '<h5 class="card-title">' +data.name+ '</h5>' +
                        '</div>'+
                    '</div>'+
                '</div>'
                document.getElementById("data").appendChild(div);
                
        });
    } catch (error) {
        console.log("data not found")
    }
}
getNationality()