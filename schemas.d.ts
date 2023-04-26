import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  DynamicZoneAttribute,
  RichTextAttribute,
  CustomField,
  ComponentAttribute,
  MediaAttribute,
  SingleTypeSchema,
  ComponentSchema,
} from "@strapi/strapi";

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: "Permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: JSONAttribute & DefaultTo<{}>;
    conditions: JSONAttribute & DefaultTo<[]>;
    role: RelationAttribute<"admin::permission", "manyToOne", "admin::role">;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: "User";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    username: StringAttribute;
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    registrationToken: StringAttribute & PrivateAttribute;
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    roles: RelationAttribute<"admin::user", "manyToMany", "admin::role"> &
      PrivateAttribute;
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    preferedLanguage: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> &
      PrivateAttribute;
    updatedBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> &
      PrivateAttribute;
  };
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: "Role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute;
    users: RelationAttribute<"admin::role", "manyToMany", "admin::user">;
    permissions: RelationAttribute<
      "admin::role",
      "oneToMany",
      "admin::permission"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> &
      PrivateAttribute;
    updatedBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> &
      PrivateAttribute;
  };
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: "Api Token";
    singularName: "api-token";
    pluralName: "api-tokens";
    displayName: "Api Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<"">;
    type: EnumerationAttribute<["read-only", "full-access", "custom"]> &
      RequiredAttribute &
      DefaultTo<"read-only">;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      "admin::api-token",
      "oneToMany",
      "admin::api-token-permission"
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: "API Token Permission";
    description: "";
    singularName: "api-token-permission";
    pluralName: "api-token-permissions";
    displayName: "API Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      "admin::api-token-permission",
      "manyToOne",
      "admin::api-token"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferToken extends CollectionTypeSchema {
  info: {
    name: "Transfer Token";
    singularName: "transfer-token";
    pluralName: "transfer-tokens";
    displayName: "Transfer Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<"">;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      "admin::transfer-token",
      "oneToMany",
      "admin::transfer-token-permission"
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferTokenPermission extends CollectionTypeSchema {
  info: {
    name: "Transfer Token Permission";
    description: "";
    singularName: "transfer-token-permission";
    pluralName: "transfer-token-permissions";
    displayName: "Transfer Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      "admin::transfer-token-permission",
      "manyToOne",
      "admin::transfer-token"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: "file";
    pluralName: "files";
    displayName: "File";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    alternativeText: StringAttribute;
    caption: StringAttribute;
    width: IntegerAttribute;
    height: IntegerAttribute;
    formats: JSONAttribute;
    hash: StringAttribute & RequiredAttribute;
    ext: StringAttribute;
    mime: StringAttribute & RequiredAttribute;
    size: DecimalAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    previewUrl: StringAttribute;
    provider: StringAttribute & RequiredAttribute;
    provider_metadata: JSONAttribute;
    related: RelationAttribute<"plugin::upload.file", "morphToMany">;
    folder: RelationAttribute<
      "plugin::upload.file",
      "manyToOne",
      "plugin::upload.folder"
    > &
      PrivateAttribute;
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: "folder";
    pluralName: "folders";
    displayName: "Folder";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute;
    parent: RelationAttribute<
      "plugin::upload.folder",
      "manyToOne",
      "plugin::upload.folder"
    >;
    children: RelationAttribute<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.folder"
    >;
    files: RelationAttribute<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.file"
    >;
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: "locale";
    pluralName: "locales";
    collectionName: "locales";
    displayName: "Locale";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: StringAttribute & UniqueAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: "permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute & RequiredAttribute;
    role: RelationAttribute<
      "plugin::users-permissions.permission",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: "role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    description: StringAttribute;
    type: StringAttribute & UniqueAttribute;
    permissions: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.permission"
    >;
    users: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.user"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: "user";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: StringAttribute;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    confirmationToken: StringAttribute & PrivateAttribute;
    confirmed: BooleanAttribute & DefaultTo<false>;
    blocked: BooleanAttribute & DefaultTo<false>;
    role: RelationAttribute<
      "plugin::users-permissions.user",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiArcticleArcticle extends CollectionTypeSchema {
  info: {
    singularName: "arcticle";
    pluralName: "arcticles";
    displayName: "articles";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    article_components: DynamicZoneAttribute<
      [
        "layout.button",
        "layout.colors",
        "layout.feminine-hygiene",
        "layout.hero",
        "layout.latest-article-card",
        "layout.latest-article",
        "layout.text-block",
        "layout.text-blocks-row",
        "layout.text-image",
        "layout.videos",
        "products.products-navigation",
        "products.products"
      ]
    >;
    slug: StringAttribute;
    intro_text: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "toolbar";
        }
      >;
    title: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "toolbar";
        }
      >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::arcticle.arcticle",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::arcticle.arcticle",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiBasiPageBasiPage extends CollectionTypeSchema {
  info: {
    singularName: "basi-page";
    pluralName: "basi-pages";
    displayName: "basic pages";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: StringAttribute;
    page_components: DynamicZoneAttribute<
      [
        "layout.button",
        "layout.colors",
        "layout.feminine-hygiene",
        "layout.hero",
        "layout.latest-article-card",
        "layout.latest-article",
        "layout.text-block",
        "layout.videos",
        "products.products-navigation",
        "products.products"
      ]
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::basi-page.basi-page",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::basi-page.basi-page",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiButtonVariantButtonVariant extends CollectionTypeSchema {
  info: {
    singularName: "button-variant";
    pluralName: "button-variants";
    displayName: "Button Variants";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    variant: StringAttribute;
    Video: ComponentAttribute<"layout.videos", true>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::button-variant.button-variant",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::button-variant.button-variant",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiCategorieCategorie extends CollectionTypeSchema {
  info: {
    singularName: "categorie";
    pluralName: "categories";
    displayName: "categories";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: StringAttribute;
    description: RichTextAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::categorie.categorie",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::categorie.categorie",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiColorColor extends CollectionTypeSchema {
  info: {
    singularName: "color";
    pluralName: "colors";
    displayName: "colors";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: StringAttribute;
    value: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::color.color",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::color.color",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiGynaguardPromiseGynaguardPromise
  extends CollectionTypeSchema {
  info: {
    singularName: "gynaguard-promise";
    pluralName: "gynaguard-promises";
    displayName: "gynaguard promises";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: MediaAttribute;
    products: RelationAttribute<
      "api::gynaguard-promise.gynaguard-promise",
      "oneToMany",
      "api::product.product"
    >;
    text: RichTextAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::gynaguard-promise.gynaguard-promise",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::gynaguard-promise.gynaguard-promise",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiHomePageHomePage extends SingleTypeSchema {
  info: {
    singularName: "home-page";
    pluralName: "home-pages";
    displayName: "home page";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: ComponentAttribute<"layout.hero">;
    products: RelationAttribute<
      "api::home-page.home-page",
      "oneToMany",
      "api::product.product"
    >;
    home_page_components: DynamicZoneAttribute<
      [
        "layout.button",
        "layout.colors",
        "layout.feminine-hygiene",
        "layout.hero",
        "layout.videos",
        "products.products-navigation",
        "products.products"
      ]
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::home-page.home-page",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::home-page.home-page",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiProductProduct extends CollectionTypeSchema {
  info: {
    singularName: "product";
    pluralName: "products";
    displayName: "products";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: StringAttribute;
    subContent: RichTextAttribute;
    subContentBullets: RichTextAttribute;
    image: MediaAttribute;
    description: RichTextAttribute;
    quantities: RichTextAttribute;
    category: RelationAttribute<
      "api::product.product",
      "oneToOne",
      "api::categorie.categorie"
    >;
    reviews: RelationAttribute<
      "api::product.product",
      "oneToMany",
      "api::review.review"
    >;
    subcategories: RelationAttribute<
      "api::product.product",
      "manyToMany",
      "api::subcategory.subcategory"
    >;
    isNew: BooleanAttribute & DefaultTo<false>;
    dischemLink: StringAttribute;
    clicksLink: StringAttribute;
    checkersLink: StringAttribute;
    gynaguard_promise: RelationAttribute<
      "api::product.product",
      "manyToOne",
      "api::gynaguard-promise.gynaguard-promise"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::product.product",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::product.product",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiProductsRangeProductsRange extends SingleTypeSchema {
  info: {
    singularName: "products-range";
    pluralName: "products-ranges";
    displayName: "products-range";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    products: ComponentAttribute<"products.products">;
    navigation: ComponentAttribute<"products.products-navigation">;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::products-range.products-range",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::products-range.products-range",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiReviewReview extends CollectionTypeSchema {
  info: {
    singularName: "review";
    pluralName: "reviews";
    displayName: "reviews";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: StringAttribute;
    content: RichTextAttribute;
    rating: DecimalAttribute;
    product: RelationAttribute<
      "api::review.review",
      "manyToOne",
      "api::product.product"
    >;
    colour: EnumerationAttribute<["pink", "blue", "grey"]>;
    testing: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "toolbar";
        }
      >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::review.review",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::review.review",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiSubcategorySubcategory extends CollectionTypeSchema {
  info: {
    singularName: "subcategory";
    pluralName: "subcategories";
    displayName: "subcategories";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    products: RelationAttribute<
      "api::subcategory.subcategory",
      "manyToMany",
      "api::product.product"
    >;
    name: StringAttribute;
    description: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::subcategory.subcategory",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::subcategory.subcategory",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface LayoutButton extends ComponentSchema {
  info: {
    displayName: "button";
    description: "";
  };
  attributes: {
    text: StringAttribute;
    link: StringAttribute;
    button_variant: RelationAttribute<
      "layout.button",
      "oneToOne",
      "api::button-variant.button-variant"
    >;
  };
}

export interface LayoutColors extends ComponentSchema {
  info: {
    displayName: "colors";
  };
  attributes: {
    color: EnumerationAttribute<
      [
        "GG Pink",
        "Dark Pink",
        "Light Pink",
        "GG Turquoise",
        "Light Turquoise",
        "Beige",
        "Off-white",
        "Grey",
        "White"
      ]
    >;
  };
}

export interface LayoutFeminineHygiene extends ComponentSchema {
  info: {
    displayName: "feminineHygiene";
    description: "";
  };
  attributes: {
    desktop_background_image: MediaAttribute;
    toolBarVersion: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "toolbar";
        }
      >;
    toolBarBalloonVersion: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "toolbarBaloon";
        }
      >;
    blockBalloonVersion: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "blockBaloon";
        }
      >;
    customVersion: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "custom";
        }
      >;
    mobile_background_image: MediaAttribute;
  };
}

export interface LayoutHero extends ComponentSchema {
  info: {
    displayName: "hero";
    description: "";
  };
  attributes: {
    desktopImages: MediaAttribute;
    button: ComponentAttribute<"layout.button">;
    mobileImages: MediaAttribute;
  };
}

export interface LayoutLatestArticleCard extends ComponentSchema {
  info: {
    displayName: "latest article card";
    description: "";
  };
  attributes: {
    top_right_text: StringAttribute & DefaultTo<"latest article">;
    read_more_link_text: StringAttribute & DefaultTo<"read more">;
  };
}

export interface LayoutLatestArticle extends ComponentSchema {
  info: {
    displayName: "Latest article";
    description: "";
  };

  desktop_background_image: MediaAttribute;
  latest_article_card: ComponentAttribute<"layout.latest-article-card">;
  article: RelationAttribute<
    "layout.latest-article",
    "oneToOne",
    "api::arcticle.arcticle"
  >;
  mobile_background_image: MediaAttribute;
}

export interface LayoutTextBlock extends ComponentSchema {
  info: {
    displayName: "Text Block";
  };
  attributes: {
    Text: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "toolbar";
        }
      >;
  };
}

export interface LayoutTextBlocksRow extends ComponentSchema {
  info: {
    displayName: "Text blocks row";
  };
  attributes: {
    Text_block: ComponentAttribute<"layout.text-block", true>;
  };
}

export interface LayoutTextImage extends ComponentSchema {
  info: {
    displayName: "Text image Block";
    description: "";
  };
  attributes: {
    text: RichTextAttribute &
      CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "toolbar";
        }
      >;
    desktop_image: MediaAttribute;
    mobile_image: MediaAttribute;
  };
}

export interface LayoutVideos extends ComponentSchema {
  info: {
    displayName: "Videos";
  };
  attributes: {
    video_url: StringAttribute;
  };
}

export interface ProductsProductsNavigation extends ComponentSchema {
  info: {
    displayName: "products navigation";
    description: "";
  };
  attributes: {
    categories: RelationAttribute<
      "products.products-navigation",
      "oneToMany",
      "api::categorie.categorie"
    >;
    activeColor: ComponentAttribute<"layout.colors">;
    hoverColor: ComponentAttribute<"layout.colors">;
    borderColor: ComponentAttribute<"layout.colors", true>;
  };
}

export interface ProductsProducts extends ComponentSchema {
  info: {
    displayName: "products";
  };
  attributes: {
    products: RelationAttribute<
      "products.products",
      "oneToMany",
      "api::product.product"
    >;
  };
}

declare global {
  namespace Strapi {
    interface Schemas {
      "admin::permission": AdminPermission;
      "admin::user": AdminUser;
      "admin::role": AdminRole;
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "api::arcticle.arcticle": ApiArcticleArcticle;
      "api::basi-page.basi-page": ApiBasiPageBasiPage;
      "api::button-variant.button-variant": ApiButtonVariantButtonVariant;
      "api::categorie.categorie": ApiCategorieCategorie;
      "api::color.color": ApiColorColor;
      "api::gynaguard-promise.gynaguard-promise": ApiGynaguardPromiseGynaguardPromise;
      "api::home-page.home-page": ApiHomePageHomePage;
      "api::product.product": ApiProductProduct;
      "api::products-range.products-range": ApiProductsRangeProductsRange;
      "api::review.review": ApiReviewReview;
      "api::subcategory.subcategory": ApiSubcategorySubcategory;
      "layout.button": LayoutButton;
      "layout.colors": LayoutColors;
      "layout.feminine-hygiene": LayoutFeminineHygiene;
      "layout.hero": LayoutHero;
      "layout.latest-article-card": LayoutLatestArticleCard;
      "layout.latest-article": LayoutLatestArticle;
      "layout.text-block": LayoutTextBlock;
      "layout.text-blocks-row": LayoutTextBlocksRow;
      "layout.text-image": LayoutTextImage;
      "layout.videos": LayoutVideos;
      "products.products-navigation": ProductsProductsNavigation;
      "products.products": ProductsProducts;
    }
  }
}
