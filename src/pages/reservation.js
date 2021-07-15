import React from 'react';

const Reservation = () => {
    return (
      <div
        style={{
          // display: 'flex',
          // justifyContent: 'Right',
          // alignItems: 'Right',
          height: '100vh - 80px'
        }}
      >
        <h1>Ici se trouvent la réservation de chambres.</h1>
        
        <div><a href="https://www.booking.com/hotel/fr/le-relais-du-temple.html">Réservation sur Booking.com</a></div>
        <div><a href="https://www.gites.fr/gites_le-relais-du-temple_mornans_37928.htm">Réservation sur gites.fr</a></div>
        <div><a href="https://www.tripnbike.com/place/le-relais-du-temple">Réservation sur TripnBike</a></div>

        
      </div>
    );
  };
    
  export default Reservation;