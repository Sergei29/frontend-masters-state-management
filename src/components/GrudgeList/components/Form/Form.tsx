import React, { useState } from "react";
import { TextField, Button, FormControl } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { GrudgeType } from "../../types/types";
//styles:
import { style, ClassesType } from "./style";
type ChangeEventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

type Props = {
  classes: ClassesType;
  submitCallback: (objGrudge: GrudgeType) => void;
};

const OBJ_INITIAL_STATE = {
  person: "",
  reason: "",
  id: "",
  forgiven: false,
};

const Form: React.FC<Props> = ({ classes, submitCallback }) => {
  const [objState, setObjState] = useState<GrudgeType>(OBJ_INITIAL_STATE);

  const handleChange = (objEvt: ChangeEventType) => {
    const { name, value } = objEvt.target;
    setObjState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (objEvt: React.FormEvent) => {
    objEvt.preventDefault();
    console.log("submit");

    if (
      !objState.person ||
      !objState.reason ||
      objState.person.length === 0 ||
      objState.reason.length === 0
    )
      return;
    submitCallback(objState);
    setObjState(OBJ_INITIAL_STATE);
  };

  return (
    <FormControl
      className={classes.form}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        className={classes.form__input}
        type="text"
        variant="outlined"
        label="person"
        name="person"
        value={objState?.person || ""}
        onChange={handleChange}
      />
      <TextField
        className={classes.form__input}
        type="text"
        label="reason"
        variant="outlined"
        name="reason"
        value={objState?.reason || ""}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        classes={{ root: classes.form__button }}
      >
        Add new
      </Button>
    </FormControl>
  );
};

export default withStyles(style)(Form);
