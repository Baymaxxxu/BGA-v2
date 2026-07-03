import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import CategoryTable from "../../components/categories/CategoryTable";
import CategoryModal from "../../components/categories/CategoryModal";

import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../../services/categoryService";

import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error(error);
            toast.error("Gagal memuat kategori");
        }
    }

    function addCategory() {
        setSelected(null);
        setOpenModal(true);
    }

    function editCategory(category) {
        setSelected(category);
        setOpenModal(true);
    }

    async function saveCategory(data) {
        try {
            if (selected) {
                await updateCategory(selected.id, data);
                toast.success("Kategori berhasil diperbarui");
            } else {
                await createCategory(data);
                toast.success("Kategori berhasil ditambahkan");
            }

            setOpenModal(false);
            loadCategories();
        } catch (error) {
            console.error(error);
            toast.error("Gagal menyimpan kategori");
        }
    }

    async function removeCategory(id) {
        const result = await Swal.fire({
            title: "Hapus kategori?",
            text: "Data yang dihapus tidak bisa dikembalikan.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya",
            cancelButtonText: "Batal",
        });

        if (!result.isConfirmed) return;

        try {
            await deleteCategory(id);

            toast.success("Kategori berhasil dihapus");

            loadCategories();
        } catch (error) {
            console.error(error);
            toast.error("Gagal menghapus kategori");
        }
    }

    return (
        <MainLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">
                    Categories
                </h1>

                <button
                    onClick={addCategory}
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg"
                >
                    + Tambah
                </button>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
                <CategoryTable
                    categories={categories}
                    onEdit={editCategory}
                    onDelete={removeCategory}
                />
            </div>

            <CategoryModal
                open={openModal}
                selected={selected}
                onClose={() => setOpenModal(false)}
                onSave={saveCategory}
            />
        </MainLayout>
    );
}