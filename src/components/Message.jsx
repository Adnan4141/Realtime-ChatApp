import { UserAuth } from "../context/AuthContex";


const Message = ({message}) => {

    const { currentUser } = UserAuth();
    console.log(message)



  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
        </div>
        <div>
        <div className="chat-bubble">{message.text}</div>
        <p className="text-sm text-gray-400 ml-1 mt-1">{message.Msgtime}</p>
        </div>
      </div>
    </div>
  )
}

export default Message