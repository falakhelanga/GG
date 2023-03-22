import ContentWrap from "./layout/ContentWrap";
import { Heading1 } from "./headers";
import { HelloWorldType } from "../../types/Components/Elements";

const HelloWorld = ({ title }: HelloWorldType) => {
  return (
    <div className="mb-14 lg:mb-16">
      <ContentWrap>
        <Heading1>{title}</Heading1>
      </ContentWrap>
    </div>
  );
};

export default HelloWorld;
