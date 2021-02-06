import React, { useContext, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Card, CardContent } from "@material-ui/core";
import { GrudgeContext } from "../../ContextProvider/ContextProvider";
//components:
import UndoButton from "./components/UndoButton/UndoButton";
import RedoButton from "./components/RedoButton/RedoButton";
import ResetStateButton from "./components/ResetStateButton/ResetStateButton";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

/**
 * @description datalist component
 * @param {Object} props component props
 * @returns {JSX} markup
 */
const DataListGrudges: React.FC<Props> = ({ classes }): JSX.Element => {
  const [strSelectedGrudge, setStrSelectedGrudge] = useState<string>("");

  const { objState, undoTheLast, redoTheLast, resetState } = useContext(
    GrudgeContext
  );

  const { grudges: arrGrudges } = objState.present;
  const bDisableUndo = objState.past.length === 0;
  const bDisableRedo = objState.future.length === 0;
  const bDisableReset =
    bDisableUndo && bDisableRedo && objState.present.grudges.length === 0;

  /**
   * @description input change handler
   * @param {Object} objEvent input change event object
   * @returns {undefined} sets local state
   */
  const handleChange = (objEvent: React.ChangeEvent<HTMLInputElement>) =>
    setStrSelectedGrudge(() => objEvent.target.value);

  return (
    <Card className={classes.dataList}>
      <CardContent className={classes.dataList__contnent}>
        <TextField
          name="grudge"
          id="grudge"
          label="search grudge"
          inputProps={{ list: "grudges" }}
          onChange={handleChange}
          value={strSelectedGrudge}
          variant="outlined"
        />
        <datalist id="grudges">
          {arrGrudges.map(({ reason, id }) => (
            <option key={id} value={reason} />
          ))}
        </datalist>
      </CardContent>
      <UndoButton handleClick={undoTheLast} bDisabled={bDisableUndo} />
      <RedoButton handleClick={redoTheLast} bDisabled={bDisableRedo} />
      <ResetStateButton handleClick={resetState} bDisabled={bDisableReset} />
    </Card>
  );
};

export default withStyles(style)(DataListGrudges);
