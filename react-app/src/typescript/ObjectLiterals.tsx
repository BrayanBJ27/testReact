interface Person {
    age?: number,
    firstName: string,
    lastName: string,
    address: {
        country: string,
        houseNo: number
    }
}

export default function ObjectLiterals(){

    const person: Person = {
        //age: 25,
        firstName: 'Brayan',
        lastName: 'Dávila',
        address: {
            country: 'Ecuador',
            houseNo: 1234
        }
    }

    return (
        <>
            <h3>Object Literals</h3>
            {JSON.stringify(person, null, 2)}
        </>
    )
}