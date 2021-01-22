import React, { useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  intItemsPerPage: number;
  intTotalItems: number;
  funcCallback: (intPageNumber: number) => void;
};
const Pagination: React.FC<Props> = ({
  classes,
  intItemsPerPage,
  intTotalItems,
  funcCallback,
}): JSX.Element => {
  const [intCurrentPage, setIntCurrentPage] = useState(1);

  const arrButtons = [1, 2, 3, 4, 5];

  return (
    <div className={classes.pagination}>
      <IconButton className={classes.pagination__navButton}>
        <NavigateBeforeIcon />
      </IconButton>
      <div className={classes.pagination__buttons}>
        {arrButtons.map((intPage) => (
          <Button key={intPage}>{intPage}</Button>
        ))}
      </div>
      <IconButton className={classes.pagination__navButton}>
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
};

export default withStyles(style)(Pagination);
