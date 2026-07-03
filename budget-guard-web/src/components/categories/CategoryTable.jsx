import { FaEdit, FaTrash } from "react-icons/fa";

export default function CategoryTable({
    categories,
    onEdit,
    onDelete,
}) {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">Icon</th>
                    <th className="p-3 text-center">Aksi</th>
                </tr>
            </thead>

            <tbody>
                {categories.map((item) => (
                    <tr
                        key={item.id}
                        className="border-b"
                    >
                        <td className="p-3">
                            {item.name}
                        </td>

                        <td className="p-3">
                            {item.icon ?? "-"}
                        </td>

                        <td className="p-3">

                            <div className="flex justify-center gap-3">

                                <button
                                    onClick={() => onEdit(item)}
                                    className="text-blue-600"
                                >
                                    <FaEdit />
                                </button>

                                <button
                                    onClick={() => onDelete(item.id)}
                                    className="text-red-600"
                                >
                                    <FaTrash />
                                </button>

                            </div>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}