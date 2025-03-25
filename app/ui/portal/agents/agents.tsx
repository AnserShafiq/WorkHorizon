'use client'
import { TailSpin } from "react-loader-spinner";
import NewAgentCreation from "./newAgentAddition";
import { useEffect, useState } from "react";
import { Agent, User } from "@/app/lib/elements";
import Link from "next/link";


export default function AgentsPage({ user }: { user: User | null }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [agents, setAgents] = useState<Agent[]>([]);
    const [sortedAgents, setSortedAgents] = useState<Agent[]>([]);
    const [editingAgent, setEditingAgent] = useState<Agent | null>(null); 

    useEffect(() => {
        const getAllAgents = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agents/getAll`).then(res => res.json());
            setAgents(response);
            setLoading(false)
        };
        getAllAgents();
    }, []);

    useEffect(() => {
        const SortAgents = () => {
            if (user?.post === 'admin') {
                setSortedAgents(agents);
            } else if (user?.post === 'Pak HR') {
                setSortedAgents(agents.filter(agent => agent.post !== 'admin' && agent.post !== 'Pak HR'));
            }
        };
        SortAgents();
    }, [user, agents]);

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, field: keyof Agent) => {
        if (editingAgent) {
            setEditingAgent({ ...editingAgent, [field]: e.target.value });
        }
    };

    const handleEdit = (agent: Agent) => {
        setEditingAgent(agent);
    };

    const handleSave = async () => {
        if (!editingAgent) return;

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agents/update/${editingAgent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingAgent),
        });

        setAgents(agents.map(agent => agent.id === editingAgent.id ? editingAgent : agent));
        setEditingAgent(null);
    };

    const handleDelete = async(agent_id: string ) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agents/delete?agent_id=${agent_id}`,{
            method: 'DELETE',
        })
        if(response.ok){
            setLoading(true)
            const updatedAgents = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agents/getAll`).then(res => res.json());
            setAgents(updatedAgents);
            setLoading(false)
        }
    }

    return (
        <div className="container w-[88%] lg:w-full min-h-[90vh] py-10 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-sky-900 border-b-2 px-1 mx-auto mb-5 border-orange-500 w-fit">All Agents</h3>
            <div className='h-[45vh] w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-gray-100 rounded-t-xl grid grid-cols-[15%,15%,15%,15%,15%,15%,10%] w-full'>
                            <th className="border rounded-tl-xl px-4 py-5 text-lg capitalize tracking-wide">Agent Name</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Post</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Email</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Password</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Contact</th>
                            <th className="border px-4 py-5 text-lg capitalize tracking-wide">Gender</th>
                            <th className="border rounded-tr-xl px-4 py-5 text-lg capitalize tracking-wide">Actions</th>
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
                                sortedAgents.map((agent) =>
                                    <tr className='grid grid-cols-1 lg:grid-cols-[15%,15%,15%,15%,15%,15%,10%] items-center w-full border-b border-gray-300 hover:bg-gray-100 py-2' key={agent.id}>
                                        {
                                            editingAgent?.id === agent.id ? (
                                                <>
                                                    <td className="px-2 py-1 lg:py-3 text-sky-900 text-md"><input className="px-2 py-1 w-full border" value={editingAgent.name} onChange={(e) => handleFieldChange(e, "name")} /></td>
                                                    <td className="px-2 py-1 lg:py-3 text-sky-900 text-md">
                                                        <select className="px-2 py-1 w-full border" value={editingAgent.post} onChange={(e) => handleFieldChange(e, "post")}>
                                                            {
                                                                user?.post === 'admin'  ? <option value={'admin'} >{`Admin`}</option> : null
                                                            }
                                                            <option value={'Pak HR'} >{`Pak HR`}</option>
                                                            <option value={'Head HR'} >{`Head HR`}</option>
                                                            <option value={'Recruiter'} >{`Recruiter`}</option>
                                                        </select>    
                                                    </td>
                                                    <td className="px-2 py-1 lg:py-3 text-sky-900 text-md"><input className="px-2 py-1 w-full border" value={editingAgent.email} onChange={(e) => handleFieldChange(e, "email")} /></td>
                                                    <td className="px-2 py-1 lg:py-3 text-sky-900 text-md"><input className="px-2 py-1 w-full border" value={editingAgent.password} onChange={(e) => handleFieldChange(e, "password")} /></td>
                                                    <td className="px-2 py-1 lg:py-3 text-sky-900 text-md"><input className="px-2 py-1 w-full border" value={editingAgent.contact} onChange={(e) => handleFieldChange(e, "contact")} /></td>
                                                    <td className="px-2 py-1 lg:py-3 text-sky-900 text-md">
                                                        {/* <input className="px-2 py-1 w-full border" value={editingAgent.gender} onChange={(e) => handleFieldChange(e, "gender")} /> */}
                                                        <select className="px-2 py-1 w-full border" value={editingAgent.gender} onChange={(e) => handleFieldChange(e, "gender")}>
                                                            <option value={'male'} >{`Male`}</option>
                                                            <option value={'female'} >{`Female`}</option>
                                                        </select>
                                                    </td>
                                                    <td className="px-4 py-1 flex items-center justify-center gap-2">
                                                        <button className="text-green-600 font-semibold text-sm border-b border-green-500 w-fit mx-auto" onClick={handleSave}>Save</button>
                                                        <button className="text-red-600 font-semibold text-sm border-b border-red-500 w-fit mx-auto" onClick={() => setEditingAgent(null)}>Cancel</button>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="px-4 py-1 lg:py-3 font-semibold capitalize text-start lg:text-center text-sky-900 text-lg lg:text-lg">
                                                        <Link href={`/portal/dashboard/contact-messages/cm-wh-${agent.id}`} className="underline">
                                                            {agent.name}
                                                        </Link>
                                                    </td>
                                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">{agent.post}</td>
                                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">{agent.email}</td>
                                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">{agent.password}</td>
                                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">{agent.contact}</td>
                                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md capitalize">{agent.gender}</td>
                                                    <td className="px-4 py-1 flex items-center justify-center gap-2">
                                                        <button className="text-blue-600 font-semibold text-sm border-b border-blue-500 w-fit mx-auto" onClick={() => handleEdit(agent)}>Edit</button>
                                                        <button className="text-red-600 font-semibold text-sm border-b border-red-500 w-fit mx-auto" onClick={() => handleDelete(agent.id)}>Remove</button>
                                                    </td>
                                                </>
                                            )
                                        }
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            <NewAgentCreation />
        </div>
    );
}
