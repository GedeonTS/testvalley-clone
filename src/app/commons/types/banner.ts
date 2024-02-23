export interface BannerProps {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  creator?: string;
  updater?: string;
  deleter?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface BannersProps {
  banners: BannerProps[];
}
