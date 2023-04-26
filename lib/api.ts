import qs from "qs";

export const fetchAPI = async (path: string, populate: string[] | {} = []) => {
  const query = qs.stringify(
    {
      populate: populate,
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?${query}`
  );
  const data = await res.json();
  return data;
};
