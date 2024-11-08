/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { findAllCountries } from './services';
import { filter, includes, lowerCase, map } from 'lodash-es';

const App = () => {
  const [countries, setCountries] = useState([]);

  const findCountries = () => {
    findAllCountries()
      .then((res) => {
        const shownCountries = filter(res?.data, (country) => includes(lowerCase(country?.name?.common), lowerCase(e?.target?.value)) || includes(lowerCase(country?.name?.official), lowerCase(e?.target?.value)));
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

  const throttle = (func, delay, params) => {
    let available = true;
    return () => {
      console.log('available', available)
      debugger;
      if (available) {
        debugger;
        func(params);
        available = false;
        setTimeout(() => {
          available = true;
        }, delay);
        return;
      }
    }
  }



  // const handleChange = debounce(findCountries, 300);
  const handleChange = throttle(findCountries, 10000);

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
            handleChange();
          }}
        />
      </div>
      {
        countries.length <= 10 ?
          map(countries, (country) => (
            <div>
              {country?.name?.common}
            </div>
          ))
          :
          'Too many matches,specify another fiter'
      }
    </div >
  )
}

export default App