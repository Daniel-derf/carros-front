import { useState } from 'react'

type Car = {
  id: number;
  name: string;
  price: number;
}

const mockedCars: Car[] = [
  {id: 1, name: 'Fiat Uno 2008', price: 40000},
  {id: 2, name: 'Gol', price: 50000},
  {id: 3, name: 'Hilux', price: 80000},
]

type Props = {}

const Home = (props: Props) => {

  const [cars, setCars] = useState(mockedCars)


  return (<div className='container'>
  <h1>Home Page</h1>
  
  </div>)
}

export default Home