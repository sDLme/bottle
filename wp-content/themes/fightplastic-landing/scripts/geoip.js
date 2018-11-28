var str = document.location.href;
var lang = str.search( /de/ );

console.log(lang);


function getCountries() {

    if (lang !== -1) {
        console.log(lang);
        return [
            {
                name: 'Austria',
                url: 'https://www.sodastream.at?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Switzerland',
                url: 'https://www.sodastream.ch?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Germany',
                url: 'https://preisvergleich.check24.de/sodastream-hero-campaign.html?ts=0?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            },
        ];
    } else  {
        return [

            {
                name: 'Argentina',
                url: 'https://www.sodastream.fr?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Australia',
                url: 'https://www.sodastream.com.au?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            },{
                name: 'Austria',
                url: 'https://www.sodastream.at?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Belgium NL',
                url: 'https://www.sodastream.be?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Belgium FR',
                url: 'http://fr.sodastream.be?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Brazil',
                url: 'https://www.spicy.com.br/sodastream?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Canadian EN',
                url: 'https://www.sodastream.ca?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Canadian FR',
                url: 'https://www.sodastream.ca/fr?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Czech Republic',
                url: 'https://www.sodastream.cz/?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Denmark',
                url: 'http://www.sodastream.dk?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Finland',
                url: 'http://www.sodastream.fi?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'France',
                url: 'https://www.sodastream.fr?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            },{
                name: 'Germany',
                url: 'https://preisvergleich.check24.de/sodastream-hero-campaign.html?ts=0?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            },  {
                name: 'Hungary',
                url: 'https://www.sodastream.hu?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Israel',
                url: 'https://www.sodastream.co.il?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Italy',
                url: 'http://www.sodastream.it?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Japan',
                url: 'https://www.sodastream.jp?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Luxembourg',
                url: 'https://www.sodastream.com?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Mexico',
                url: 'https://sodastreammexico.com?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Netherlands',
                url: 'https://www.sodastream.nl?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'New Zealand',
                url: 'https://www.sodastream.co.nz?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Norway',
                url: 'http://www.sodastream.no?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Philippines',
                url: 'https://www.facebook.com/SodaStreamPh'
            }, {
                name: 'Poland',
                url: 'http://www.sodastream.pl?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Portugal',
                url: 'https://sodastream.pt?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Russia',
                url: 'https://sodastream.ru?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Singapore',
                url: 'https://sodastream.sg?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Slovakia',
                url: 'https://www.sodastream.sk?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Slovenia',
                url: 'http://www.sodastream.si?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'South Africa',
                url: 'http://www.sodastream.co.za?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'South Korea',
                url: 'http://www.sodastream.kr?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Spain',
                url: 'http://www.sodastream.es?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Sweden',
                url: 'http://www.sodastream.se?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Switzerland',
                url: 'https://www.sodastream.ch?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            },  {
                name: 'Taiwan',
                url: 'https://www.sodastream.com.tw?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'Ukraine',
                url: 'http://www.sodastream.com.ua?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'United Kingdom',
                url: 'https://www.sodastream.co.uk?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            }, {
                name: 'United States',
                url: 'https://sodastream.com/?utm_source=hilltop&utm_medium=minisite&utm_campaign=fightplatstic-nov18'
            },
        ]
    }

}

function moveElementInArray(targetArray, fromIndex, toIndex) {
    var element = targetArray[fromIndex];
    targetArray.splice(fromIndex, 1);
    targetArray.splice(toIndex, 0, element);
}

function fillUpCountrySelector(firstCountryName) {
    var countries = getCountries().sort();

    // console.log("firstCountryName",firstCountryName );
    // console.log("countries",countries );

    // if (firstCountryName === 'Germany') {
    //     countries = countries.filter(country => Boolean(['Austria', 'Switzerland', 'Germany'].indexOf(country) !== -1)).sort();
    // }

    var fromIndex = countries.findIndex(function (country) {
        return country.name === firstCountryName;
    });

    if (fromIndex !== -1) {
        moveElementInArray(countries, fromIndex, 0);
    }

    var countrySelector = document.getElementById("cc-shop__select");
    countries.forEach(function (country) {
        var option = document.createElement("option");
        option.text = country.name;
        option.value = country.url;

        if (country.name === firstCountryName) {
            option.selected = "selected";
        }
        countrySelector.add(option);
    });

    console.log('==> Countries was successfully added');
}

window.geoIPService = new GeoIPService({
    countries: ['en', 'de', 'fr'],
    loaderSelectorID: 'loading-gif'
});
window.geoIPService.start(function (err, res) {
    if (err) {
        return console.log('==> Error during geoip checking:', err);
    }

    fillUpCountrySelector(res.registered_country.names.en);
});
