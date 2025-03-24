'use client'
import { TailSpin } from "react-loader-spinner";
import NewAgentCreation from "./newAgentAddition";
import { useState } from "react";
import { Agent } from "@/app/lib/elements";


export default function AgentsPage(){
    const [loading, setLoading] = useState<boolean>(false);
    const [agents, setAgents] = useState<Agent[]>([]);
    return(
        <div className="container w-[88%] lg:w-full min-h-[90vh] py-10 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-sky-900 border-b-2 px-1 mx-auto mb-5 border-orange-500 w-fit">All Agents</h3>
            <div className='h-[45vh] w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-100 rounded-t-xl grid grid-cols-[30%,25%,15%,10%,20%] w-full'>
                            <th className="border rounded-tl-xl px-4 py-5 text-lg capitalize tracking-wide">Job title</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Department</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Applicants</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Status</th>
                            <th className="border rounded-tr-xl px-4 py-5 text-lg capitalize tracking-wide">-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? (
                            <tr>
                                <td className="col-span-full min-h-[50vh] flex flex-col gap-2 items-center justify-center">
                                    <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                                    <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>
                                </td>
                            </tr>
                        ) : 
                        (
                            agents.map((agent) => 
                                <tr key={agent.id}>
                                    <h3>{agent.name}</h3>
                                </tr>
                            )
                        )
                        }
                    </tbody>
                </table>
            </div>
            <NewAgentCreation />
        </div>
    )
}