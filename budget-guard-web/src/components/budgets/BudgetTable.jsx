import { FaEdit, FaTrash } from "react-icons/fa";

export default function BudgetTable({
    budgets,
    onEdit,
    onDelete,
}) {
    return (
        <table className="w-full">
            <thead className="bg-gray-100">

                <tr>

                    <th className="text-left p-3">Kategori</th>

                    <th className="text-left p-3">Limit</th>

                    <th className="text-left p-3">Bulan</th>

                    <th className="text-left p-3">Tahun</th>

                    <th className="text-center p-3">
                        Aksi
                    </th>

                </tr>

            </thead>

            <tbody>

                {budgets.map((budget)=>(

                    <tr
                        key={budget.id}
                        className="border-b"
                    >

                        <td className="p-3">

                            {budget.category?.name}

                        </td>

                        <td className="p-3">

                            Rp {Number(budget.limit_amount).toLocaleString("id-ID")}

                        </td>

                        <td className="p-3">

                            {budget.month}

                        </td>

                        <td className="p-3">

                            {budget.year}

                        </td>

                        <td className="p-3">

                            <div className="flex justify-center gap-3">

                                <button
                                    onClick={()=>onEdit(budget)}
                                    className="text-blue-600"
                                >

                                    <FaEdit/>

                                </button>

                                <button
                                    onClick={()=>onDelete(budget.id)}
                                    className="text-red-600"
                                >

                                    <FaTrash/>

                                </button>

                            </div>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}