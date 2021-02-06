import React, { useState, useContext } from "react";
import { TextField, Button, FormControl } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { GrudgeContext } from "../../ContextProvider/ContextProvider";
import { GrudgeType } from "../../types/types";
//styles:
import { style, ClassesType } from "./style";
type ChangeEventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

type Props = {
  classes: ClassesType;
};

const OBJ_INITIAL_STATE = {
  person: "",
  reason: "",
  id: "",
  forgiven: false,
};

/**
 * @description form to add a new grudge
 * @param {Object} {classes MUI classes}
 * @returns {JSX} markup
 */
const NewGrudgeForm: React.FC<Props> = ({ classes }): JSX.Element => {
  const [objGrudge, setObjGrudge] = useState<GrudgeType>(OBJ_INITIAL_STATE);
  const { submitGrudge } = useContext(GrudgeContext);

  /**
   * @description input change handler
   * @param {Object} objEvt change event object
   * @returns {undefined} sets local state
   */
  const handleChange = (objEvt: ChangeEventType) => {
    const { name, value } = objEvt.target;
    setObjGrudge((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * @description form submit handler
   * @param {Object} objEvt form event object
   * @returns {undefined} validates, fires an action and sets local state
   */
  const handleSubmit = (objEvt: React.FormEvent) => {
    objEvt.preventDefault();
    if (
      !objGrudge.person ||
      !objGrudge.reason ||
      objGrudge.person.length === 0 ||
      objGrudge.reason.length === 0
    )
      return;
    submitGrudge(objGrudge);
    setObjGrudge(OBJ_INITIAL_STATE);
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
        value={objGrudge?.person || ""}
        onChange={handleChange}
      />
      <TextField
        className={classes.form__input}
        type="text"
        label="reason"
        variant="outlined"
        name="reason"
        value={objGrudge?.reason || ""}
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

export default withStyles(style)(NewGrudgeForm);
