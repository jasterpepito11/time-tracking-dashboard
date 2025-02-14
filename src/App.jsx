import './App.css';
import { useQuery } from '@tanstack/react-query';
import { getActivities } from './api/api';
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';
import Skeleton from './components/Skeleton';
import { createContext, useState } from 'react';

export const TimeframeContext = createContext({
  timeframe: "weekly",
  setTimeframe: () => {}
});

function App() {
  //react-query call to api
  const [timeframe, setTimeframe] = useState("weekly");
  const {data, isPending} = useQuery({
    queryKey: ['activities'],
    queryFn: getActivities
  })

  return (
    <>
    <TimeframeContext.Provider value={{timeframe, setTimeframe}}>
      <section className='max-w-[1110px] flex flex-col h-dvh gap-6 py-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:my-6 lg:content-center'>
        <ProfileCard/>
        {
          isPending ? <Skeleton /> :
          <>{data?.map((activity, i) => (
            <ActivityCard key={i} activity={activity}/>
            ))}</>
        }
      </section>
      </TimeframeContext.Provider>
    </>
  )
}

export default App
