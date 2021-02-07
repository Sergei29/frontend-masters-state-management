import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useForm from "./useForm";
import { FormStateType } from "./types/types";
//styles:
import { style, ClassesType } from "./style";

const objInitialState: FormStateType = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  investmentInterest: "",
};

type Props = {
  classes: ClassesType;
};

/**
 * @description functional component, form
 * @param {Object} props componet props
 * @returns {JSX} component markup
 */
const FormUnicornReducer = ({ classes }: Props): JSX.Element => {
  /**
   * @description getting form state managed by custom hook with reducer
   */
  const { objState, setObjState } = useForm(objInitialState);
  const {
    userName,
    email,
    password,
    confirmPassword,
    investmentInterest,
  } = objState;

  /**
   * @description function generator for input event
   * @returns {Function} input event handler function
   */
  const handleChange = () => (
    objEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = objEvent.target;
    setObjState({
      ...objState,
      [name]: value,
    });
  };

  /**
   * @description form submit handler
   * @param {Object} objEvent form event object
   * @returns {undefined}
   */
  const handleSubmit = (objEvent: React.FormEvent) => {
    objEvent.preventDefault();
    console.log("submit form data :>> ", objState);
    clearForm();
  };

  /**
   * @description clear fields handler
   * @returns {undefined} resets to initial values
   */
  const clearForm = () => setObjState(objInitialState);

  return (
    <Card component="form" className={classes.form} onSubmit={handleSubmit}>
      <CardContent className={classes.formContent}>
        <Typography variant="h5" align="center" color="secondary">
          Amazig Unicorn startup
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <small>
            We don't have actually a product or a way to make money yet, but why
            don't you sign up anyway just in case we shall do well in future ?
          </small>
        </Typography>
        <FormControl className={classes.formContent__item}>
          <TextField
            variant="outlined"
            name="userName"
            label="Username"
            type="text"
            value={userName}
            onChange={handleChange()}
          />
        </FormControl>
        <FormControl className={classes.formContent__item}>
          <TextField
            variant="outlined"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleChange()}
          />
        </FormControl>
        <FormControl className={classes.formContent__item}>
          <TextField
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleChange()}
          />
        </FormControl>
        <FormControl className={classes.formContent__item}>
          <TextField
            variant="outlined"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleChange()}
          />
        </FormControl>
        <FormControl className={classes.formContent__item}>
          <TextField
            variant="outlined"
            name="investmentInterest"
            label="Investment Interest"
            type="text"
            value={investmentInterest}
            onChange={handleChange()}
          />
        </FormControl>
      </CardContent>
      <CardActions className={classes.formActions}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button variant="outlined" color="default" onClick={clearForm}>
          Reset
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(style)(FormUnicornReducer);
