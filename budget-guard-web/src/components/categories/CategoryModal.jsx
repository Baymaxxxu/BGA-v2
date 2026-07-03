import CategoryForm from "./CategoryForm";

export default function CategoryModal({
    open,
    selected,
    onClose,
    onSave,
}) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            <div className="bg-white rounded-xl w-96 p-6">

                <h2 className="text-xl font-bold mb-5">

                    {selected ? "Edit" : "Tambah"} Category

                </h2>

                <CategoryForm
                    selected={selected}
                    onSubmit={onSave}
                />

                <button
                    onClick={onClose}
                    className="mt-5 w-full border rounded-lg p-3"
                >

                    Batal

                </button>

            </div>

        </div>

    );

}