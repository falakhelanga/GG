export const imageFormatter = (image: any) =>
  `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.data.attributes.url}`;
