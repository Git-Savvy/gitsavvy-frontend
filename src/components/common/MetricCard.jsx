export default function MetricCard({ label, value }) {
  return (
    <div className="border rounded-lg p-4 text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
    </div>
  );
}
