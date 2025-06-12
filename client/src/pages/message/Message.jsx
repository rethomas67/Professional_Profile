import React from "react";
import { useQuery } from "@apollo/client";
import { MESSAGES } from "../../utils/queries";
import MessageList from "../../components/messagelist/MessageList";
import "./assets/styles/styles.css";
const Message = () => {
  const { loading, data } = useQuery(MESSAGES);

  const messages = data?.messages || [];

  return (
    <div className="container">
      <div className="User_Body">
        <div className="title">Messages</div>

        <MessageList messages={messages} />
      </div>
    </div>
  );
};

export default Message;
