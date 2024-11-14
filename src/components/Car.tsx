import './Car.css'

type Car = {
  name: string;
  price: number;
}

function CarElement({name, price}: Car) {
  return (
    <div className="car">
      <h2>Name: {name}</h2>
      <h2>Price: {price}</h2>
    </div>
  )
}

export default CarElement