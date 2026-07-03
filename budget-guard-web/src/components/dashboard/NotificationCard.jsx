export default function NotificationCard({ notification }) {

    return (

        <div className="border rounded-lg p-4 mb-3">

            <h4 className="font-bold">
                {notification.title}
            </h4>

            <p className="text-sm text-gray-600 mt-2">
                {notification.message}
            </p>

        </div>

    );

}