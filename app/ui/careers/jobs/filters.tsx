'use client'; // Ensure this is a Client Component

import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface ActiveFilter{
  name: string,
  active: boolean,
  value: string | undefined,
}

export default function JobFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [workType, setWorkType] = useState(searchParams.get('worktype') || '');
  const [jobType, setJobType] = useState(searchParams.get('contracttype') || '');
  const [department, setDepartment] = useState(searchParams.get('department') || '');

  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>(
    [
      {
       name:'department', 
       active: false,
       value: '',
      },{
        name:'worktype', 
        active: false,
        value: '',
       },{
        name:'contracttype', 
        active: false,
        value: '',
       },
    ]
  )


  const updateFilters = (name: string, activeCall: boolean, selectedValue: string ) => {
    setActiveFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.name === name && selectedValue !== ''
          ? { ...filter, active: activeCall, value: selectedValue }
          : filter.name === name && selectedValue === '' ? {...filter, active: false, value: selectedValue} : filter
      )
    );
    const params = new URLSearchParams(searchParams);
    if(activeCall && selectedValue !== ''){
      params.set(name, selectedValue);
    }else{
      params.delete(name);
    }
    router.push(`?${params.toString()}`);
  }

  const handleFilterChange = (value:string, filter:string) => {
    if(filter === 'W'){
        const selectedWorkType = value;
        setWorkType(selectedWorkType);
        updateFilters('worktype', true, value)
    }else if(filter === 'C'){
        const selectedJobType = value;
        setJobType(selectedJobType);
        updateFilters('contracttype', true, value)
    }else if(filter === 'D'){
        const selectedDepartment = value;
        setDepartment(selectedDepartment);
        updateFilters('department', true, value)
    }
  };

  return (
    <div className="container w-[88%] lg:w-[77%] 2xl:w-[70%]  grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 mt-4">
      <div className='w-full'>
        <select value={department} className='w-full px-2 lg:px-3 py-2 border border-gray-300 rounded-xl shadow-sm' onChange={(e) => handleFilterChange(e.target.value, 'D')}>
          <option value="">Department</option>
          <option value="Sales & marketing">Sales & marketing</option>
          <option value="Digital marketing & I.T">Digital marketing & I.T</option>
          <option value="Human resources & Recruitment">Human resources & Recruitment</option>
          <option value="Finance & Accounting">Finance & Accounting</option>
        </select>
      </div>
      <div className='hidden lg:flex w-full'>
        <select value={workType} className='w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm' onChange={(e) => handleFilterChange(e.target.value, 'W')}>
          <option value="">Work Type</option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      <div className='w-full'>
        <select value={jobType} className='w-full px-2 lg:px-3 py-2 border border-gray-300 rounded-xl shadow-sm' onChange={(e) => handleFilterChange(e.target.value, 'C')}>
          <option value="">Contract Type</option>
          <option value="Permanent">Permanent</option>
          <option value="Contract based">Contract based</option>
        </select>
      </div>
      <div className='col-span-full flex flex-row'>
        {
          activeFilters.map((filter, index) => 
            <div key={index} className='mr-2'>{ filter.active ? <h5 onClick={() => updateFilters(filter.name, false, '')} className='cursor-pointer inline-flex gap-2 items-center w-fit text-sm bg-sky-800 text-gray-100 px-3 py-0.5 rounded-2xl'>{filter.value} <X className='h-4 w-auto font-extrabold'/></h5>:null }</div>
        )
        }
      </div>
    </div>
  );
}