import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import withStyles from "@material-ui/core/styles/withStyles";
//components:
import Form from "./components/Form";
import Grudge from "./components/Grudge";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

const GrudgeList: React.FC<Props> = ({ classes }) => {
  const [arrList, setArrList] = useState<Record<string, any>[]>([]);

  const submitGrudge = (objGrudge: Record<string, any>) => {
    const objNewGrudge = { ...objGrudge, id: uuidv4(), forgiven: false };
    setArrList((prevArrList) => [objNewGrudge, ...prevArrList]);
  };

  const toggleForgive = (id: string) =>
    setArrList((prevArrList) =>
      prevArrList.map((objGrudge) => {
        if (objGrudge.id === id) {
          return {
            ...objGrudge,
            forgiven: !objGrudge.forgiven,
          };
        }
        return objGrudge;
      })
    );
  const deleteGrudge = (id: string) =>
    setArrList((prevArrList) =>
      prevArrList.filter((objGrudge) => objGrudge.id !== id)
    );

  return (
    <div>
      <Form submitCallback={submitGrudge} />
      <div className={classes.grudgeLIst__list}>
        {arrList.length > 0 &&
          arrList.map((objGrudge) => (
            <Grudge
              key={objGrudge.id}
              person={objGrudge.person}
              reason={objGrudge.reason}
              id={objGrudge.id}
              forgiven={objGrudge.forgiven}
              onForgive={toggleForgive}
              onDelete={deleteGrudge}
            />
          ))}
      </div>
    </div>
  );
};

export default withStyles(style)(GrudgeList);
