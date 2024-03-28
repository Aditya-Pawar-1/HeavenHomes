import React, { useContext } from "react";
import { AboutDataContext } from "../utils/context/AboutContext";

const Info = ({ index }) => {
  const [items] = useContext(AboutDataContext);

  return (
    <div key={index} className="w-[60%] text-primary mb-5">
      {items.map((elem, ind) => {
        const { title, description } = elem;
        const { para, listItems } = description;

        if (ind === index) {
          return (
            <div key={ind}>
              <h3 className="text-center font-semibold text-xl mb-2">{title}</h3>
              {para && <p>{para}</p>}
              <ul className="list-disc">
                {listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span>{item.subtitle}</span>
                    <p>{item.subdescription}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        } else {
          console.log("not found", index); // Moved console.log outside of JSX
          return null; // Return null for items that don't match the index
        }
      })}
    </div>
  );
};

export default Info;
