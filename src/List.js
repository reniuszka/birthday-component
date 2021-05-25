import React from 'react';
// looking for my people prop, and want to iterate over it, person represents each object, im gonna destrucre it and looking for id,name,age,image coming from the person and want to return  in in tag article
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
