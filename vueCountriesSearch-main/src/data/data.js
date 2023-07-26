import countriesByCities from "./country-by-cities.js"
import countriesByAbbreviation from "./country-by-abbreviation.js"
import countriesByCurrencyCode from "./country-by-currency_code.js"
import countriesByCurrencyDetails from "./country-currency-details.js";

const counties = []

for (let i = 0; i < countriesByCities.length; i++) {
  const city = countriesByCities[i]

  countriesByAbbreviation.forEach((item) => {
    if (item.country === city.country) {
      city.abbreviation = item.abbreviation
      city.flag_src = `flags/${item.abbreviation.toLowerCase()}.svg`
    }
  })

  countriesByCurrencyCode.forEach((item) => {
    if (item.country === city.country) {
      city.currency_code = item.currency_code
    }
  })

  if (countriesByCurrencyDetails[city.currency_code]) {
    city.currency_details = countriesByCurrencyDetails[city.currency_code]
  }

  counties.push(city)
}

export default counties
