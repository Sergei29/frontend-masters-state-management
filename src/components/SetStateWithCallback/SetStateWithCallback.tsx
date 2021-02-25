import React, { useState, useEffect, useRef } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
// import useStateWithCallback from "../../hooks/useStateWithCallback";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

/**
 * @description example of setting state with callback
 * @param {Object} props component props
 * @returns {JSX} component markup
 */
const SetStateWithCallback: React.FC<Props> = ({ classes }) => {
  const [strPhrase, setStrPhrase] = useState<string>("");

  const [state, setState] = useState(null);
  const myCallbacksList = useRef<((...rest: any) => void)[]>([]);

  const setStateWithCallback = (
    newState: any,
    callback: (currentState: any, ...rest: any) => void
  ) => {
    setState(() => newState);
    if (callback) myCallbacksList.current.push(callback);
  };

  useEffect(() => {
    myCallbacksList.current.forEach((callback) => callback(state));
    myCallbacksList.current = [];
  }, [state]);

  const funcCallback = (currentState: any) =>
    setStrPhrase(() => `New count: ${currentState}`);

  const funcTo3 = () => setStateWithCallback(3, funcCallback);

  const funcTo5 = () => setStateWithCallback(5, funcCallback);

  return (
    <Grid container>
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h3">Counter</Typography>
            <Typography>Count: {state}</Typography>
            <Typography>{strPhrase}</Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" onClick={funcTo3}>
              set to 3
            </Button>
            <Button variant="contained" onClick={funcTo5}>
              set to 5
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(SetStateWithCallback);
