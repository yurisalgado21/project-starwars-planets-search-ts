import { createContext } from 'react';
import { TypePlanets } from '../types';

type TypeDataContext = {
  data: TypePlanets[];
  filteredData: TypePlanets[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const DataContext = createContext({} as TypeDataContext);

export default DataContext;
