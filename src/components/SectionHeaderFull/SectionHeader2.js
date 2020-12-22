import React from "react";
import "./SectionHeader2.scss";

function SectionHeader2(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle && !props.description && !props.description2 && !props.description3 && !props.description4 && !props.description5 && !props.description6 && !props.description7 && !props.listItem1 && !props.listItem2 && !props.listItem3 && !props.listItem4 && !props.listTitle1 && !props.listTitle2) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1
          className={
            "font-weight-bold" +
            (props.subtitle && props.spaced ? " mb-4" : "") +
            (!props.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
        >
          {props.title}
        </h1>
      )}

      {props.subtitle && (
        <p className="SectionHeader__subtitle mb-4">{props.subtitle}</p>
      )}

{props.description && (
        <p className="SectionHeader__description mb-4 mt-4">{props.description}</p>
      )}

{props.description1 && (
        <p className="SectionHeader__descriptions mt-4 mb-4">{props.description1}</p>
      )}
      {props.description2 && (
        <p className="SectionHeader__descriptions mb-4">{props.description2}</p>
      )}
      {props.description3 && (
        <p className="SectionHeader__descriptions mb-4">{props.description3}</p>
      )}
      {props.description4 && (
        <p className="SectionHeader__descriptions mb-4">{props.description4}</p>
      )}
      {props.description5 && (
        <p className="SectionHeader__descriptions mb-4">{props.description5}</p>
      )}
      {props.description6 && (
        <p className="SectionHeader__descriptions mb-4">{props.description6}</p>
      )}
      {props.description7 && (
        <p className="SectionHeader__descriptions mb-4">{props.description7}</p>
      )}
      <ul>
      {props.listTitle1 && (
        <li className="SectionHeader__listitem__title">{props.listTitle1}</li>
      )}
      {props.listItem1 && (
        <li className="SectionHeader__listitem">{props.listItem1}</li>
      )}
            {props.listItem2 && (
        <li className="SectionHeader__listitem">{props.listItem2}</li>
      )}
            {props.listTitle2 && (
        <li className="SectionHeader__listitem__title">{props.listTitle2}</li>
      )}
            {props.listItem3 && (
        <li className="SectionHeader__listitem">{props.listItem3}</li>
      )}
                  {props.listItem4 && (
        <li className="SectionHeader__listitem">{props.listItem4}</li>
      )}
      </ul>
    </header>
  );
}

export default SectionHeader2;
