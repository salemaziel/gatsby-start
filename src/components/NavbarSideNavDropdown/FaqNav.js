import React from "react";
import FaqItemNav from "./FaqItemNav";

function FaqNav(props) {
  return (
    <>
      {props.items.map((item, index) => (
        <FaqItemNav 
        question={item.question} 
        answer={item.answer} 
        key={index} 
        listItem1={item.listItem1}
        listItem2={item.listItem2}
        link1={item.link1}
        linkTitle1={item.linkTitle1}
        link2={item.link2}
        linkTitle2={item.linkTitle2}
        link3={item.link3}
        linkTitle3={item.linkTitle3}
        link4={item.link4}
        linkTitle4={item.linkTitle4}
        link5={item.link5}
        linkTitle5={item.linkTitle5}

        
        />
      ))}
    </>
  );
}

export default FaqNav;
