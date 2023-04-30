import React from "react";
import Button from "./Button";
import ContentWrap from "./ContentWrap";

const LinkButton = ({ buttonType, link, text }: any) => {
  return (
    <ContentWrap className="flex  justify-center md:mb-6 mb-6 ">
      <Button
        className="max-sm:text-sm max-sm text-center"
        link={link}
        variant={buttonType.type}
      >
        {text}
      </Button>
    </ContentWrap>
  );
};

export default LinkButton;
