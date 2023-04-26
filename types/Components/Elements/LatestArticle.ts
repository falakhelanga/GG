export type LatestArticleCardType = {
  id: number;
  readMoreLinkText: string;
  topRightText: string;
};

export type LatestArticleType = {
  id: number;
  backgroundImage: string;
  latestArticleCard: LatestArticleCardType;
  article: ArticleType;
};

export type ArticleType = {
  createdAt: Date;
  title: string;
  introText: string;
  slug: string;
};
