'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomeHead from './ui/home/section1';
// import { useEffect, useState } from 'react';
import { Suspense, useEffect } from 'react';
import  AboutSection  from './ui/home/about';
import  WhyChooseUs  from './ui/home/choose';
import JoinGlobalTeam from './ui/home/joinglobalteam';
import CareerOpportunities from './ui/home/career';
import HiringProcess from './ui/home/hiringprocess';
import LetsTalk from './ui/home/letstalk';
import Loading from './loading';
// import Loading from './ui/loading';
// import UnderDevelopment from './ui/underdevelopment';
export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  // const [userData, setUserData] = useState<any[]>([]);
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/createTable', { method: 'GET' });
  //       const data = await response.json();

  //       if (data.error || data.message) {
  //         setError(data.error || data.message);
  //         setUserData([]);
  //       } else if (Array.isArray(data)) {
  //         setUserData(data);
  //         setError(null);
  //       } else {
  //         setError('Unexpected API response');
  //       }
  //     } catch {
  //       setError('Failed to fetch data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Suspense fallback={<Loading />}>
      <HomeHead />
      <AboutSection />
      <WhyChooseUs />
      <JoinGlobalTeam />
      <CareerOpportunities />
      <HiringProcess />
      <LetsTalk />
      {/* <div>
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : userData.length > 0 ? (
          userData.map((user, index) => (
            <div key={index}>
              <p>ID: {user.ID}</p>
              <p>Name: {user.NAME}</p>
              <p>Gender: {user.GENDER}</p>
              <p>Contact: {user.CONTACT}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div> */}
    </Suspense>
  );
}
