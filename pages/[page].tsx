import Head from "next/head";
import { excludedGeneratedPaths } from "../config/excludedGeneratedPaths";
import { fetchAPI } from "../lib/api";
import ErrorComponent from "@/components/elements/ui/ErrorComponent";
import PageComponentBuilderController from "@/components/elements/ui/PageComponentBuilderController";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const GenericPage = ({
  apiBasicPageData,
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(page, "api basic");
  if (apiBasicPageData) {
    return (
      <>
        <Head>
          <title>{page}</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
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
  const excludedPaths = ["home", "products-range"];
  let generatedPaths = basicPageData
    .map((basicPageDataElement: any) => {
      return {
        params: {
          page: basicPageDataElement.attributes.slug,
          id: basicPageDataElement.id,
        },
      };
    })
    .filter((path: any) => {
      const isPathExist = excludedPaths.find(
        (page) => page === path.params.page
      );
      if (!isPathExist) {
        return path;
      }
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
export const getStaticProps: GetStaticProps<{
  page: string;
  apiBasicPageData: any;
}> = async ({ params }) => {
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

  return {
    props: {
      apiBasicPageData: data,
      page: params?.page as string,
    },
  };
};

export default GenericPage;
