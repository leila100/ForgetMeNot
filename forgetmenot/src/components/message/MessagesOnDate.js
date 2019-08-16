import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { Messages } from "../../styles/messagesStyles";
import { DateFormat } from "../../styles/messagesStyles";
import Message from "./Message";
import MessageModal from "../messageModal/MessageModal";

const MessagesOnDate = ({ date, row, updateMessage, deleteMessage, showSent }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);

  const messagesList = useSelector(state => state.messagesReducer).messages;
  let messages = messagesList.filter(
    message => moment(message.date).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")
  );
  if (!showSent) messages = messages.filter(message => !message.sent);
  if (messages.length > 0)
    messages.sort((a, b) => {
      const d1 = new Date(a.date);
      const d2 = new Date(b.date);
      if (moment(d1).isSameOrBefore(d2)) return -1;
      else return 1;
    });

  function handleClickOpen(message) {
    if (message && message.sent) return; //If message was sent, can't edit it
    setOpen(true);
    setMessage(message);
  }

  function handleClose() {
    setOpen(false);
    setMessage(null);
  }
  const handleUpdate = updatedMessage => {
    updateMessage(message.id, updatedMessage);
  };

  return (
    <>
      {messages.length > 0 && (
        <>
          <DateFormat textColor={row}>{moment(date).format("dddd, MMMM Do YYYY")}</DateFormat>
          <Messages row={row}>
            {messages.map(message => (
              <Message
                message={message}
                row={row}
                handleOpen={handleClickOpen}
                deleteMessage={deleteMessage}
                key={message.id}
              />
            ))}
          </Messages>
          <MessageModal
            open={open}
            handleClose={handleClose}
            date={date}
            handleSubmit={handleUpdate}
            message={message}
          />
        </>
      )}
    </>
  );
};

export default MessagesOnDate;
