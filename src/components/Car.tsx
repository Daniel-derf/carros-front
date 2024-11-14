type Car = {
  id: number;
  name: string;
  price: number;
}

function Car({}: Car) {
  return (
    <div>Car</div>
  )
}

export default Car