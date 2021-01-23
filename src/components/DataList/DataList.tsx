import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography, Button } from "@material-ui/core";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

const DataList: React.FC<Props> = ({ classes }): JSX.Element => {
  const [strFruitSelected, setStrFruitSelected] = useState<string>("");

  const handleChangeFruit = (objEvent: React.ChangeEvent<HTMLInputElement>) =>
    setStrFruitSelected(() => objEvent.target.value);

  const handleSubmit = (objEvent: React.FormEvent) => {
    objEvent.preventDefault();
    alert("Fruit submitted: " + strFruitSelected);
  };

  return (
    <div className={classes.dataList}>
      <Typography variant="h4">DataList</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fruit">Choose your fruit from datalist:</label>
          <input
            name="fruit"
            id="fruit"
            list="fruits"
            onChange={handleChangeFruit}
            value={strFruitSelected}
          />
          <datalist id="fruits">
            <option value="Orange" />
            <option value="Banana" />
            <option value="Pineapple" />
            <option value="Grape" />
            <option value="Apple" />
          </datalist>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default withStyles(style)(DataList);
