import Head from "next/head";

import { excludedGeneratedPaths } from "../config/excludedGeneratedPaths";
import { fetchAPI } from "../lib/api";
import ErrorComponent from "@/components/elements/ui/ErrorComponent";
import PageComponentBuilderController from "@/components/elements/ui/PageComponentBuilderController";
import { GetStaticProps } from "next";

const GenericPage = ({ apiBasicPageData }: { apiBasicPageData: any }) => {
  if (apiBasicPageData) {
    return (
      <>
        <Head>
          <title>BB Next Component Builder</title>
          {/* <link rel="shortcut icon" href="/favicon/icon-48x48.png" /> */}
        </Head>
        <PageComponentBuilderController
          pageContent={apiBasicPageData.attributes.page_components}
        />
      </>
    );
  }

  return <ErrorComponent message="Error: Page data not found." />;
};

// Gets all the paths for the type basic-pages and generates an object for GetStaticProps
export async function getStaticPaths() {
  const { data: basicPageData } = await fetchAPI("basi-pages");

  let generatedPaths = basicPageData.map((basicPageDataElement: any) => {
    return {
      params: {
        page: basicPageDataElement.attributes.slug,
        id: basicPageDataElement.id,
      },
    };
  });

  generatedPaths = generatedPaths.filter((generatedPath: any) => {
    if (!excludedGeneratedPaths.includes(generatedPath.params.page)) {
      return generatedPath;
    }
  });

  return {
    paths: generatedPaths,
    fallback: false,
  };
}

// Gets all the data for the type basic-pages and generates an object each page
export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
  const { data: basicPageData } = await fetchAPI("basi-pages");

  const generatedPaths = basicPageData.map((basicPageDataElement: any) => {
    return {
      params: {
        page: basicPageDataElement.attributes.slug,
        id: basicPageDataElement.id,
      },
    };
  });

  const getPageIdFromPath = () => {
    const filteredPaths = generatedPaths.filter(
      (path: any) => path.params.page === params?.page
    );

    if (filteredPaths.length > 0) {
      const generatedPathsFiltered = filteredPaths[0].params.id;

      return generatedPathsFiltered;
    }

    return null;
  };

  const pagePopulation = ["deep"];
  const { data } = await fetchAPI(
    `basi-pages/${getPageIdFromPath()}`,
    pagePopulation
  );
  console.log(data, "gdg");
  return {
    props: {
      apiBasicPageData: data,
    },
  };
};

export default GenericPage;
