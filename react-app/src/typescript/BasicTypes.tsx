

export default function BasicTypes() {

const name: string | number = 'Brayan Dávila';
const age: number = 25;
const isActive: boolean = false;
const people = ['Brayan', 'Dávila', 'López'];

  return (
    <>
    <h3>TIPOS BÁSICOS</h3>
        {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
         - {people.join(', ')}

    </>
  )
}
