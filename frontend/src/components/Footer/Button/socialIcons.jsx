import React from "react";
import "./socialIcons.css";

const socialIcons = () => {
  return (
    <ul className="social">
      <li className="social-item">
        <a
          className="social-link"
          href="https://www.linkedin.com/company/entrepreneurship-cell-the-lnmiit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5	C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0	c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </li>
      <li className="social-item">
        <a
          className="social-link"
          href="https://twitter.com/ecell_lnmiit"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="currentColor"></path>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-twitter-x"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" fill="currentColor"/>
          </svg>
        </a>
      </li>
      <li className="social-item">
        <a
          className="social-link"
          href="mailto:ecell@lnmiit.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </li>
      <li className="social-item">
        <a
          className="social-link"
          href="https://www.instagram.com/ecell.lnmiit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
              fill="currentColor"
            ></path>
            <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default socialIcons;
