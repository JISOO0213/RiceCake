import Link from "next/link";
import React from "react";

const StorySubText = () => {
  return (
    <div className="items-center justify-center min-h-full px-4 py-12 mx-auto h-3/4 sm:px-6 lg:px-8 max-w-7xl">
      {/* <div class="flex space-x-2 justify-start px-6 ">DiaryMain</div> */}
      <div className="flex justify-end px-6 space-x-2 ">
        <Link href="/Story/StorySub">
          <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
            BACK
          </a>
        </Link>
        <Link href="/Story/StorySub">
          <a className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
            SUBMIT
          </a>
        </Link>
      </div>

      <div className="flex justify-center">
        <textarea
          placeholder="Title"
          className="row-span-6 pt-10 overflow-hidden text-4xl text-center bg-transparent  text-gray-900 outline-none resize-none w-96"
        />
      </div>
      <div className="w-1/2 h-px mx-auto bg-gray-400 mb-7"></div>
      <div className="flex justify-center">
        <textarea
          placeholder="내용을 입력하세요."
          rows="12"
          outline="none"
          className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 h-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll block p-2.5 w-1/2 text-sm bg-transparent text-gray-900 rounded-lg resize-none"
        />
      </div>
    </div>
  );
};

export default StorySubText;