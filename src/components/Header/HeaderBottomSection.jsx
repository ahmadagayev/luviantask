import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";
import LoginCart from "../LoginCart/LoginCart";

const HeaderBottomSection = ({ handleLogin ,handleMain}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerBottomClass = isSticky ? "sticky" : "";
  return (
    <React.Fragment>
      <section id="header-bottom-section" className={headerBottomClass}>
        <div className="container">
          <div className="row align-items-center">
            <Logo handleMain={handleMain}/>
            <Menu />
            <SearchBar />
            <LoginCart handleLogin={handleLogin} />
            <section id="sidebar" className="sidebar-section topsidebar">
              <div className="row v-mob">
                <div className="col-10">
                  <form
                    autoComplete="off"
                    className="search-form"
                    action="https://kontakt.az"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="s"
                        id="title-search-input"
                        placeholder="Axtarış..."
                      />
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={24} height={24} fill="white" />
                        <path
                          d="M13.4172 19.3517C13.0539 19.3517 12.7384 19.0831 12.6879 18.7137C12.6332 18.3103 12.9166 17.9392 13.3199 17.8853C17.1568 17.3681 20.0514 14.0562 20.061 10.1793C20.0523 6.27716 17.1351 2.96267 13.2695 2.46719C12.8661 2.41591 12.581 2.04647 12.6323 1.64313C12.6836 1.2398 13.0522 0.954678 13.4564 1.00596C18.0452 1.59445 21.5101 5.52004 21.5335 10.1488C21.5335 10.1532 21.5335 10.1584 21.5335 10.1628V10.1975C21.5335 10.2019 21.5335 10.2071 21.5335 10.2114C21.5092 14.809 18.0704 18.7311 13.5163 19.3456C13.4833 19.3491 13.4503 19.3517 13.4172 19.3517Z"
                          fill="#1D1D1B"
                        />
                        <path
                          d="M11.1719 19.393C11.1406 19.393 11.1093 19.3912 11.0772 19.3869C6.4727 18.7967 3 14.845 3 10.1962C3 5.57694 6.44662 1.62876 11.0172 1.01245C11.4214 0.958556 11.7917 1.24107 11.8456 1.6444C11.9004 2.04774 11.617 2.41891 11.2136 2.47281C7.37064 2.99089 4.47253 6.31146 4.47253 10.1962C4.47253 14.1061 7.39237 17.4293 11.2641 17.9257C11.6674 17.9778 11.9525 18.3464 11.9012 18.7497C11.8543 19.1218 11.537 19.393 11.1719 19.393Z"
                          fill="#1D1D1B"
                        />
                        <path
                          d="M19.9983 22.9997C19.7628 22.9997 19.5307 22.8867 19.3881 22.6772L16.1084 17.8537C15.8798 17.5173 15.9667 17.0592 16.3031 16.8297C16.6395 16.6011 17.0976 16.688 17.3271 17.0244L20.6068 21.848C20.8354 22.1844 20.7485 22.6425 20.4121 22.8719C20.2852 22.9589 20.1409 22.9997 19.9983 22.9997Z"
                          fill="#1D1D1B"
                        />
                        <path
                          d="M17.5758 9.30366C17.2446 9.30366 16.943 9.07852 16.8613 8.74212C16.0459 5.4172 13.0496 5.48935 12.9209 5.49282C12.5193 5.50586 12.1725 5.19293 12.156 4.78785C12.1386 4.38278 12.4506 4.04029 12.8557 4.02117C12.9009 4.01943 13.9675 3.9751 15.1601 4.49144C16.271 4.97214 17.7158 6.03872 18.2929 8.39094C18.3903 8.78645 18.1478 9.18544 17.7531 9.28193C17.6932 9.29671 17.634 9.30366 17.5758 9.30366Z"
                          fill="#E4133A"
                        />
                      </svg>
                    </div>
                  </form>
                </div>
                <div className="col-2 pl-0">
                  <div className="selectHolder lang_select">
                    <select>
                      <option value="az">az</option>
                      <option value="ru">ru</option>
                    </select>
                  </div>
                </div>
              </div>
              <ul
                className="product-menu product-menu-v2 hddjson1"
                style={{ visibility: "hidden" }}
              />
            </section>

            <div className="col-1 v-mob header-mob "></div>
            <div className="col-md-2 col-3 v-mob menu">
              <button className="ham-menu">
                <svg
                  version="1.1"
                  id="ham-menu"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636
      c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636
      c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636
      c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z"
                      />
                    </g>
                  </g>
                </svg>
                <svg
                  version="1.1"
                  id="close"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 47.971 47.971"
                  style={{ enableBackground: "new 0 0 47.971 47.971" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
          c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
          C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
          s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="col-md-2 col-3 v-mob prev">
              <button className="btn-previous">
                <svg
                  version="1.1"
                  id="back"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 408 408"
                  style={{ enableBackground: "new 0 0 408 408" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g id="arrow-back">
                      <path d="M408,178.5H96.9L239.7,35.7L204,0L0,204l204,204l35.7-35.7L96.9,229.5H408V178.5z" />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeaderBottomSection;
