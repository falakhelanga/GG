import { ReactElement } from "react";
import ErrorComponent from "./ErrorComponent";
import LatestArticle from "./LatestArticle";

const PageComponentBuilderController = ({
  pageContent,
}: {
  pageContent: any[];
}): ReactElement => {
  return pageContent.map((pageContentItem, idx) => {
    console.log(pageContentItem, "page content");
    const layouts: any = {
      "layout.latest-article": <LatestArticle {...pageContentItem} />,
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
