import React, { useContext } from 'react';
import profileImg from '../assets/images/image-jeremy.png';
import { TimeframeContext } from '../App';

function ProfileCard() {
  const {timeframe, setTimeframe} = useContext(TimeframeContext);

  function handleTimeframeUpdate(e) {
    const currValue = e.currentTarget.value;
    if(currValue === timeframe) {
      return;
    }
    const btnEl = document.getElementById(e.target.id);
    let siblings = btnEl.parentElement.children;
    for(let sib of siblings) {
      sib.classList.remove('activated');
    }
    btnEl?.classList.add('activated');
    setTimeframe(currValue);
  }

  return (
    <div className="sm:h-full rounded-xl h-[calc(100%-2px)] min-h-[180px] sm:row-span-2 grid sm:auto-rows-min auto-cols-auto grid-columns-1 bg-dark-blue">
            <div className="flex flex-row rounded-xl sm:px-4 sm:py-16 sm:flex-col sm:gap-4 sm:items-start items-center sm:h-9/10 sm:justify-center lg:px-8 px-4 py-4 justify-start space-x-5 bg-profile">
                <div className="w-12 bg-gray-300 h-12 sm:h-16 sm:w-16 rounded-full ">
                  <img className="border-white border-2 rounded-full" src={profileImg} alt="profile image" />
                </div>
                <div className="flex flex-col sm:space-y-3 sm:items-start">
                    <div className="w-full">
                      <p className='sm:text-base sm:font-light font-extralight text-sm text-left'>Report for</p>
                    </div>
                    <div className="w-full">
                      <p className='sm:text-4xl text-lg text-left'>Jeremy Robson</p>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-col flex-row items-center h-full gap-4 justify-around px-6">
                <button id='daily' value="daily" onClick={(e) => handleTimeframeUpdate(e)} className=" sm:w-full flex cursor-pointer transition duration-700 ease-out hover:text-white text-desaturated-blue text-sm">Daily</button>
                <button id='weekly' value="weekly" onClick={(e) => handleTimeframeUpdate(e)} className="sm:w-full flex cursor-pointer transition duration-700 ease-out  hover:text-white activated text-desaturated-blue text-sm">Weekly</button>
                <button id="monthly" value="monthly" onClick={(e) => handleTimeframeUpdate(e)} className="sm:w-full flex cursor-pointer transition duration-700 ease-out hover:text-white text-desaturated-blue text-sm">Monthly</button>
            </div>
        </div>
  )
}

export default ProfileCard