import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import MainLayout from "../../layouts/MainLayout";

import BudgetTable from "../../components/budgets/BudgetTable";
import BudgetModal from "../../components/budgets/BudgetModal";

import {
    getBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
} from "../../services/budgetService";

import { getCategories } from "../../services/categoryService";

export default function Budgets() {

    const [budgets, setBudgets] = useState([]);

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedBudget, setSelectedBudget] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    async function loadData() {

        try {

            const budgetData = await getBudgets();

            const categoryData = await getCategories();

            setBudgets(budgetData);

            setCategories(categoryData);

        } catch (error) {

            console.error(error);

            Swal.fire(
                "Error",
                "Gagal mengambil data budget",
                "error"
            );

        }

    }

    function openCreateModal() {

        setSelectedBudget(null);

        setModalOpen(true);

    }

    function openEditModal(budget) {

        setSelectedBudget(budget);

        setModalOpen(true);

    }

    async function handleSubmit(form) {

        try {

            setLoading(true);

            if (selectedBudget) {

                await updateBudget(
                    selectedBudget.id,
                    {
                        limit_amount: form.limit_amount,
                    }
                );

                Swal.fire(
                    "Berhasil",
                    "Budget berhasil diperbarui",
                    "success"
                );

            } else {

                await createBudget(form);

                Swal.fire(
                    "Berhasil",
                    "Budget berhasil ditambahkan",
                    "success"
                );

            }

            setModalOpen(false);

            loadData();

        } catch (error) {

            console.error(error);

            Swal.fire(
                "Gagal",
                error.response?.data?.message ??
                "Terjadi kesalahan",
                "error"
            );

        } finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        const confirm = await Swal.fire({

            title: "Hapus Budget?",

            text: "Data tidak dapat dikembalikan.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonText: "Hapus",

            cancelButtonText: "Batal",

        });

        if (!confirm.isConfirmed) return;

        try {

            await deleteBudget(id);

            Swal.fire(
                "Berhasil",
                "Budget berhasil dihapus",
                "success"
            );

            loadData();

        } catch (error) {

            console.error(error);

            Swal.fire(
                "Error",
                "Gagal menghapus budget",
                "error"
            );

        }

    }

    return (

        <MainLayout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">

                    Budget

                </h1>

                <button
                    onClick={openCreateModal}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                    + Tambah Budget
                </button>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                {
                    budgets.length === 0 ?

                        <p>

                            Belum ada budget.

                        </p>

                        :

                        <BudgetTable
                            budgets={budgets}
                            onEdit={openEditModal}
                            onDelete={handleDelete}
                        />

                }

            </div>

            <BudgetModal

                open={modalOpen}

                onClose={() => setModalOpen(false)}

                categories={categories}

                initialData={selectedBudget}

                onSubmit={handleSubmit}

                loading={loading}

            />

        </MainLayout>

    );

}