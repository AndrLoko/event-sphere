import { useState, useEffect } from 'react';

const useEventsFromStorage = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsFromStorage = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(eventsFromStorage);
  }, []);

  return events;
};

export default useEventsFromStorage;