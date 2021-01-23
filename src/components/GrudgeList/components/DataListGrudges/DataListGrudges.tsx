import React, { useContext, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Card, CardContent } from "@material-ui/core";
import { GrudgeContext } from "../../ContextProvider/ContextProvider";
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};
const DataListGrudges: React.FC<Props> = ({ classes }): JSX.Element => {
  const [strSelectedGrudge, setStrSelectedGrudge] = useState<string>("");
  const { arrGrudges } = useContext(GrudgeContext);

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
        />
        <datalist id="grudges">
          {arrGrudges.map(({ reason, id }) => (
            <option key={id} value={reason} />
          ))}
        </datalist>
      </CardContent>
    </Card>
  );
};

export default withStyles(style)(DataListGrudges);
