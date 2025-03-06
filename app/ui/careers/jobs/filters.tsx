'use client'; // Ensure this is a Client Component

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function JobFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [workType, setWorkType] = useState(searchParams.get('worktype') || '');
  const [jobType, setJobType] = useState(searchParams.get('contracttype') || '');
  const [department, setDepartment] = useState(searchParams.get('department') || '');
  const handleFilterChange = (value:string, filter:string) => {
    if(filter === 'W'){
        const selectedWorkType = value;
        setWorkType(selectedWorkType);
        const params = new URLSearchParams(searchParams);
        params.set('worktype', selectedWorkType);
        router.push(`?${params.toString()}`);
    }else if(filter === 'J'){
        const selectedJobType = value;
        setJobType(selectedJobType);
        const params = new URLSearchParams(searchParams);
        params.set('contracttype', selectedJobType);
        router.push(`?${params.toString()}`);
    }else if(filter === 'D'){
        const selectedDepartment = value;
        setDepartment(selectedDepartment);
        const params = new URLSearchParams(searchParams);
        params.set('department', selectedDepartment);
        router.push(`?${params.toString()}`);
    }
  };

  return (
    <div className="container w-[88%] lg:w-[77%] 2xl:w-[70%]  grid grid-cols-3 gap-5 mt-4">
      <div className='w-full'>
        <select value={department} className='w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm' onChange={(e) => handleFilterChange(e.target.value, 'D')}>
          <option value="">Department</option>
          <option value="Sales & marketing">Sales & marketing</option>
          <option value="Digital marketing & I.T">Digital marketing & I.T</option>
          <option value="Human resources & Recruitment">Human resources & Recruitment</option>
          <option value="Finance & Accounting">Finance & Accounting</option>
        </select>
      </div>
      <div className='w-full'>
        <select value={workType} className='w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm' onChange={(e) => handleFilterChange(e.target.value, 'W')}>
          <option value="">Job Type</option>
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      <div className='w-full'>
        <select value={jobType} className='w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm' onChange={(e) => handleFilterChange(e.target.value, 'J')}>
          <option value="">Contract Type</option>
          <option value="P">Permanent</option>
          <option value="C">Contractual</option>
        </select>
      </div>
    </div>
  );
}