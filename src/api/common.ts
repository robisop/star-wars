export interface SwapiListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ListItemData[];
}

export interface ListItemData {
  id: string;
  title: string;
  subtitle: string;
}
