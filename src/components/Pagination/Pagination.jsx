import React from "react";
import "./Pagination.css";
const Pagination = ({
  prevLink,
  nextLink,
  handlePrevAndNextLink,
  countProduct,
}) => {
  const totalPages = Math.ceil(countProduct / 4);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <div style={{ clear: "both" }} />
          <div className="pagination">
            <div className="wp-pagenavi" role="navigation">
              {/* <span className="pages">1 / 2</span> */}
              <a
                className="previouspostslink"
                rel="prev"
                aria-label="Previous Page"
                onClick={() => handlePrevAndNextLink(prevLink, "prev")}
                href="#/"
                // style={{ display: "none" }}
              >
                «
              </a>
              {pages.map((page) => (
                <span
                  key={page}
                  aria-current="page"
                  className={`page larger ${page === 1 ? "current" : ""}`}
                >
                  {page}
                </span>
              ))}
              <a
                className="nextpostslink"
                rel="next"
                aria-label="Next Page"
                href="#/"
                onClick={() => handlePrevAndNextLink(nextLink, "next")}
              >
                »
              </a>
            </div>
          </div>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
