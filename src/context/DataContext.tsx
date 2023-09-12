import { createContext } from 'react';
import { TypePlanets } from '../types';

type TypeDataContext = {
  data: TypePlanets[];
};

const DataContext = createContext({} as TypeDataContext);

export default DataContext;
