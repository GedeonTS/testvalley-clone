export class ItemCollection {
  imageUrl: string;
  title: string;
  subtitle: string;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  finalPrice: string;
  discountRate: number;
  symbol: string;
  rating: number;
  preface: string;
  prefaceIconUrl: string;
  productUrl: string;

  constructor(data: Partial<ItemCollection>) {
    this.imageUrl = data.imageUrl || '';
    this.title = data.title || '';
    this.subtitle = data.subtitle || '';
    this.tagsOnImage = data.tagsOnImage || [];
    this.tagsOnDesc = data.tagsOnDesc || [];
    this.finalPrice = data.finalPrice || '';
    this.discountRate = data.discountRate || 0;
    this.symbol = data.symbol || '';
    this.rating = data.rating || 0;
    this.preface = data.preface || '';
    this.prefaceIconUrl = data.prefaceIconUrl || '';
    this.productUrl = data.productUrl || '';
  }
}

export class ItemCollectionData {
  title: string;
  subtitle: string;
  list: ItemCollection[];

  constructor(data: Partial<ItemCollectionData>) {
    this.title = data.title || '';
    this.subtitle = data.subtitle || '';
    this.list = data.list || [];
  }
}

export type Collections = {
  items: CollectionsItem[];
  totalCount: number;
};

export type CollectionsItem = {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: null;
  installmentPrice: null;
  installmentPeriod: null;
  rating: number;
  startDate: Date;
  endDate: Date;
  viewType: string;
  createdAt: Date;
  items: ItemItem[];
  media: Thumbnail[];
  thumbnail: Thumbnail;
  taggings: Tagging[];
  singleCollections: any[];
};

export type ItemItem = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  uuid: string;
  name: string;
  body: Date;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: null;
  publication: Publication;
  prdType: number;
};

export type Publication = {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface: string;
  prefaceIconUrl: string;
  productName: string;
  brandName: string;
  media: Media[];
  isTrial: boolean;
  tagsOnImage: any[];
  tagsOnDesc: string[];
  priceInfo: PriceInfo;
  discounts: Discount[];
  applyCoupon: boolean;
};

export type Discount = {
  id: number;
  name: Date;
  type: string;
  calcMethod: string;
  value: number;
  activeFrom: null;
  activeTo: null;
  qty: number;
  remain: null;
};

export type Media = {
  seq: number;
  type: string;
  uri: string;
  mimeType: string;
  deviceType: null;
};

export type PriceInfo = {
  price: number;
  discountPrice: number;
  discountRate: number;
  couponDiscountPrice: number;
  couponDiscountRate: number;
};

export type Thumbnail = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: null;
  collectionId: number;
  seq: number;
  itemKey: null;
  type: string;
};

export type Tagging = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  collectionId: number;
  tagId: number;
  isOpen: boolean;
  tag: Tag;
};

export type Tag = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  id: number;
  code: string;
  name: string;
  description: Date;
  type: string;
};

export class Convert {
  public static toCollections(json: string): Collections {
    return JSON.parse(json);
  }

  public static collectionsToJson(value: Collections): string {
    return JSON.stringify(value);
  }
}
