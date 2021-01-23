import React from "react";
import ContextProvider from "../../components/GrudgeList/ContextProvider";
import GrudgeList from "../../components/GrudgeList";

const GrudgeListPage: React.FC = () => {
  return (
    <ContextProvider>
      <GrudgeList />
    </ContextProvider>
  );
};

export default GrudgeListPage;
