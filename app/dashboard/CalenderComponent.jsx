
// "use client";
// import React, { useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { useDispatch, useSelector } from "react-redux";
// import { calenderData } from "../reducers/DashBoardSlice";

// const CalendarComponent = () => {
//   const { mockApiData } = useSelector((state) => state?.dash);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   // Define color palette for different services
//   const serviceColors = [
//     { bg: '#3B82F6', border: '#2563EB', text: '#FFFFFF' }, // Blue
//     { bg: '#10B981', border: '#059669', text: '#FFFFFF' }, // Green
//     { bg: '#F59E0B', border: '#D97706', text: '#FFFFFF' }, // Yellow
//     { bg: '#EF4444', border: '#DC2626', text: '#FFFFFF' }, // Red
//     { bg: '#8B5CF6', border: '#7C3AED', text: '#FFFFFF' }, // Purple
//     { bg: '#06B6D4', border: '#0891B2', text: '#FFFFFF' }, // Cyan
//     { bg: '#EC4899', border: '#DB2777', text: '#FFFFFF' }, // Pink
//     { bg: '#84CC16', border: '#65A30D', text: '#FFFFFF' }, // Lime
//     { bg: '#F97316', border: '#EA580C', text: '#FFFFFF' }, // Orange
//     { bg: '#6366F1', border: '#4F46E5', text: '#FFFFFF' }, // Indigo
//   ];

//   // Function to get color based on service name or index
//   const getEventColor = (serviceName, index) => {
//     if (serviceName) {
//       // Create a simple hash from service name for consistent coloring
//       const hash = serviceName.split('').reduce((a, b) => {
//         a = ((a << 5) - a) + b.charCodeAt(0);
//         return a & a;
//       }, 0);
//       return serviceColors[Math.abs(hash) % serviceColors.length];
//     }
//     return serviceColors[index % serviceColors.length];
//   };

//   // Function to convert 24-hour time to 12-hour format with AM/PM
//   const convertTo12Hour = (time24) => {
//     if (!time24) return '';
//     const [hours, minutes] = time24.split(':');
//     const hour12 = hours % 12 || 12;
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     return `${hour12}:${minutes} ${ampm}`;
//   };

//   // Function to transform API data to calendar events
//   const transformApiDataToEvents = (apiData) => {
//     console.log("Raw API Data:", apiData);
    
//     if (!apiData || !Array.isArray(apiData)) {
//       console.warn("API data is not an array or is null/undefined:", apiData);
//       return [];
//     }

//     const transformedEvents = apiData.map((item, index) => {
//       if (!item.date || !item.slot_start) {
//         console.warn("Missing required fields in item:", item);
//         return null;
//       }

//       let startDateTime, endDateTime;
      
//       try {
//         startDateTime = `${item.date}T${item.slot_start}`;
//         endDateTime = item.slot_end ? `${item.date}T${item.slot_end}` : null;
        
//         if (isNaN(Date.parse(startDateTime))) {
//           console.warn("Invalid start date format:", startDateTime);
//           return null;
//         }
//       } catch (error) {
//         console.error("Error creating date-time:", error);
//         return null;
//       }

//       const serviceName = item.service?.service_name || 'Unnamed Service';
//       const eventColor = getEventColor(serviceName, index);

//       const event = {
//         id: item.id ? item.id.toString() : `event-${index}`,
//         title: serviceName,
//         start: startDateTime,
//         end: endDateTime,
//         backgroundColor: eventColor.bg,
//         borderColor: eventColor.border,
//         textColor: eventColor.text,
//         classNames: ['custom-event'],
//         extendedProps: {
//           customer: item.customer || {},
//           service: item.service || {},
//           slotStart: convertTo12Hour(item.slot_start),
//           slotEnd: convertTo12Hour(item.slot_end),
//           customerName: item.customer?.name || item.customer?.first_name || '',
//           customerEmail: item.customer?.email || '',
//           customerMobile: item.customer?.mobile || '',
//           colorScheme: eventColor
//         }
//       };

//       console.log("Transformed event:", event);
//       return event;
//     }).filter(event => event !== null);

