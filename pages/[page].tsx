import ErrorComponent from "../components/elements/ErrorComponent";
import Head from "next/head";
import PageComponentBuilderController from "../components/controllers/PageComponentBuilderController";
import { excludedGeneratedPaths } from "../config/excludedGeneratedPaths";
import { fetchAPI } from "../lib/api";
import { GetStaticProps } from "next";

const GenericPage = ({ apiBasicPageData }: { apiBasicPageData: any }) => {
  if (apiBasicPageData) {
    return (
      <>
        <Head>
          <title>BB Next Component Builder</title>
          <link rel="shortcut icon" href="/favicon/icon-48x48.png" />
        </Head>

        <PageComponentBuilderController
          pageContent={apiBasicPageData.pageContent}
        />
      </>
    );
  }

  return <ErrorComponent message="Error: Page data not found." />;
};

// Gets all the paths for the type basic-pages and generates an object for GetStaticProps
export async function getStaticPaths() {
  const basicPageRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/basic-pages`
  );
  const basicPageData = await basicPageRes.json();

  let generatedPaths = basicPageData.data.map((basicPageDataElement: any) => {
    return {
      params: {
        page: basicPageDataElement.name,
        id: basicPageDataElement.id,
      },
    };
  });

  generatedPaths = generatedPaths.filter((generatedPath: any) => {
    if (!excludedGeneratedPaths.includes(generatedPath?.params?.page)) {
      return generatedPath;
    }
  });

  return {
    paths: generatedPaths,
    fallback: false,
  };
}

// Gets all the data for the type basic-pages and generates an object each page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const basicPageRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/basic-pages`
  );
  const basicPageData = await basicPageRes.json();

  const generatedPaths = basicPageData.data.map((basicPageDataElement: any) => {
    return {
      params: {
        page: basicPageDataElement.name,
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

  const [pageRes] = await Promise.all([
    fetchAPI(`/basic-pages/${getPageIdFromPath()}?populate=deep`, {}),
  ]);
  console.log(pageRes, "pagres");
  return {
    props: {
      apiBasicPageData: pageRes.data,
    },
  };
};

export default GenericPage;
