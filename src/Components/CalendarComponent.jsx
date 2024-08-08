import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'  
import './CalendarComponent.css';
export default function Calendar() {

  return (
    <div className='calendar-container'>
    <FullCalendar
      plugins={[ dayGridPlugin]}
      events={[
        { title: 'Season Kick off', date: '2024-09-07' }
      ]}
    />
    </div>
  )
}