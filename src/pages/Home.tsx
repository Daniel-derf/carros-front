// css
import './Home.css'

import { useState } from 'react'

// components
import CarElement from '../components/Car'

type Car = {
  id: number;
  name: string;
  price: number;
}

const mockedCars: Car[] = [
  {id: 1, name: 'Fiat Uno 2008', price: 40000},
  {id: 2, name: 'Gol', price: 50000},
  {id: 3, name: 'Hilux', price: 80000},
  {id: 1, name: 'Fiat Uno 2008', price: 40000},
  {id: 2, name: 'Gol', price: 50000},
  {id: 3, name: 'Hilux', price: 80000},
  {id: 1, name: 'Fiat Uno 2008', price: 40000},
  {id: 2, name: 'Gol', price: 50000},
  {id: 3, name: 'Hilux', price: 80000},
]

type Props = {}

const Home = (props: Props) => {

  const [cars, setCars] = useState(mockedCars)


  return (<div className='container'>
  <h1>Carros à venda</h1>
  
  <div className="cars-container">
    {cars.map(car => <CarElement name={car.name} price={car.price} /> )}
  </div>
  
  </div>)
}

export default Home