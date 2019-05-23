import React from 'react'

const Person = ({persons, delPerson}) => {
    return (
        <div className="person-list">
            {persons.map(person => {
                return (
                    person.age > 20 ? (
                        <div className="person" key={person.id}>
                            <div>Name: { person.name }</div>
                            <div>Age: { person.age }</div>
                            <div>Color: { person.color }</div>
                            <button onClick={() => {delPerson(person.id)}} >Delete</button>
                            <br/><br/>
                        </div>
                    ) : null
                )
            })}
        </div>
    )
}

export default Person