import React from 'react';
import Star from "./Star";


export default function App() {

  const [contact,setContact] = React.useState({
    firstName: "Jhon",
    lastName: "Doe",
    phone : "1 (719) 555-1212",
    email : "itsmyrealname@example.com",
    isFavorite : true
  })



  function toggleFavorite() {
   setContact(prestate => {
     return {
       ...prestate,
         email : "jackphilip@gmail.com",
        isFavorite:!prestate.isFavorite
     }
   })

  }

  return (
      <main>
        <article className="card">
          <img src="./images/user.png" className="card--image" />
          <div className="card--info">
              <Star filled={contact.isFavorite}  handleClick={toggleFavorite} />
              <h2 className="card--name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p  className="card--contact">{contact.email}</p>
          </div>
        </article>
      </main>
  )
}