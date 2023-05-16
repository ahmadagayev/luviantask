import React from "react";
import "./Logo.css";
const Logo = ({handleMain}) => {
  return (
    <div
      dis_class="col-mm-2 col-md-3 col-9"
      className="col-md-2 col-mm-2 col-9"
    >
      <div className="logo" onClick={handleMain}>
        <a
          href="#/"
          // href="https://kontakt.az"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={150}
            height={35}
            viewBox="0 0 104 24"
          >
            <g>
              <g>
                <path
                  d="M6.45,2.34c0-0.95,0.77-1.72,1.72-1.72s1.72,0.77,1.72,1.72v9.03c0,0.95-0.77,1.72-1.72,1.72    s-1.72-0.77-1.72-1.72V2.34z"
                  style={{ fill: "rgb(255, 0, 60)" }}
                />
                <path
                  d="M15.01,10.62c-1.02-0.6-1.7-1.7-1.7-2.96c0-1.29,0.71-2.42,1.77-3l3.81-2.2c0.25-0.14,0.53-0.22,0.83-0.22    c0.95,0,1.72,0.77,1.72,1.72c0,0.64-0.35,1.19-0.86,1.49l-3.02,1.74c-0.16,0.09-0.27,0.27-0.27,0.47c0,0.2,0.11,0.37,0.26,0.46    l3.03,1.75c0.52,0.29,0.87,0.85,0.87,1.49c0,0.95-0.77,1.72-1.72,1.72c-0.31,0-0.61-0.08-0.86-0.23L15.01,10.62z"
                  style={{ fill: "rgb(255, 0, 60)" }}
                />
                <path
                  d="M25.67,16.47c-2.68,4.17-7.22,6.9-12.36,6.9c-5.12,0-9.63-2.71-12.32-6.84c-0.44-0.67-0.24-1.57,0.43-2    c0.65-0.42,1.51-0.26,1.96,0.36c2.24,3.07,5.85,5.06,9.94,5.06c4.09,0,7.71-1.99,9.94-5.06c0.43-0.59,1.25-0.77,1.9-0.39    C25.84,14.9,26.07,15.78,25.67,16.47"
                  style={{ fill: "rgb(255, 0, 60)" }}
                />
              </g>
              <g>
                <path d="M48.54,8.76c-2.65,0-4.81,2.18-4.81,4.87c0,2.69,2.16,4.88,4.81,4.88c2.66,0,4.83-2.19,4.83-4.88    C53.36,10.94,51.2,8.76,48.54,8.76 M50.77,13.63c0,1.4-0.95,2.46-2.21,2.46c-1.28,0-2.25-1.06-2.25-2.46    c0-1.39,0.97-2.44,2.25-2.44C49.82,11.19,50.77,12.24,50.77,13.63" />
                <path d="M60.31,8.76c-0.91,0-1.7,0.28-2.29,0.82c-0.04,0.04-0.09,0.05-0.14,0.04c-0.03,0-0.08-0.02-0.11-0.08    c-0.22-0.38-0.63-0.6-1.13-0.6c-0.74,0-1.27,0.54-1.27,1.29v6.8c0,0.38,0.14,0.71,0.38,0.95c0.23,0.22,0.55,0.34,0.91,0.34    c0.03,0,0.05,0,0.08,0c0.68-0.03,1.21-0.6,1.21-1.29v-4.01c0-1.13,0.64-1.84,1.67-1.84c1.03,0,1.67,0.7,1.67,1.84v4.01    c0,0.74,0.52,1.27,1.27,1.29c0.34,0.01,0.67-0.12,0.92-0.37c0.25-0.25,0.4-0.59,0.4-0.95v-4.31C63.89,10.3,62.48,8.76,60.31,8.76" />
                <path d="M71.64,15.8c-0.23,0-0.45,0.07-0.67,0.14c-0.22,0.07-0.45,0.14-0.69,0.14c-0.34,0-0.66-0.09-0.66-0.77v-3.9    c0-0.09,0.07-0.16,0.16-0.16h1.34c0.67,0,1.14-0.48,1.14-1.16s-0.47-1.16-1.14-1.16h-1.38c-0.09,0-0.16-0.07-0.16-0.16V7.96    c0-0.36-0.15-0.71-0.4-0.96c-0.25-0.25-0.57-0.38-0.92-0.38C67.52,6.63,67,7.17,67,7.93v0.84c0,0.09-0.07,0.16-0.16,0.16H66.3    c-0.68,0-1.16,0.47-1.16,1.14c0,0.69,0.48,1.18,1.16,1.18h0.52c0.09,0,0.16,0.07,0.16,0.16v3.64c0,2.2,1.16,3.46,3.18,3.46    c1.51,0,2.56-0.7,2.56-1.7C72.72,16.32,72.38,15.8,71.64,15.8" />
                <path d="M82.02,8.95c-0.56-0.02-1.01,0.21-1.24,0.65c-0.03,0.05-0.07,0.07-0.1,0.07c-0.05,0.01-0.1-0.01-0.14-0.04    c-0.66-0.58-1.5-0.87-2.49-0.87c-2.54,0-4.45,2.09-4.45,4.87c0,2.78,1.91,4.88,4.45,4.88c0.97,0,1.8-0.3,2.46-0.89    c0.04-0.04,0.1-0.05,0.16-0.04c0.03,0.01,0.08,0.02,0.11,0.08c0.21,0.42,0.64,0.67,1.15,0.67c0.34,0,0.67-0.13,0.91-0.37    c0.25-0.25,0.39-0.58,0.39-0.94v-6.77C83.23,9.55,82.7,8.98,82.02,8.95 M80.63,13.63c0,1.4-0.95,2.46-2.21,2.46    c-1.28,0-2.25-1.06-2.25-2.46c0-1.39,0.97-2.44,2.25-2.44C79.68,11.19,80.63,12.24,80.63,13.63" />
                <path d="M102.16,15.8c-0.23,0-0.45,0.07-0.67,0.14c-0.22,0.07-0.45,0.14-0.69,0.14c-0.34,0-0.66-0.09-0.66-0.77v-3.9    c0-0.09,0.07-0.16,0.16-0.16h1.34c0.67,0,1.14-0.48,1.14-1.16c0-0.68-0.47-1.16-1.14-1.16h-1.38c-0.09,0-0.16-0.07-0.16-0.16V7.96    c0-0.36-0.15-0.71-0.4-0.96c-0.25-0.25-0.57-0.38-0.92-0.38c-0.74,0.01-1.26,0.54-1.26,1.31v0.84c0,0.09-0.07,0.16-0.16,0.16    h-0.54c-0.68,0-1.16,0.47-1.16,1.14c0,0.69,0.48,1.18,1.16,1.18h0.52c0.09,0,0.16,0.07,0.16,0.16v3.63c0,2.2,1.16,3.46,3.18,3.46    c1.51,0,2.56-0.7,2.56-1.7C103.24,16.32,102.9,15.8,102.16,15.8" />
                <path d="M87.1,5.49c-0.74,0-1.27,0.54-1.27,1.29v10.26c0,0.76,0.53,1.29,1.29,1.29c0.76,0,1.29-0.53,1.29-1.29V6.78    C88.41,6.02,87.87,5.49,87.1,5.49" />
                <path d="M94,16.22l-1.85-2.4c-0.09-0.12-0.09-0.28,0-0.4l1.85-2.4c0.46-0.6,0.36-1.35-0.25-1.82c-0.58-0.45-1.34-0.34-1.79,0.25    l-1.59,2.07l-0.5,0.65c-0.66,0.86-0.66,2.06,0,2.92l0.5,0.65l1.59,2.06c0.46,0.6,1.21,0.7,1.81,0.23    C94.37,17.57,94.46,16.83,94,16.22" />
                <path d="M35.27,5.49C34.53,5.49,34,6.03,34,6.78v10.26c0,0.76,0.53,1.29,1.29,1.29c0.76,0,1.29-0.53,1.29-1.29V6.78    C36.58,6.02,36.04,5.49,35.27,5.49" />
                <path d="M42.17,16.22l-1.85-2.4c-0.09-0.12-0.09-0.28,0-0.4l1.85-2.4c0.46-0.6,0.36-1.35-0.25-1.82    c-0.58-0.45-1.34-0.34-1.79,0.25l-1.59,2.07l-0.5,0.65c-0.66,0.86-0.66,2.06,0,2.92l0.5,0.65l1.59,2.06    c0.46,0.6,1.21,0.7,1.81,0.23C42.54,17.57,42.63,16.83,42.17,16.22" />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Logo;
