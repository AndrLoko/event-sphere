import {useState, useEffect} from 'react'
import './FindTickets.scss'
import Card from '../../components/UI/card/Card.jsx'
import Footer from '../../components/Footer/Footer';

export default function FindTickets() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <section>
      <div className="find-tickets__wrapper">
        <div className="container">
          <div className="find-tickets__grid">
              {events.length === 0 ? (
                <p className='find-tickets__error'>You have no events</p>
              ) : (
                events.map(event => (
                  <Card key={event.id} {...event} />
                ))
              )} 
          </div>
        </div>
      </div>

    <Footer />
    </section>
  )
}
