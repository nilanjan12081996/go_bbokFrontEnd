// "use client";
// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction"; // needed for drag/drop, click

// const CalendarComponent = () => {
//   const [events, setEvents] = useState([
//     { title: "Meeting", date: "2025-09-01" },
//     { title: "Conference", date: "2025-09-05" },
//   ]);

//   const handleDateClick = (info) => {
//     const title = prompt("Enter Event Title:");
//     if (title) {
//       setEvents([...events, { title, date: info.dateStr }]);
//     }
//   };

//   return (
//     <div className="bg-white rounded-[10px] p-7 mb-14">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         dateClick={handleDateClick}
//         height="auto"
//       />
//     </div>
//   );
// };

// export default CalendarComponent;
"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for drag/drop, click

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    { id: "1", title: "Meeting", date: "2025-09-01" },
    { id: "2", title: "Conference", date: "2025-09-05" },
  ]);

  // Add new event by clicking date
  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: info.dateStr,
      };
      setEvents([...events, newEvent]);
    }
  };

  // Handle event drop (drag & drop)
  const handleEventDrop = (info) => {
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.startStr }
        : event
    );
    setEvents(updatedEvents);
  };

  // Handle event resize
  const handleEventResize = (info) => {
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.startStr, end: info.event.endStr }
        : event
    );
    setEvents(updatedEvents);
  };

  return (
    <div className="bg-white rounded-[10px] p-7 mb-14">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}          // enables drag & drop
        selectable={true}        // enables date selection
        droppable={true}         // allows dropping external items
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        height="auto"
      />
    </div>
  );
};

export default CalendarComponent;
