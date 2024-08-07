import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'  
import './CalendarComponent.css';
export default function Calendar() {

  return (
    <div className='calendar-container'>
    <FullCalendar
      plugins={[ dayGridPlugin]}
      events={[
        { title: 'Robotics Competition', date: '2024-10-06' },
        { title: 'Robotics Meet', date: '2024-10-07' }
      ]}
    />
    </div>
  )
}