import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[25%] h-full border-r border-zinc-500 p-8  ">
      <h1 className="text-2xl  ">
        <i class="text-[#6556CD] mr-2 ri-tv-fill"></i>
        <span className="font-bold ">SCSBD.</span>
      </h1>
      <nav className="flex flex-col text-zinc-500 gap-1 ">
        <h1 className="text-white font-semibold mt-4 text-xl  mb-4 ">
          New Feeds
        </h1>
        <Link className="capitalize text-lg p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg ">
         <i class="mr-2 ri-fire-fill"></i> trending
        </Link>
        <Link className="capitalize text-lg p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg ">
          <i class="mr-2 ri-bard-fill"></i>popular
        </Link>
        <Link className="capitalize text-lg p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg ">
          <i class="mr-2 ri-file-video-fill"></i>movies
        </Link>
        <Link className="capitalize text-lg p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg ">
         <i class="mr-2 ri-tv-2-fill"></i> TV shows
        </Link>
        <Link className="capitalize text-lg p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg ">
         <i class="mr-2 ri-team-fill"></i> people
        </Link>
      </nav>
      <hr className="border-zinc-400 mt-4" />
      <nav className="flex flex-col text-zinc-500 gap-2">
<h1 className="text-white font-semibold capitalize mt-4 text-xl  mb-2 ">
          wesite information
        </h1>
        <Link className="capitalize text-lg p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg ">
        <i class="mr-2 ri-information-fill"></i>about us
        </Link>
        <Link className="capitalize text-lg p-5 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg ">
          <i class="mr-2 ri-phone-fill"></i>contact us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
