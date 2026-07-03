import BudgetForm from "./BudgetForm";

export default function BudgetModal({
    open,
    onClose,
    categories,
    initialData,
    onSubmit,
    loading,
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-xl font-bold">
                        {initialData ? "Edit Budget" : "Tambah Budget"}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black text-xl"
                    >
                        ×
                    </button>

                </div>

                <BudgetForm
                    categories={categories}
                    initialData={initialData}
                    onSubmit={onSubmit}
                    loading={loading}
                />

            </div>

        </div>
    );
}