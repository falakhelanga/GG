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
import VideoBlock from "./VideoBlock";
import VideoBlockRow from "./VideoBlockRow";
import ProductBlock from "./ProductBlock";
import ProductsRow from "./ProductsRow";
import Blogs from "./Blogs";
import FormBlock from "./FormBlock";
import PageHeader from "./PageHeader";
import ContactFormPage from "./ContactFormPage";
import HeadingMarkDown from "./HeadingMarkDown";
import Row from "./Row";
import IntroCopy from "./IntroCopy";
import BadgesRow from "./BadgesRow";
import LinkButton from "./LinkButton";
import FeminineHygiene from "@/components/sections/homepage/feminineHygiene/FeminineHygiene";
import { useRouter } from "next/router";

const PageComponentBuilderController = ({
  pageContent,
  page,
}: {
  pageContent: any[];
  page?: any;
}): ReactElement => {
  const router = useRouter();
  return pageContent.map((pageContentItem, idx) => {
    console.log(pageContentItem, "page content");
    const layouts: any = {
      "layout.latest-article": <LatestArticle {...pageContentItem} />,
      "layout.hero": <SlidingHero heroData={pageContentItem} />,
      "layout.header": <PageHeader headerData={pageContentItem} />,
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
      "layout.videos": <VideoBlock {...pageContentItem} />,
      "layout.video-blocks-row": <VideoBlockRow {...pageContentItem} />,
      "layout.product-block": <ProductBlock {...pageContentItem} />,
      "layout.products-row": <ProductsRow {...pageContentItem} />,
      "layout.blogs": router.route !== "/" && <Blogs {...pageContentItem} />,
      "layout.form": <FormBlock {...pageContentItem} />,
      "layout.contact-form": <ContactFormPage {...pageContentItem} />,
      "layout.page-header": <PageHeader {...pageContentItem} />,
      "layout.heading": <HeadingMarkDown {...pageContentItem} />,
      "layout.row": <Row {...pageContentItem} />,
      "layout.intro-text": <IntroCopy {...pageContentItem} />,
      "layout.badges-row": <BadgesRow {...pageContentItem} />,
      "layout.link-button": <LinkButton {...pageContentItem} />,
      "layout.home-page-feminine-hygiene": (
        <FeminineHygiene {...pageContentItem} />
      ),

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
