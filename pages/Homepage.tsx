import * as React from 'react';
import useFetch from '../hook/useHook';

const HomePage = () => {
  const url =
    'https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People';
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return <div> {data}</div>;
};

export default HomePage;
