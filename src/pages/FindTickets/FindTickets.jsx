import {useState, useEffect} from 'react'
import './FindTickets.scss'
import Card from '../../components/UI/card/Card.jsx'
import Footer from '../../components/Footer/Footer';
import defaultEvents from '../../constants/events.js'

export default function FindTickets() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <main>
      <div className="find-tickets__wrapper">
      <div className="container__default">
          <p className="find-default__text">New Events</p>
          <div className='find-default__grid'>
          {defaultEvents.map((event) => (
              <Card title={event.title} week={event.week}  time={event.time} price={event.price} descr={event.description} img={event.image} />
            ))}
          </div>
        </div>

        <div className="container">

        {events.length === 0 ? (
          <p className="find-tickets__error">You have no events</p>
        ) : (
          <div>
            <p className='find-tickets__true'>Your events</p>
            <div className="find-tickets__grid">
              {events.map(event => (
                <Card key={event.id} {...event} />
              ))}
            </div>
          </div>
        )}

          
        </div>
      </div>

    <Footer />
    </main>
  )
}
