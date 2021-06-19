import { Helmet } from "react-helmet";

const ReactHelmet = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Portfolio</title>
      </Helmet>
    </>
  );
};

export default ReactHelmet;
