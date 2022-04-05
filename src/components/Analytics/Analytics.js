import React from 'react';
import useReports from '../../hooks/useReports';
import Profit from '../Profit/Profit';
import Sells from '../Sells/Sells';
import TotalReports from '../TotalReports/TotalReports';
import MonthlyUsers from './../MonthlyUsers/MonthlyUsers';

const Analytics = () => {
    const [reports] = useReports();

    return (
        <section className='bg-white'>
            <div className='container mx-auto items-center px-20 py-24 text-center'>
                <h2 className='text-4xl font-bold text-slate-800 text-center mb-16'>Analytics Reports</h2>

                <div className="grid grid-cols-2 gap-10">
                    <Profit reports={reports}></Profit>
                    <Sells reports={reports}></Sells>
                    <MonthlyUsers reports={reports}></MonthlyUsers>
                    <TotalReports reports={reports}></TotalReports>
                </div>
            </div>
        </section>
    );
};

export default Analytics;