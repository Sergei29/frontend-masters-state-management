import React from "react";
import { Typography } from "@material-ui/core";
import Pagination from "../../components/Pagination";

const PaginationPage: React.FC = (): JSX.Element => {
  const funcOnPageChange = (intPage: number) => {
    console.log("Page: ", intPage);
  };

  return (
    <div>
      <Typography variant="h3"> Pagination</Typography>
      <Pagination
        intItemsPerPage={5}
        intTotalItems={58}
        funcCallback={funcOnPageChange}
      />
    </div>
  );
};

export default PaginationPage;