//     console.log("Final transformed events:", transformedEvents);
//     return transformedEvents;
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     setLoading(true);
//     setError(null);
    
//     dispatch(calenderData())
//       .then((res) => {
//         console.log("API Response:", res);
        
//         if (res?.payload?.status_code === 200) {
//           const apiData = res?.payload?.data;
//           console.log("Extracted API data:", apiData);
          
//           const transformedEvents = transformApiDataToEvents(apiData);
//           console.log("Setting events:", transformedEvents);
          
//           setEvents(transformedEvents);
          
//           if (transformedEvents.length === 0) {
//             console.warn("No events were created from API data");
//           }
//         } else {
//           console.error("API returned non-200 status:", res?.payload?.status_code);
//           setError("Failed to load calendar data");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching calendar data:", err);
//         setError("Error loading calendar data");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [dispatch]);

//   // Add new event by clicking date
//   const handleDateClick = (info) => {
//     const title = prompt("Enter Event Title:");
//     if (title) {
//       const randomColor = serviceColors[Math.floor(Math.random() * serviceColors.length)];
//       const newEvent = {
//         id: `manual-${Date.now()}`,
//         title,
//         start: info.dateStr,
//         backgroundColor: randomColor.bg,
//         borderColor: randomColor.border,
//         textColor: randomColor.text,
//         classNames: ['custom-event'],
//       };
//       console.log("Adding manual event:", newEvent);
//       setEvents(prevEvents => [...prevEvents, newEvent]);
//     }
//   };

//   // Handle event drop (drag & drop)
//   const handleEventDrop = (info) => {
//     console.log("Event dropped:", info.event.id, "to", info.event.startStr);
//     const updatedEvents = events.map((event) =>
//       event.id === info.event.id
//         ? { ...event, start: info.event.startStr }
//         : event
//     );
//     setEvents(updatedEvents);
//   };

//   // Handle event resize
//   const handleEventResize = (info) => {
//     console.log("Event resized:", info.event.id);
//     const updatedEvents = events.map((event) =>
//       event.id === info.event.id
//         ? { ...event, start: info.event.startStr, end: info.event.endStr }
//         : event
//     );
//     setEvents(updatedEvents);
//   };

//   // Custom event content renderer for better text fitting
//   const renderEventContent = (eventInfo) => {
//     const { extendedProps } = eventInfo.event;
//     const title = eventInfo.event.title;
    
//     return (
//       <div className="custom-event-content" style={{ 
//         padding: '2px 4px',
//         fontSize: '11px',
//         lineHeight: '1.2',
//         overflow: 'hidden'
//       }}>
//         <div 
//           style={{ 
//             fontWeight: '600',
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             marginBottom: '1px'
//           }}
//           title={title} // Tooltip for full title
//         >
//           {title}
//         </div>
//         {extendedProps?.slotStart && extendedProps?.slotEnd && (
//           <div style={{ 
//             opacity: '0.9',
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             fontSize: '10px'
//           }}>
//             {extendedProps.slotStart} - {extendedProps.slotEnd}
//           </div>
//         )}
//         {extendedProps?.customerName && (
//           <div style={{ 
//             opacity: '0.8',
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             fontSize: '10px'
//           }}
//           title={extendedProps.customerName}
//           >
//             {extendedProps.customerName}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white rounded-[10px] p-7 mb-14">
//       {loading && <div className="text-center py-4">Loading calendar data...</div>}
      
//       {/* Custom CSS for better event styling */}
//       <style jsx>{`
//         .custom-event {
//           border-radius: 4px !important;
//           border-width: 1px !important;
//           margin: 1px 0 !important;
//           font-size: 11px !important;
//           padding: 1px 3px !important;
//           cursor: pointer;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//           transition: all 0.2s ease;
//         }
        
//         .custom-event:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
//         }
        
//         .fc-event-title {
//           font-weight: 600 !important;
//           overflow: hidden !important;
//           text-overflow: ellipsis !important;
//           white-space: nowrap !important;
//         }
        
//         .fc-daygrid-event {
//           margin-top: 1px !important;
//           margin-bottom: 1px !important;
//         }
        
//         .fc-event-main {
//           padding: 1px 3px !important;
//         }
        
