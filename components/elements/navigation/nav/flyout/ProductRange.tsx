import React from "react";

const ProductRange = () => {
  const MENU_ITEMS_COL_1: {
    title: string;
    subtitle: string;
    links: Array<{ text: string; link: string }>;
  }[] = [
    {
      title: "essential wash",
      subtitle: "(Odour & irritation control)",
      links: [{ text: "Essential Daily Comfort Intimate Wash", link: "#" }],
    },
    {
      title: "ultimate wash",
      subtitle: "(Odour & irritation control)",
      links: [{ text: "Essential Daily Comfort Intimate Wash", link: "#" }],
    },
  ];

  const MENU_ITEMS_COL_2: {
    title: string;
    subtitle: string | null;
    links: Array<{ text: string; link: string }>;
  }[] = [
    {
      title: "teen washes",
      subtitle: null,
      links: [
        {
          text: "Lightly Fragranced Moisturising Daily Gentle Intimate Body Wash",
          link: "#",
        },
        {
          text: "Lightly Fragranced Moisturising Daily Gentle Intimate Body Wash",
          link: "#",
        },
      ],
    },
    {
      title: "foam baths",
      subtitle: null,
      links: [
        {
          text: "Lightly Fragranced Foam Bath",
          link: "#",
        },
        {
          text: "Fragrance Free Foam Bath",
          link: "#",
        },
      ],
    },
  ];

  const MENU_ITEMS_COL_3: {
    title: string;
    subtitle: string | null;
    links: Array<{ text: string; link: string }>;
  }[] = [
    {
      title: "comfort range",
      subtitle: null,
      links: [
        {
          text: "Intimate cleansing pH Bar",
          link: "#",
        },
        {
          text: "Unscented Regular Pantyliners",
          link: "#",
        },
        {
          text: "Daily Comfort Sensitive Wipes",
          link: "#",
        },
      ],
    },
    {
      title: "foam baths",
      subtitle: null,
      links: [
        {
          text: "Lightly Fragranced Foam Bath",
          link: "#",
        },
        {
          text: "Fragrance Free Foam Bath",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="absolute w-screen bg-white  ">
      <div>
        {MENU_ITEMS_COL_1.map(({ title, subtitle, links }, idx) => {
          return <div key={idx}></div>;
        })}
      </div>
      <div>
        {MENU_ITEMS_COL_1.map(({ title, subtitle, links }, idx) => {
          return <div key={idx}></div>;
        })}
      </div>
      <div>
        {MENU_ITEMS_COL_1.map(({ title, subtitle, links }, idx) => {
          return <div key={idx}></div>;
        })}
      </div>
    </div>
  );
};

export default ProductRange;
