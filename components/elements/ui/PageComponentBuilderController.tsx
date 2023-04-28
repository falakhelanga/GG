import { ReactElement } from "react";
import ErrorComponent from "./ErrorComponent";
import LatestArticle from "./LatestArticle";
import SlidingHero from "./SlidingHero";
import GynaguardProductRangeHeading from "./GynaguardProductRangeHeading";
import { ColoursEnum } from "@/enums/colourEnum";
import Products from "@/components/sections/homepage/products/Products";
import ProductsNavigation from "./ProductsNavigation";
import TextBlock from "./TextBlock";
import TextBlocksRow from "./TextBlocksRow";
import QuoteText from "./QuoteText";
import ImageBlock from "./ImageBlock";
import ImageBlocksRow from "./ImageBlocksRow";

const PageComponentBuilderController = ({
  pageContent,
}: {
  pageContent: any[];
}): ReactElement => {
  return pageContent.map((pageContentItem, idx) => {
    console.log(pageContentItem, "page content");
    const layouts: any = {
      "layout.latest-article": <LatestArticle {...pageContentItem} />,
      "layout.hero": <SlidingHero heroData={pageContentItem} />,
      "layout.gyanaguard-product-range-heading": (
        <GynaguardProductRangeHeading
          {...pageContentItem}
          color={ColoursEnum[pageContentItem.color]}
        />
      ),
      "products.products-slider": <Products {...pageContentItem} />,
      "products.products-navigation": (
        <ProductsNavigation {...pageContentItem} />
      ),
      "layout.text-block": <TextBlock {...pageContentItem} />,
      "layout.text-blocks-row": <TextBlocksRow {...pageContentItem} />,
      "layout.quote-text": <QuoteText {...pageContentItem} />,
      "layout.image-block": <ImageBlock {...pageContentItem} />,
      "layout.image-blocks-row": <ImageBlocksRow {...pageContentItem} />,
      default: (
        <div key={`page-${idx}`}>
          {/* <ErrorComponent
            message={`Error on component generation. Tried to generate: ${pageContentItem.__component}`}
          /> */}
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
