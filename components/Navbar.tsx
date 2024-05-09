import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-emerald-900 to-green-950 py-2">
      <div className="flex flex-start justify-start items-center mx-40">
        <div className="flex flex-1">
          <div className="mr-20">
            <button
              id="nav-toggle"
              className="flex items-center my-2 px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div className="relative rounded-md shadow-sm justify-center items-center m-2">
            <div className="absolute p-[5px] pointer-events-none border-[3px] border-slate-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </div>

            <input
              type="text"
              className="block w-full mr-20 p-1 sm:text-sm border-slate-200 rounded-full text-center border-2 bg-slate-100"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex text-white">
          <h1 className="mx-6">Language</h1>
          <h1 className="mx-6">About Us</h1>
          <h1 className="mx-6">Feedback</h1>
          <RxCross1 className="text-white w-6 h-6 ml-10" />
        </div>
      </div>
    </div>
  );
}
