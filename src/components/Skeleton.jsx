import React from 'react';
import ellipsis from '../assets/images/icon-ellipsis.svg';

function Skeleton() {
    return (
        <>
        <div className='grid h-[calc(100%-2px)] animate-pulse duration-300 rounded-t-xl rounded-b-2xl w-[calc(100%-2px)] bg-gray-700 opacity-25'>
            <div className='h-12 rounded-t-xl mr-4 '></div>
            <div className='rounded-xl bg-gray-100 p-4 flex flex-col items-start sm:gap-6 gap-2'>
                <div className='flex justify-between w-full'>
                    <span className='h-4 bg-pale-blue w-12 rounded-lg'></span>
                    <button><img src={ellipsis} alt="view action btn" /></button>
                </div>
                <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
                    <h1 className='sm:h-12 h-7 bg-pale-blue text-lg w-30 rounded-lg'></h1>
                    <h2 className='bg-pale-blue h-4 w-28 rounded-lg'></h2>
                </div>
            </div>
        </div>
        <div className='grid h-[calc(100%-2px)] animate-pulse duration-300 rounded-t-xl rounded-b-2xl w-[calc(100%-2px)] bg-gray-700 opacity-25'>
            <div className='h-12 rounded-t-xl mr-4 '></div>
            <div className='rounded-xl bg-gray-100 p-4 flex flex-col items-start sm:gap-6 gap-2'>
                <div className='flex justify-between w-full'>
                    <span className='h-4 bg-pale-blue w-12 rounded-lg'></span>
                    <button><img src={ellipsis} alt="view action btn" /></button>
                </div>
                <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
                    <h1 className='sm:h-12 h-7 bg-pale-blue text-lg w-30 rounded-lg'></h1>
                    <h2 className='bg-pale-blue h-4 w-28 rounded-lg'></h2>
                </div>
            </div>
        </div>
        <div className='grid h-[calc(100%-2px)] animate-pulse duration-300 rounded-t-xl rounded-b-2xl w-[calc(100%-2px)] bg-gray-700 opacity-25'>
            <div className='h-12 rounded-t-xl mr-4 '></div>
            <div className='rounded-xl bg-gray-100 p-4 flex flex-col items-start sm:gap-6 gap-2'>
                <div className='flex justify-between w-full'>
                    <span className='h-4 bg-pale-blue w-12 rounded-lg'></span>
                    <button><img src={ellipsis} alt="view action btn" /></button>
                </div>
                <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
                    <h1 className='sm:h-12 h-7 bg-pale-blue text-lg w-30 rounded-lg'></h1>
                    <h2 className='bg-pale-blue h-4 w-28 rounded-lg'></h2>
                </div>
            </div>
        </div>
        <div className='grid h-[calc(100%-2px)] animate-pulse duration-300 rounded-t-xl rounded-b-2xl w-[calc(100%-2px)] bg-gray-700 opacity-25'>
            <div className='h-12 rounded-t-xl mr-4 '></div>
            <div className='rounded-xl bg-gray-100 p-4 flex flex-col items-start sm:gap-6 gap-2'>
                <div className='flex justify-between w-full'>
                    <span className='h-4 bg-pale-blue w-12 rounded-lg'></span>
                    <button><img src={ellipsis} alt="view action btn" /></button>
                </div>
                <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
                    <h1 className='sm:h-12 h-7 bg-pale-blue text-lg w-30 rounded-lg'></h1>
                    <h2 className='bg-pale-blue h-4 w-28 rounded-lg'></h2>
                </div>
            </div>
        </div>
        <div className='grid h-[calc(100%-2px)] animate-pulse duration-300 rounded-t-xl rounded-b-2xl w-[calc(100%-2px)] bg-gray-700 opacity-25'>
            <div className='h-12 rounded-t-xl mr-4 '></div>
            <div className='rounded-xl bg-gray-100 p-4 flex flex-col items-start sm:gap-6 gap-2'>
                <div className='flex justify-between w-full'>
                    <span className='h-4 bg-pale-blue w-12 rounded-lg'></span>
                    <button><img src={ellipsis} alt="view action btn" /></button>
                </div>
                <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
                    <h1 className='sm:h-12 h-7 bg-pale-blue text-lg w-30 rounded-lg'></h1>
                    <h2 className='bg-pale-blue h-4 w-28 rounded-lg'></h2>
                </div>
            </div>
        </div>
        <div className='grid h-[calc(100%-2px)] animate-pulse duration-300 rounded-t-xl rounded-b-2xl w-[calc(100%-2px)] bg-gray-700 opacity-25'>
            <div className='h-12 rounded-t-xl mr-4 '></div>
            <div className='rounded-xl bg-gray-100 p-4 flex flex-col items-start sm:gap-6 gap-2'>
                <div className='flex justify-between w-full'>
                    <span className='h-4 bg-pale-blue w-12 rounded-lg'></span>
                    <button><img src={ellipsis} alt="view action btn" /></button>
                </div>
                <div className='flex sm:flex-col flex-row sm:gap-4 w-full items-center justify-between sm:items-start'>
                    <h1 className='sm:h-12 h-7 bg-pale-blue text-lg w-30 rounded-lg'></h1>
                    <h2 className='bg-pale-blue h-4 w-28 rounded-lg'></h2>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Skeleton