import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";

type Props = {
  handleClick: () => void;
  bDisabled: boolean;
};

/**
 * @description functonal component, redo button
 * @param {Boolean} {bDisabled is button disabled
 * @param {Functon} handleClick} callback on button click
 * @returns {JSX} component markup
 */
const RedoButton = ({ bDisabled, handleClick }: Props): JSX.Element => {
  return (
    <IconButton onClick={handleClick} disabled={bDisabled}>
      <Tooltip title="Redo the last">
        <RedoIcon color="action" />
      </Tooltip>
    </IconButton>
  );
};

export default RedoButton;