//         .fc-daygrid-event-harness {
//           margin-top: 1px !important;
//           margin-bottom: 1px !important;
//         }
        
//         /* Ensure events fit within cells */
//         .fc-daygrid-day-events {
//           margin-bottom: 2px !important;
//         }
        
//         .fc-event {
//           font-size: 11px !important;
//           line-height: 1.2 !important;
//         }
//       `}</style>
      
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         dateClick={handleDateClick}
//         editable={true}
//         selectable={true}
//         droppable={true}
//         eventDrop={handleEventDrop}
//         eventResize={handleEventResize}
//         eventContent={renderEventContent}
//         height="auto"
//         dayMaxEvents={3} // Limit events per day for better fitting
//         moreLinkClick="popover" // Show popover for additional events
//         eventDisplay="block" // Ensure events display as blocks
        
//         // Additional styling options
//         headerToolbar={{
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,timeGridDay'
//         }}
        
//         // Event handling for better UX
//         eventDidMount={(info) => {
//           console.log("Event mounted:", info.event.title, info.event.start);
//           // Add tooltip for long titles
//           info.el.setAttribute('title', `${info.event.title}\n${info.event.extendedProps.slotStart || ''} - ${info.event.extendedProps.slotEnd || ''}`);
//         }}
        
//         eventDataTransform={(eventData) => {
//           console.log("Event data transform:", eventData);
//           return eventData;
//         }}
        
//         // Better mobile responsiveness
//         aspectRatio={1.8}
//         contentHeight="auto"
//       />
      
//       {!loading && events.length === 0 && (
//         <div className="text-center py-8 text-gray-500">
//           No events to display. Click on a date to add an event.
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;





"use client";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { calenderData } from "../reducers/DashBoardSlice";

