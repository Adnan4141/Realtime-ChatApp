import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContex";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";
 




const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  const [time,setTime] = useState(null);

  useEffect(() => {
 
  }, [])
  

  const handleSendMessage = async (e) => {
    
    e.preventDefault();
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    const timeCal= hours +":"+ min;
    console.log(time)
    setTime(timeCal)
    
    
    if(value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        Msgtime: time,
        uid,
       
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
