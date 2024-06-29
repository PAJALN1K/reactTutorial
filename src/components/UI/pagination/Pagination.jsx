import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, changePage, page }) => {
  // ДЗ: сделать так, чтобы массив не пересчитывался на каждом рендере, используя useMemo
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page--current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
