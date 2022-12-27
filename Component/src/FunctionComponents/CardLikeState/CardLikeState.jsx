import React from "react";
import { useState } from "react";
import ClassCompProps from "../../ClassComponents/ClassCompProps";
import { CardItem } from "./CardItem";
import "./Card.css";
export const CardLikeState = () => {
  const [profileDatas, setProfileDatas] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      isAlreadyLiked: false,
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      isAlreadyLiked: false,
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      isAlreadyLiked: false,
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      isAlreadyLiked: false,
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      isAlreadyLiked: false,
      phone: "(254)954-1289",
      website: "demarco.info",
    },
  ]);
  const [likes, setLikes] = useState({});
  function handleLikeFunc(id, isLiked) {
    setLikes((prev) => {
      return { ...prev, [id]: !isLiked };
    });
    // setProfileDatas((prev) => {
    //   return prev.map((elem) => {
    //     if (elem.id === id) {
    //       return { ...elem, isAlreadyLiked: !isLiked };
    //     } else {
    //       return { ...elem };
    //     }
    //   });
    // });
  }
  return (
    <div className="card-container">
      {profileDatas.map((elem) => {
        return (
          <CardItem
            key={elem.id}
            isLiked={
              likes.hasOwnProperty(elem.id)
                ? likes[elem.id]
                : elem.isAlreadyLiked
            }
            handleLikeFunc={handleLikeFunc}
            data={elem}
          />
          // <ClassCompProps data={elem} key={elem.id} />
        );
      })}
    </div>
  );
};
