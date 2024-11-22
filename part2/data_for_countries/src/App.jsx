/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import { findAllCountries, findSingleCountry, queryWeatherByCity } from './services';
import { filter, includes, lowerCase, map, isEmpty } from 'lodash-es';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState({});
  const [captitalWeather, setCapitalWeather] = useState({});

  const findCountries = (v) => {
    findAllCountries()
      .then((res) => {
        const shownCountries = filter(res?.data, (country) => includes(lowerCase(country?.name?.common), lowerCase(v)) || includes(lowerCase(country?.name?.official), lowerCase(v)));
        setCountries(shownCountries);
      })
      .catch((err) => {
        setCountries([]);
      });

  }

  // const debounce = (func, delay, params) => {
  //   let timer = null;
  //   return () => {
  //     if (timer !== null) {
  //       clearTimeout(timer);
  //     }
  //     timer = setTimeout(() => {
  //       func(params);
  //     }, delay);
  //   }
  // }

  const throttle = (func, delay) => {
    let available = true;
    return (v) => {
      if (available) {
        func(v);
        available = false;
        setTimeout(() => {
          available = true;
        }, delay);
        return;
      }
    }
  }


  // const handleChange = debounce(findCountries, 300);
  const handleChange = useRef(throttle(findCountries, 1000));
  // const handleChange = throttle(findCountries, 3000);

  const renderSingleCountry = (country) => (
    <div>
      <h1>
        {country.name.common}
      </h1>
      <section>
        <div>
          {map(country.capital, (value) => <span>{value}</span>)}
        </div>
        <div>
          {country.area}
        </div>
      </section>
      <section>
        <h3>languages:</h3>
        <ul>
          {
            map(Object.keys(country.languages), (key) => <li>{country.languages[key]}</li>)
          }
        </ul>
      </section>
      <section>
        <img src={country.flags.png} alt="" />
      </section>
    </div>
  )

  const renderCountries = (countries) => {
    if (countries.length <= 10) {
      if (countries.length === 1) {
        const singleCountry = countries[0];
        return renderSingleCountry(singleCountry);
      }
      return (map(countries, (country) => (
        <div>
          {country?.name?.common}
          <button
            onClick={() => {
              findSingleCountry(country?.name?.common)
                .then((res) => {
                  setSingleCountry(res.data);
                  const captitalCity = res.data.capital[0];
                  queryWeatherByCity(captitalCity)
                    .then((res) => {
                      
                    })
                })
                .catch((err) => {

                })
            }}
          >
            show
          </button>
        </div>
      )))
    }
    return 'Too many matches,specify another fiter'
  }

  return (
    <div>
      <div>
        find countries
        <input
          id='country-search-input'
          name='country-search-input'
          onChange={(e) => {
            if (!e.target.value) {
              setCountries([]);
              return;
            }
            handleChange.current(e.target.value);
          }}
        />
      </div>
      {
        renderCountries(countries)
      }
      {
        !isEmpty(singleCountry) ?
          renderSingleCountry(singleCountry)
          : null
      }
    </div >
  )
}

export default App