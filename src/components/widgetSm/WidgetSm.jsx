import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    const displayUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/user?new=true`, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYThjNTZkODIzYjQ3MDM2ZjQzNzg5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyNTQ4MSwiZXhwIjoxNjc0MTU3NDgxfQ.kgudZMDluBdxjFYDY_5HXE8GmXS0gsO6aOmNsiOtw2A" 
          },
        });
       setuser(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    displayUser()
  });
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {user?.map(us => (
        <li className="widgetSmListItem">

          <img
          src={us?.profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
          alt=""
          className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{us?.username}</span>
           
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        
            ))}
     
        
       
      </ul>
    </div>
  );
}
