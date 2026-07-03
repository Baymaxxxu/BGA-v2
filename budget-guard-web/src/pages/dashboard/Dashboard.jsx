import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import {
    getDashboard,
    getCategoryProgress,
    getNotifications,
} from "../../services/dashboardService";

import StatCard from "../../components/dashboard/StatCard";
import BudgetProgress from "../../components/dashboard/BudgetProgress";
import NotificationCard from "../../components/dashboard/NotificationCard";

export default function Dashboard() {

    const [summary,setSummary]=useState(null);

    const [categories,setCategories]=useState([]);

    const [notifications,setNotifications]=useState([]);

    useEffect(()=>{

        loadDashboard();

    },[]);

    async function loadDashboard(){

        try{

            const dashboard=await getDashboard();

            const category=await getCategoryProgress();

            const notif=await getNotifications();

            setSummary(dashboard);

            setCategories(category);

            setNotifications(notif);

        }catch(e){

            console.log(e);

        }

    }

    if(!summary){

        return(

            <MainLayout>

                Loading...

            </MainLayout>

        );

    }

    return(

        <MainLayout>

            <h1 className="text-3xl font-bold mb-8">

                Dashboard

            </h1>

            <div className="grid grid-cols-4 gap-5">

                <StatCard
                    title="Budget"
                    value={`Rp ${summary.total_budget}`}
                    color="text-blue-600"
                />

                <StatCard
                    title="Spent"
                    value={`Rp ${summary.total_spent}`}
                    color="text-red-500"
                />

                <StatCard
                    title="Remaining"
                    value={`Rp ${summary.remaining}`}
                    color="text-green-600"
                />

                <StatCard
                    title="Usage"
                    value={`${summary.percentage}%`}
                    color="text-orange-500"
                />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">

                <div className="bg-white shadow rounded-xl p-6">

                    <h2 className="font-bold text-xl mb-6">

                        Budget Progress

                    </h2>

                    {

                        categories.map((item)=>(

                            <BudgetProgress

                                key={item.category}

                                item={item}

                            />

                        ))

                    }

                </div>

                <div className="bg-white shadow rounded-xl p-6">

                    <h2 className="font-bold text-xl mb-6">

                        Notifications

                    </h2>

                    {

                        notifications.length===0?

                        <p>

                            Tidak ada notifikasi

                        </p>

                        :

                        notifications.map((item)=>(

                            <NotificationCard

                                key={item.id}

                                notification={item}

                            />

                        ))

                    }

                </div>

            </div>

        </MainLayout>

    );

}