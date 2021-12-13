const source = 'https://simplemaps.com/static/data/country-cities/id/id.json';
const searchInput = document.querySelector('#search-box');
const outputList = document.querySelector('.suggestion');

const IDNCity = [];
getCities()

async function getCities(){
    const response = await fetch(source,{
        // method : 'PUT',
        // headers : {'Content-Type' : 'application/json'},
        // body : JSON.stringify({city: 'Cilegon'})
    })
    const cityArray = await response.json()
    IDNCity.push(...cityArray)
}

function findMatches(wordToMatches, cities){
    return cities.filter(elem => {
        const regex = new RegExp(wordToMatches ,'ig')
        return elem.city.match(regex) || elem.admin_name.match(regex) || elem.country.match(regex);
    })
}

function displayMatches(){
    if(this.value === "") return;
   const matchesWord = findMatches(this.value, IDNCity)
   const html = matchesWord.map(elem => {
       return `<li><span>${elem.city}, ${elem.admin_name}</span>    <span class"cordinates">${elem.lat}, ${elem.lng}</span></li>\n`
    }).join('')
   outputList.innerHTML = html
}


searchInput.addEventListener("search",displayMatches)