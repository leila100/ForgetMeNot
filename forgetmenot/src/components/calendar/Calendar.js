import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/core/main.css";

import FMN from "../../assets/images/FMN1.png";
import { Header } from "../../styles/commonStyles";
import { CalendarPage, CalendarWrapper, Cal, Day } from "../../styles/calendarStyles";
import { Button } from "../../styles/commonStyles";
import MessagesList from "../message/MessagesList";
import MessageModal from "../messageModal/MessageModal";
import requireAuth from "../../hoc/requireAuth";

const Calendar = props => {
  const [date, setDate] = useState(Date.now());
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const handleSubmit = message => {
    // dispatch add message
    props.addMessageHandler(message);
    // addMessage(message)(dispatch);
  };

  const pickDate = arg => {
    const datePicked = arg.date;
    setDate(datePicked);
  };

  const dates = [date];
  return (
    <CalendarPage>
      <Header>
        <img src={FMN} alt='Forget Me Not Flower' />
        <div>
          <h1>Welcome to Forget Me Not</h1>
          <h2>See all your messages.</h2>
          <h2>Create new ones.</h2>
        </div>
      </Header>
      <CalendarWrapper>
        <Cal>
          <FullCalendar
            defaultView='dayGridMonth'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            dateClick={pickDate}
            selectable='true'
            handleWindowResize='true'
            eventSources={[
              {
                events: [
                  { start: new Date() },
                  { start: new Date("07/31/2019 10:00") },
                  { start: new Date("07/31/2019 14:00") }
                ],
                color: "#4c688f",
                textColor: "white"
              }
            ]}
          />
        </Cal>
        <Day>
          <Button onClick={handleClickOpen}>Schedule a message</Button>
          <MessagesList dates={dates} row />
        </Day>
      </CalendarWrapper>
      <MessageModal open={open} handleClose={handleClose} date={date} handleSubmit={handleSubmit} />
    </CalendarPage>
  );
};

export default requireAuth(Calendar);
