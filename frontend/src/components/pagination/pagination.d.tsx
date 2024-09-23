export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (nextPage: number) => void;
}
