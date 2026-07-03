import { useEffect, useState } from "react";

export default function BudgetForm({
    categories,
    initialData,
    onSubmit,
    loading,
}) {
    const [form, setForm] = useState({
        category_id: "",
        limit_amount: "",
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                category_id: initialData.category_id,
                limit_amount: initialData.limit_amount,
                month: initialData.month,
                year: initialData.year,
            });
        }
    }, [initialData]);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(form);
    }

    const isEdit = !!initialData;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div>
                <label className="block mb-1 font-medium">
                    Kategori
                </label>

                <select
                    name="category_id"
                    value={form.category_id}
                    onChange={handleChange}
                    disabled={isEdit}
                    className="w-full border rounded-lg p-2"
                    required
                >
                    <option value="">
                        Pilih Kategori
                    </option>

                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-1 font-medium">
                    Limit Budget
                </label>

                <input
                    type="number"
                    name="limit_amount"
                    value={form.limit_amount}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="block mb-1 font-medium">
                        Bulan
                    </label>

                    <input
                        type="number"
                        name="month"
                        value={form.month}
                        onChange={handleChange}
                        disabled={isEdit}
                        className="w-full border rounded-lg p-2"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Tahun
                    </label>

                    <input
                        type="number"
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        disabled={isEdit}
                        className="w-full border rounded-lg p-2"
                    />
                </div>

            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white rounded-lg py-2"
            >
                {loading ? "Menyimpan..." : "Simpan"}
            </button>

        </form>
    );
}