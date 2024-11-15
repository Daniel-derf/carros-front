import './Car.css'
import carImage from './img.png'

type Car = {
  name: string;
  price: number;
}

function CarElement({name, price}: Car) {
  return (
    <div className="car">
      <h2>Name: {name}</h2>
      <h2>Price: {price}</h2>
      <img src={carImage} alt="car.img" className='car-img' />
      <p className='car-details'>Ver detalhes</p>
    </div>
  )
}

export default CarElement