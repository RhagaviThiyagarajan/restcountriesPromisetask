   const countriesList=document.getElementById("countries");
   let countries;


   countries.addEventListener("change",event=>displayCountryInfo(event.target.value));
   function newCountrySelection(event)
   {
    displayCountryInfo(event.target.value);
   }

   var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
console.log(res);
res.then((data)=> data.json())
.then((value)=>{
    console.log((value));
    foo(value);
}).catch((error)=>console.log(error));



function foo(res)
{


    countries=countriesData;
    let options="";

    countries.forEach(country => div+=`<div value="${country.alpha3Code}">${country.name}</div>`);
    countriesList.innerHTML=options;
countriesList.selectedIndex=Math.floor(Math.random()*countriesList.length);
displayCountryInfo(countriesList[countriesList.selectedIndex].value);


}
function displayCountryInfo(countryByAlpha3code)
{
    const countryData =countries.find(country=>country.alpha3Code===countryByAlpha3code);
    document.querySelector("#flag-container img").src=countryData.flag;
    document.querySelector("#flag-container img").alt=`Flag of {countryData.name}`;
    document.getElementById("capital").innerHTML=countryData.capital;

  document.getElementById("DialingCode").innerHTML=`+${countryData.callingCodes[0]}`;
  document.getElementById("Population").innerHTML=CountryData.population.toLocaleString("en-US");
  document.getElementById("Region").innerHTML=countryData.region;
}



    
