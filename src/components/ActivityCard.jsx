import React, {useContext } from 'react';
import ellipsis from '../assets/images/icon-ellipsis.svg';
import { TimeframeContext } from '../App';

function ActivityCard({activity}) {
  const timeframeContext = useContext(TimeframeContext);
  const colorVariants = {
    work: "bg-work",
    play: "bg-play",
    exercise: "bg-exercise",
    social: "bg-social",
    self_care: "bg-self-care",
    study: "bg-study"
  }
  const iconVariants = {
    work: "bg-image-work",
    play: "bg-image-play",
    exercise: "bg-image-exercise",
    social: "bg-image-social",
    self_care: "bg-image-self-care",
    study: "bg-image-study"
  }

  /**
   * 
   * @param {*} timeframeObj - Object that contains current and previous values(in hrs)
   *  for the daily, weekly and monthly the user has spent for
   * a specific activity
   * @returns Object - timeframe object that need to be rendered based on
   * the selected
   * timeframe value
   */
  function filterTimeframes(timeframeObj) {
    // filter out entries to show based on currently selected timeframe
   return Object.fromEntries(Object.entries(timeframeObj).filter((currTimeframe) => {
      return (currTimeframe[0] === timeframeContext.timeframe);
    }));
  }
  
  function renderSwitch(object) {
    switch (timeframeContext.timeframe) {
      case 'daily':
        return <>
          <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
            <h1 className='sm:text-5xl text-lg'>{object?.daily?.current}hrs</h1>
            <h2 className='text-desaturated-blue text-sm'>Last day - {object?.daily?.previous}hrs</h2>
          </div>
          </>
      case 'monthly':
        return <>
          <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
            <h1 className='sm:text-5xl text-lg'>{object?.monthly?.current}hrs</h1>
            <h2 className='text-desaturated-blue text-sm'>Last month - {object?.monthly?.previous}hrs</h2>
          </div>
        </>
      default:
        return <>
          <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
            <h1 className='sm:text-5xl text-lg'>{object?.weekly?.current}hrs</h1>
            <h2 className='text-desaturated-blue text-sm'>Last week - {object?.weekly?.previous}hrs</h2>
          </div>
        </>
    }
  }
  return (
    <>
      <div className={"grid h-[calc(100%-2px)] rounded-t-xl rounded-b-2xl w-[calc(100%-2px)] "+ `${colorVariants[activity?.title.replace(" ", "_").toLowerCase()]}`}>
        <div className={"h-12 bg-[right_15%] bg-no-repeat rounded-t-xl mr-4 "+ 
          `${iconVariants[activity?.title.replace(" ", "_").toLowerCase()]} `+
          `${colorVariants[activity?.title.replace(" ", "_").toLowerCase()]}`}>
        </div>
        <div className='rounded-xl bg-dark-blue p-4 flex flex-col items-start sm:gap-6 gap-2'>
          <div className='flex justify-between w-full'>
            <span>{activity?.title}</span>
            <button className='cursor-pointer'><img src={ellipsis} alt="view action btn" /></button>
          </div>
          {renderSwitch(filterTimeframes(activity?.timeframes))}
        </div>
      </div>

    </>
  )
}

export default ActivityCard;