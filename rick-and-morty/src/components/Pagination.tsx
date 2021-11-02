import { useContext } from "react";
import ReactPaginate from "react-paginate";
import ServiceContext from "../contexts/serviceContext";

const Pagination = () => {
  const service = useContext(ServiceContext);

  function handlePageClick( selected: any ) {
    service.paginate(selected.selected+1);
  }
  return(
    <div className={service.filter !== ''? 'pagination-container borrar': 'pagination-container'}>
      {
        <ReactPaginate
        previousLabel={"← Prev"}
        nextLabel={"Next →"}
        pageCount={34}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1} />
      }
    </div>
  );
}

export default Pagination;
