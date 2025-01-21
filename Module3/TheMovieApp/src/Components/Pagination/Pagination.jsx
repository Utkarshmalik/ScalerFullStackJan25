import { useState } from "react";


function Pagination({pageNumber,onNextClick,onPrevClick}){


    return <div className="flex border justify-center items-center gap-5 mt-8 h-[50px] bg-gray-400 text-white">

        <div onClick={onPrevClick} className="cursor-pointer px-4"> Prev </div>
        <div> {pageNumber} </div>
        <div onClick={onNextClick} className="cursor-pointer px-4"> Next </div>

    </div>

}

export default Pagination;