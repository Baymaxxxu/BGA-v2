export default function StatCard({
    title,
    value,
    color = "text-blue-600",
}) {
    return (
        <div className="bg-white rounded-xl shadow p-6">

            <p className="text-gray-500">
                {title}
            </p>

            <h2 className={`text-3xl font-bold mt-3 ${color}`}>
                {value}
            </h2>

        </div>
    );
}