import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import { TypePlanets } from '../types';
import fetchApi from '../services/fetchApi';

type DataProviderProps = {
  children: React.ReactNode;
};

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<TypePlanets[]>([]);
  const [filteredData, setFilteredData] = useState<TypePlanets[]>([]);
  const [value, setValue] = useState('');
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

  const handleChange = (event: React.ChangeEvent<
  HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
    setFilteredData(data.filter((planet: TypePlanets) => (
      planet.name.toLowerCase().includes(event.target.value)
    )));
  };

  const context = {
    data,
    filteredData,
    handleChange,
    value,
  };

  return (
    <DataContext.Provider value={ context }>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
