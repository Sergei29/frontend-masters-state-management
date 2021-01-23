import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Card, CardContent, Button, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import usePagination from "./hooks/usePagination";
import { Spill } from "./helpers/generatePages/generatePages";
//styles:
import { style, ClassesType } from "./style";

const { LEFT_SPILL, RIGHT_SPILL } = Spill;

type Props = {
  classes: ClassesType;
  intItemsPerPage: number;
  intTotalItems: number;
  intMaxPages: number;

  funcCallback: (intPageNumber: number) => void;
};
const Pagination: React.FC<Props> = ({
  classes,
  intItemsPerPage,
  intTotalItems,
  intMaxPages,
  funcCallback,
}): JSX.Element => {
  const {
    bPrevDisabled,
    bNextDisabled,
    intCurrentPage,
    funcGoToNext,
    funcGoToPage,
    funcGoToPrev,
    generatePageButtons,
  } = usePagination(intItemsPerPage, intTotalItems, intMaxPages, funcCallback);

  const arrButtons = generatePageButtons();

  return (
    <Card>
      <CardContent className={classes.pagination}>
        <IconButton
          className={classes.pagination__navButton}
          onClick={funcGoToPrev}
          disabled={bPrevDisabled}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <div className={classes.pagination__buttons}>
          {arrButtons.map((intPage) => {
            const buttonClass =
              intPage === intCurrentPage
                ? classes.pagination__pageButton_active
                : classes.pagination__pageButton;

            if (intPage === LEFT_SPILL || intPage === RIGHT_SPILL) {
              return (
                <div key={intPage} className={classes.pagination__spill}>
                  <MoreHorizIcon />{" "}
                </div>
              );
            }
            return (
              <Button
                key={intPage}
                onClick={() => funcGoToPage(intPage)}
                classes={{ root: buttonClass }}
              >
                {intPage}
              </Button>
            );
          })}
        </div>
        <IconButton
          className={classes.pagination__navButton}
          onClick={funcGoToNext}
          disabled={bNextDisabled}
        >
          <NavigateNextIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default withStyles(style)(Pagination);
