export default function DocCard({ title, description }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
