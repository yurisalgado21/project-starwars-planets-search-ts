import { useEffect, useState } from 'react';
import DataContext from './DataContext';
import { TypePlanets } from '../types';
import fetchApi from '../services/fetchApi';

type DataProviderProps = {
  children: React.ReactNode;
};

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<TypePlanets[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchApi();
      console.log(response);
      setData(response.map((planet: TypePlanets) => {
        delete planet.residents;
        return planet;
      }));
    };
    getData();
  }, []);

  const context = {
    data,
  };

  return (
    <DataContext.Provider value={ context }>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
