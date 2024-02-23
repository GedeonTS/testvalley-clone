export interface ShortcutProps {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
  creator?: string;
  updater?: string;
  deleter?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface ShortcutsProps {
  shortcuts: ShortcutProps[];
}
