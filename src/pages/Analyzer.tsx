import React from 'react'
import Table from '../components/core/Table';
import { DesirableIcon, JobIcon, ResumeIcon } from '../components/core/icons';

const Analyzer: React.FC = () => {
    const dummyTabs = [
        { title: 'HardSkills', width: 80 },
        { title: 'Frequency', width: 20 },
    ];
    const dummyTabs2 = [
        { title: 'SoftSkills', width: 80 },
        { title: 'Frequency', width: 20 },
    ];

    const dummyData = [
        { HardSkills: "Typing Fast", Frequency: 20 },
        { HardSkills: "Typing Fast", Frequency: 20 },
        { HardSkills: "Typing Fast", Frequency: 20 },
        { HardSkills: "Typing Fast", Frequency: 20 }
    ];
    return (
        <div className='w-screen bg-[#F1F1F1] px-5 md:px-12 lg:px-24 py-20 h-full overflow-y-auto'>
            <p className='text-[40px] my-2'>Hard and Soft Skills (Frequencies)</p>
            <p className='text-2xl my-2'>Based on the resume and job description you uploaded, here are the hard and soft skills we extracted from them:</p>
            <div className='my-10 relative'>
                <div className="flex justify-between">
                    <div></div>
                    <p className='uppercase text-3xl'>Table 1 </p>
                </div>
                <div style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }} className="absolute left-3 top-2 bg-white border border-[#29AB82] text-[#29AB82] flex items-center gap-3 p-2 rounded-full">
                    <ResumeIcon />
                    <p className='text-[30px] pr-5'>RESUME</p>
                </div>
                <Table tabs={dummyTabs} data={dummyData} />
                <div className="h-[40px]"></div>
                <Table tabs={dummyTabs2} data={dummyData} />
            </div>
            <div className='my-10 relative'>
                <div className="flex justify-between">
                    <div></div>
                    <p className='uppercase text-3xl'>Table 2 </p>
                </div>
                <div style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }} className="absolute left-3 top-2 bg-white border border-[#6A6A6A] text-[#6A6A6A] flex items-center gap-3 p-2 rounded-full">
                    <JobIcon />
                    <p className='text-[30px] pr-5'>JOB DESCRIPTION</p>
                </div>
                <Table tabs={dummyTabs} data={dummyData} />
                <div className="h-[40px]"></div>
                <Table tabs={dummyTabs2} data={dummyData} />
            </div>
            <div className="my-10">
                <div style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }} className=" bg-white border border-[#0078D4] text-[#0078D4] w-fit flex items-center gap-3 p-2 rounded-full">
                    <DesirableIcon />
                    <p className='text-[30px] pr-5'>SEE DESIRABLE SKILLS</p>
                </div>
                <p className='text-[24px] my-5'>P.S.− While explicit mentions are a straightforward way to identify skills, there are often implied or contextual skills that professionals might possess based on the nature of their work, even if these skills aren't directly mentioned. Using the provided resume and job description, some potential desirable skills and attributes can be inferred.When presenting these skills, especially in an interview or in a more detailed resume, it's essential to provide specific examples or experiences that demonstrate these attributes:</p>
                <div className='my-10'>
                    <div className="flex justify-between">
                        <div></div>
                        <p className='uppercase text-3xl'>Table 2 </p>
                    </div>
                    <Table tabs={dummyTabs} data={dummyData} />
                    <div className="h-[40px]"></div>
                    <Table tabs={dummyTabs2} data={dummyData} />
                </div>
            </div>
        </div>
    )
}

export default Analyzer