const CalendarComponent = () => {
  const { mockApiData } = useSelector((state) => state?.dash);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tooltip, setTooltip] = useState({
    show: false,
    x: 0,
    y: 0,
    content: null
  });
  const dispatch = useDispatch();

  // Define color palette for different services
  const serviceColors = [
    { bg: '#3B82F6', border: '#2563EB', text: '#FFFFFF' }, // Blue
    { bg: '#10B981', border: '#059669', text: '#FFFFFF' }, // Green
    { bg: '#F59E0B', border: '#D97706', text: '#FFFFFF' }, // Yellow
    { bg: '#EF4444', border: '#DC2626', text: '#FFFFFF' }, // Red
    { bg: '#8B5CF6', border: '#7C3AED', text: '#FFFFFF' }, // Purple
    { bg: '#06B6D4', border: '#0891B2', text: '#FFFFFF' }, // Cyan
    { bg: '#EC4899', border: '#DB2777', text: '#FFFFFF' }, // Pink
    { bg: '#84CC16', border: '#65A30D', text: '#FFFFFF' }, // Lime
    { bg: '#F97316', border: '#EA580C', text: '#FFFFFF' }, // Orange
    { bg: '#6366F1', border: '#4F46E5', text: '#FFFFFF' }, // Indigo
  ];

  // Function to get color based on service name or index
  const getEventColor = (serviceName, index) => {
    if (serviceName) {
      // Create a simple hash from service name for consistent coloring
      const hash = serviceName.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0);
      return serviceColors[Math.abs(hash) % serviceColors.length];
    }
    return serviceColors[index % serviceColors.length];
  };

  // Function to convert 24-hour time to 12-hour format with AM/PM
  const convertTo12Hour = (time24) => {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');
    const hour12 = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Function to transform API data to calendar events
  const transformApiDataToEvents = (apiData) => {
    console.log("Raw API Data:", apiData);
    
    if (!apiData || !Array.isArray(apiData)) {
      console.warn("API data is not an array or is null/undefined:", apiData);
      return [];
    }

    const transformedEvents = apiData.map((item, index) => {
      if (!item.date || !item.slot_start) {
        console.warn("Missing required fields in item:", item);
        return null;
      }

      let startDateTime, endDateTime;
      
      try {
        startDateTime = `${item.date}T${item.slot_start}`;
        endDateTime = item.slot_end ? `${item.date}T${item.slot_end}` : null;
        
        if (isNaN(Date.parse(startDateTime))) {
          console.warn("Invalid start date format:", startDateTime);
          return null;
        }
      } catch (error) {
        console.error("Error creating date-time:", error);
        return null;
      }

      const serviceName = item.service?.service_name || 'Unnamed Service';
      const eventColor = getEventColor(serviceName, index);

      const event = {
        id: item.id ? item.id.toString() : `event-${index}`,
        title: serviceName,
        start: startDateTime,
        end: endDateTime,
        backgroundColor: eventColor.bg,
        borderColor: eventColor.border,
        textColor: eventColor.text,
        classNames: ['custom-event'],
        extendedProps: {
          customer: item.customer || {},
          service: item.service || {},
          slotStart: convertTo12Hour(item.slot_start),
          slotEnd: convertTo12Hour(item.slot_end),
          customerName: item.customer?.name || item.customer?.first_name || 'N/A',
          customerEmail: item.customer?.email || 'N/A',
          customerMobile: item.customer?.mobile || '',
          colorScheme: eventColor
        }
      };

      console.log("Transformed event:", event);
      return event;
    }).filter(event => event !== null);

    console.log("Final transformed events:", transformedEvents);
    return transformedEvents;
  };

  // Fetch data on component mount
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    dispatch(calenderData())
      .then((res) => {
        console.log("API Response:", res);
        
        if (res?.payload?.status_code === 200) {
          const apiData = res?.payload?.data;
          console.log("Extracted API data:", apiData);
          
          const transformedEvents = transformApiDataToEvents(apiData);
          console.log("Setting events:", transformedEvents);
          
          setEvents(transformedEvents);
          
          if (transformedEvents.length === 0) {
            console.warn("No events were created from API data");
          }
        } else {
          console.error("API returned non-200 status:", res?.payload?.status_code);
          setError("Failed to load calendar data");
        }
      })
      .catch((err) => {
        console.error("Error fetching calendar data:", err);
        setError("Error loading calendar data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  // Add new event by clicking date
  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      const randomColor = serviceColors[Math.floor(Math.random() * serviceColors.length)];
      const newEvent = {
        id: `manual-${Date.now()}`,
        title,
        start: info.dateStr,
        backgroundColor: randomColor.bg,
        borderColor: randomColor.border,
        textColor: randomColor.text,
        classNames: ['custom-event'],
      };
      console.log("Adding manual event:", newEvent);
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }
  };

  // Handle event drop (drag & drop)
  const handleEventDrop = (info) => {
    console.log("Event dropped:", info.event.id, "to", info.event.startStr);
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.startStr }
        : event
    );
    setEvents(updatedEvents);
  };

  // Handle event resize
  const handleEventResize = (info) => {
    console.log("Event resized:", info.event.id);
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.startStr, end: info.event.endStr }
        : event
    );
    setEvents(updatedEvents);
  };

  // Handle event mouse enter for tooltip
  const handleEventMouseEnter = (info) => {
    const rect = info.el.getBoundingClientRect();
    const extendedProps = info.event.extendedProps;
    
    setTooltip({
      show: true,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      content: {
        serviceName: info.event.title,
        timeSlot: extendedProps.slotStart && extendedProps.slotEnd 
          ? `${extendedProps.slotStart} - ${extendedProps.slotEnd}` 
          : 'Time not available',
        customerName: extendedProps.customerName || 'N/A',
        customerEmail: extendedProps.customerEmail || 'N/A'
      }
    });
  };

  // Handle event mouse leave for tooltip
  const handleEventMouseLeave = () => {
    setTooltip({
      show: false,
      x: 0,
      y: 0,
      content: null
    });
  };

  // Custom event content renderer for better text fitting
  const renderEventContent = (eventInfo) => {
    const { extendedProps } = eventInfo.event;
    const title = eventInfo.event.title;
    
    return (
      <div className="custom-event-content" style={{ 
        padding: '2px 4px',
        fontSize: '11px',
        lineHeight: '1.2',
        overflow: 'hidden'
      }}>
        <div 
          style={{ 
            fontWeight: '600',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginBottom: '1px'
          }}
          title={title} // Tooltip for full title
        >
          {title}
        </div>
        {extendedProps?.slotStart && extendedProps?.slotEnd && (
          <div style={{ 
            opacity: '0.9',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '10px'
          }}>
            {extendedProps.slotStart} - {extendedProps.slotEnd}
          </div>
        )}
        {extendedProps?.customerName && extendedProps?.customerName !== 'N/A' && (
          <div style={{ 
            opacity: '0.8',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '10px'
          }}
          title={extendedProps.customerName}
          >
            {extendedProps.customerName}
          </div>
        )}
      </div>
    );
  };

  // Custom Tooltip Component
  const CustomTooltip = ({ tooltip }) => {
    if (!tooltip.show || !tooltip.content) return null;

    return (
      <div
        className="custom-tooltip"
        style={{
          position: 'fixed',
          left: tooltip.x,
          top: tooltip.y,
          transform: 'translate(-50%, -100%)',
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          fontSize: '13px',
          lineHeight: '1.4',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 10000,
          maxWidth: '280px',
          minWidth: '200px',
          pointerEvents: 'none'
        }}
      >
        <div style={{ marginBottom: '8px', fontWeight: '600', color: '#60a5fa' }}>
          📅 {tooltip.content.serviceName}
        </div>
        <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#9ca3af', marginRight: '8px' }}>🕒</span>
          <span>{tooltip.content.timeSlot}</span>
        </div>
        <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#9ca3af', marginRight: '8px' }}>👤</span>
          <span>{tooltip.content.customerName}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#9ca3af', marginRight: '8px' }}>📧</span>
          <span style={{ 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap' 
          }}>
            {tooltip.content.customerEmail}
          </span>
        </div>
        {/* Tooltip arrow */}
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid #1f2937'
          }}
        />
      </div>
    );
  };

  return (
    <div className="bg-white rounded-[10px] p-7 mb-14" style={{ position: 'relative' }}>
      {loading && <div className="text-center py-4">Loading calendar data...</div>}
      
      {/* Custom Tooltip */}
      <CustomTooltip tooltip={tooltip} />
      
      {/* Custom CSS for better event styling */}
      <style jsx>{`
        .custom-event {
          border-radius: 4px !important;
          border-width: 1px !important;
          margin: 1px 0 !important;
          font-size: 11px !important;
          padding: 1px 3px !important;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        
        .custom-event:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
        
        .fc-event-title {
          font-weight: 600 !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
        }
        
        .fc-daygrid-event {
          margin-top: 1px !important;
          margin-bottom: 1px !important;
        }
        
        .fc-event-main {
          padding: 1px 3px !important;
        }
        
        .fc-daygrid-event-harness {
          margin-top: 1px !important;
          margin-bottom: 1px !important;
        }
        
        /* Ensure events fit within cells */
        .fc-daygrid-day-events {
          margin-bottom: 2px !important;
        }
        
        .fc-event {
          font-size: 11px !important;
          line-height: 1.2 !important;
        }
        
        /* Tooltip styles */
        .custom-tooltip {
          animation: fadeIn 0.2s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -100%) translateY(5px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -100%) translateY(0);
          }
        }
      `}</style>
      
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
        droppable={true}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        eventContent={renderEventContent}
        eventMouseEnter={handleEventMouseEnter}
        eventMouseLeave={handleEventMouseLeave}
        height="auto"
        dayMaxEvents={3} // Limit events per day for better fitting
        moreLinkClick="popover" // Show popover for additional events
        eventDisplay="block" // Ensure events display as blocks
        
        // Additional styling options
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        
        // Event handling for better UX
        eventDidMount={(info) => {
          console.log("Event mounted:", info.event.title, info.event.start);
          // Remove default title attribute to prevent browser tooltip
          info.el.removeAttribute('title');
        }}
        
        eventDataTransform={(eventData) => {
          console.log("Event data transform:", eventData);
          return eventData;
        }}
        
        // Better mobile responsiveness
        aspectRatio={1.8}
        contentHeight="auto"
      />
      
      {!loading && events.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No events to display. Click on a date to add an event.
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;