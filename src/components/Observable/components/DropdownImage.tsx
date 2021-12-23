import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    image: {
      display: "block",
      width: "100%",
    },
  })
);

const DropdownImage = () => {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Pattern Schema</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={12} sm={8}>
            {" "}
            <img
              className={classes.image}
              src="https://res.cloudinary.com/dlw2jic1w/image/upload/v1639591237/Observer_pattern_cnw9e1.jpg"
              alt="pattern"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                {" "}
                <code>Weather</code> that acts as <code>Subject</code> of the
                “observer” pattern centralizing the weather in a city.
              </li>
              <li>
                <code>FavouriteCity</code> and <code>CityTeaser</code> acting as
                Observers by receiving through their{" "}
                <code>onWeatherChanged</code> method the update of the weather
                coming from the Weather class. These observers can request to be
                notified ( <code>notify</code> method) by means of the attach
                method of the “subject”.
              </li>
            </ul>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default DropdownImage;
