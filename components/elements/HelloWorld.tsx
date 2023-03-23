import ContentWrap from "./layout/ContentWrap";

import { HelloWorldType } from "../../types/Components/Elements";

const HelloWorld = ({ title }: HelloWorldType) => {
  return (
    <div className="mb-14 lg:mb-16">
      <ContentWrap>
        <h1>{title}</h1>
      </ContentWrap>
    </div>
  );
};

export default HelloWorld;
