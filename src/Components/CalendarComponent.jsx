import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const CalendarApp = () => {
  const googleCalendarApiKey =  import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  return (
    <div>
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={googleCalendarApiKey}  
      events={{
        googleCalendarId: 'cf24533a5a742a776862c66fe6eedfd1ccb9bcbdee195a6c82ec3367fd2cbc2d@group.calendar.google.com', 
      }}
        aspectRatio={1} 
        contentHeight="auto"
    />
    </div>
  );
};

export default CalendarApp;
