import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import UndoIcon from "@material-ui/icons/Undo";

type Props = {
  handleClick: () => void;
  bDisabled: boolean;
};

/**
 * @description functonal component, undo button
 * @param {Boolean} {bDisabled is button disabled
 * @param {Functon} handleClick} callback on button click
 * @returns {JSX} component markup
 */
const UndoButton = ({ bDisabled, handleClick }: Props): JSX.Element => {
  return (
    <IconButton onClick={handleClick} disabled={bDisabled}>
      <Tooltip title="Undo the last">
        <UndoIcon color="primary" />
      </Tooltip>
    </IconButton>
  );
};

export default UndoButton;
