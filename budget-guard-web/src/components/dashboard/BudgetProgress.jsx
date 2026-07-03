export default function BudgetProgress({ item }) {

    const color =
        item.status === "blocked"
            ? "bg-red-500"
            : item.status === "warning"
            ? "bg-yellow-500"
            : "bg-green-500";

    return (

        <div className="mb-5">

            <div className="flex justify-between">

                <span className="font-semibold">
                    {item.category}
                </span>

                <span>

                    {item.percentage}%

                </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

                <div
                    className={`${color} h-3 rounded-full`}
                    style={{
                        width: `${Math.min(item.percentage,100)}%`,
                    }}
                />

            </div>

        </div>

    );

}