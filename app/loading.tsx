'use client'
import {TailSpin} from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center absolute top-0 left-0 z-[999] bg-dullWhite h-screen w-screen">
      <TailSpin visible={true} height={80} width={80} color='#F28521' ariaLabel='tail-spin-loading' radius={1}/>
      <p className="text-3xl font-semibold text-sky-900 mt-2">Loading...</p>
    </div>
  );
}
