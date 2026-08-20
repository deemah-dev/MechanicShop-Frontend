export interface PagenatedList<T> {
  page: number;
  size: number;
  totalPages: number;
  totalCount: number;
  values: Array<T>;
}
