import React from "react";

function Navigation() {
  return (
    <>
      <div style="min-height: 1100px">
        <button
          aria-label="open sidebar"
        //   onClick="openSidebar(false)"
          className="focus:ring-2 focus:outline-none focus-ring-offset-2 focus:ring-gray-400 focus:text-black focus:bg-gray-100 flex items-center justify-center rounded-r-md bg-gray-800 text-gray-300 ml-0 cursor-pointer absolute inset-0 mt-10 m-auto w-8 h-8"
        >
          <img
            className="icon icon-tabler icon-tabler-chevron-right"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/dark-theme-with-light-icons-svg1.svg"
            alt="arrow right"
          />
        </button>
        <div
          role="tabpanel"
          id="sidebar"
          className="overflow-y-scroll lg:overflow-y-auto fixed lg:sticky h-screen lg:h-auto z-40 top-0 bg-gray-900 pt-10 w-64 lg:w-72"
        >
          <div className="px-8">
            <div className="flex items-center justify-between">
              <div role="link" className="w-32">
                <img
                  className="w-full"
                  src="https://cdn.tuk.dev/assets/components/todos/logo.png"
                  alt="quicklist logo"
                />
              </div>
              <button
                aria-label="close sidebar"
                // onClick="openSidebar(true)"
                className="rounded-md focus:ring-2 focus:outline-none focus-ring-offset-2 focus:ring-gray-400 focus:bg-gray-100 text-gray-400 hover:bg-gray-700 ml-8 cursor-pointer"
              >
                <img
                  className="icon icon-tabler icon-tabler-chevron-left"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/dark-theme-with-light-icons-svg2.svg"
                  alt="arrow left"
                />
              </button>
            </div>
            <ul className="my-10 flex flex-wrap">
              <link className="w-1/2 flex justify-start mb-6">
                <a
                  href="javascript:void(0)"
                  className="bg-transparent focus:outline-none hover:bg-gray-700 hover:text-white focus:bg-gray-700  focus:text-white rounded-md text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-layout-kanban"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <line x1="4" y1="4" x2="10" y2="4"></line>
                    <line x1="14" y1="4" x2="20" y2="4"></line>
                    <rect x="4" y="8" width="6" height="12" rx="2"></rect>
                    <rect x="14" y="8" width="6" height="6" rx="2"></rect>
                  </svg>
                  <p className="mt-1 uppercase font-semibold text-xs">kanban</p>
                </a>
              </link>
              <link className="w-1/2 flex justify-end mb-6">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:bg-gray-700 hover:bg-gray-700 hover:text-white focus:text-white bg-transparent rounded-md text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-inbox"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <path d="M4 13h3l3 3h4l3 -3h3"></path>
                  </svg>
                  <p className="mt-1 uppercase font-semibold text-xs">inbox</p>
                </a>
              </link>
              <link className="w-1/2 flex justify-start mb-6">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:bg-gray-700  hover:bg-gray-700 hover:text-white focus:text-white rounded-md bg-transparent text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-notebook"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>
                    <line x1="13" y1="8" x2="15" y2="8"></line>
                    <line x1="13" y1="12" x2="15" y2="12"></line>
                  </svg>
                  <p className="mt-1 uppercase font-semibold text-xs">notebook</p>
                </a>
              </link>
              <link className="w-1/2 flex justify-end mb-6">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white  rounded-md bg-transparent text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-calendar-event"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                    <line x1="16" y1="3" x2="16" y2="7"></line>
                    <line x1="8" y1="3" x2="8" y2="7"></line>
                    <line x1="4" y1="11" x2="20" y2="11"></line>
                    <rect x="8" y="15" width="2" height="2"></rect>
                  </svg>
                  <p className="mt-1 uppercase font-semibold text-xs">calendar</p>
                </a>
              </link>
              <link className="w-1/2 flex justify-start">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white rounded-md bg-transparent text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-star"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                  </svg>
                  <p className="mt-1 uppercase font-semibold text-xs">important</p>
                </a>
              </link>
              <link className="w-1/2 flex justify-end">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white rounded-md bg-transparent text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
                    <polyline points="4 12 12 16 20 12"></polyline>
                    <polyline points="4 16 12 20 20 16"></polyline>
                  </svg>
                  <p className="mt-1 uppercase font-semibold text-xs">projects</p>
                </a>
              </link>
            </ul>
            <div className="flex items-center justify-between text-gray-400">
              <h4 className="uppercase font-semibold">List</h4>
              <button
                aria-label="add"
                className="focus:outline-none rounded-md cursor-pointer icon icon-tabler icon-tabler-plus focus:bg-gray-200 focus:text-black hover:bg-gray-200 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <ul role="list" className="text-gray-400 mt-8">
              <link className="mb-5">
                <a
                  className="focus:outline-none focus:text-white focus:underline hover:underline hover:text-white cursor-pointer"
                  tabIndex="0"
                  role="link"
                >
                  Grocery Items
                </a>{" "}
              </link>
              <link className="mb-5">
                <a
                  className="focus:text-white focus:outline-none focus:underline hover:underline hover:text-white cursor-pointer "
                  tabIndex="0"
                  role="link"
                >
                  Family
                </a>
              </link>
              <link>
                <a
                  tabIndex="0"
                  className="focus:text-white focus:outline-none focus:underline hover:underline hover:text-white cursor-pointer"
                  role="link"
                >
                  Friends
                </a>{" "}
              </link>
            </ul>
            <div className="my-20">
              <div className="flex items-center justify-between text-gray-400">
                <h4 className="uppercase font-semibold">Labels</h4>
                <button
                  aria-label="add"
                  className="focus:outline-none rounded-md focus:bg-gray-200 focus:text-black hover:bg-gray-200 hover:text-black cursor-pointer icon icon-tabler icon-tabler-plus"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
              <ul role="list" className="text-gray-400 mt-8">
                <a
                  tabIndex="0"
                  role="listitem"
                  className="cursor-pointer focus:outline-none focus:underline focus:text-white hover:text-white hover:underline mb-5 flex items-center"
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-indigo-600"></span>
                  Work Related
                </a>
                <a
                  tabIndex="0"
                  role="listitem"
                  className="cursor-pointer focus:outline-none focus:underline focus:text-white hover:text-white hover:underline mb-5 flex items-center"
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-yellow-600"></span>
                  Family
                </a>
                <a
                  tabIndex="0"
                  role="listitem"
                  className="cursor-pointer focus:outline-none focus:underline focus:text-white hover:text-white hover:underline mb-5 flex items-center"
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-green-500"></span>
                  Friends
                </a>
                <a
                  tabIndex="0"
                  role="listitem"
                  className="cursor-pointer focus:outline-none focus:underline focus:text-white hover:text-white hover:underline mb-5 flex items-center"
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-purple-600"></span>
                  Grocery
                </a>
                <a
                  tabIndex="0"
                  role="listitem"
                  className="cursor-pointer focus:outline-none focus:underline focus:text-white hover:text-white hover:underline mb-5 flex items-center"
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-blue-600"></span>
                  Utilities
                </a>
                <a
                  tabIndex="0"
                  role="listitem"
                  className="cursor-pointer focus:outline-none focus:underline focus:text-white hover:text-white hover:underline mb-5 flex items-center"
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-pink-600"></span>
                  Rental
                </a>
                <a
                  tabIndex="0"
                  role="listitem"
                  className="cursor-pointer focus:outline-none focus:underline focus:text-white hover:text-white hover:underline mb-5 flex items-center"
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-red-600"></span>
                  Maintenance
                </a>
              </ul>
            </div>
          </div>
          <div className="px-8 py-4 w-full border-t border-gray-800 flex items-center text-gray-400 uppercase text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer icon icon-tabler icon-tabler-trash"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="4" y1="7" x2="20" y2="7"></line>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
            <p className="cursor-pointer pl-2">trash</p>
          </div>
        </div>
      </div>
      {/* <script>
    openSidebar = (flag) => {
        let sidebar = document.getElementById("sidebar");
        flag ? sidebar.classList.add("hidden") : sidebar.classList.remove("hidden");
    };
    </script> */}
    </>
  );
}

export default Navigation;
