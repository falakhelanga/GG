import ErrorComponent from "../elements/ErrorComponent";
import HelloWorld from "../elements/HelloWorld";
import { HelloWorldType } from "../../types/Components/Elements";
import { ReactElement } from "react";

const PageComponentBuilderController = ({
  pageContent,
}: {
  pageContent: any[];
}): ReactElement => {
  return pageContent.map((pageContentItem, idx) => {
    const layouts: any = {
      "layout.helloworld": (
        <HelloWorld
          key={`page-${idx}`}
          {...(pageContentItem as HelloWorldType)}
        />
      ),
      default: (
        <div key={`page-${idx}`}>
          <ErrorComponent
            message={`Error on component generation. Tried to generate: ${pageContentItem.__component}`}
          />
        </div>
      ),
    };

    if (pageContentItem.__component in layouts) {
      return layouts[pageContentItem.__component];
    } else {
      return layouts.default;
    }
  }) as unknown as ReactElement;
  // TODO: Check return typing
};

export default PageComponentBuilderController;
