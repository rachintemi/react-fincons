import { useEffect, useState } from 'react';
import * as React from 'react';

export interface People {
  UserName: string;
  FirstName: string;
  LastName: string;
}

const HomePage = () => {
  const [people, setPeople] = useState<People[]>([]);

  const fetchData = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPeople(data.value))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData(
      'https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People'
    );
  }, []);

  const listPeople = people.map((person) => (
    <li key={person.UserName}>{`${person.FirstName} ${person.LastName}`}</li>
  ));

  return <div>{people && <ul>{listPeople}</ul>}</div>;
};

export default HomePage;
