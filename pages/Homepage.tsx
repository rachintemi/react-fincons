import * as React from 'react';
import useFetch from '../hook/useHook';

const HomePage = () => {
  const { data, loading, error } = useFetch(
    'https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People'
  );

  return <div> </div>;
};

export default HomePage;
