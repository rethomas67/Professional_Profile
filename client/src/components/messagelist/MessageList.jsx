import React from "react";

const MessageList = ({ messages }) => {
  if (!messages.length) {
    return <h3>No messages in the queue!</h3>;
  }
  return (
    <div>
      {messages &&
        messages.map((message) => {
          const postDate = new Date(message.postDate).toLocaleString();
          return (
            <div className="Message_Container" key={message._id}>
              <div className="Salutation">
                <b>{message.name}</b> posted on {postDate}:
              </div>
              <div className="Message">{message.message}</div>
            </div>
          );
        })}
    </div>
  );
};

export default MessageList;
