import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";

type Props = {
  handleClick: () => void;
  bDisabled: boolean;
};

/**
 * @description functonal component, reset state button
 * @param {Boolean} {bDisabled is button disabled
 * @param {Functon} handleClick} callback on button click
 * @returns {JSX} component markup
 */
const ResetStateButton = ({ bDisabled, handleClick }: Props): JSX.Element => {
  return (
    <IconButton onClick={handleClick} disabled={bDisabled}>
      <Tooltip title="Reset the state">
        <CachedIcon color="secondary" />
      </Tooltip>
    </IconButton>
  );
};

export default ResetStateButton;
