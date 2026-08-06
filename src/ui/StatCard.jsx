import Card from "./Card";

export default function StatCard({
  value,
  title,
  icon,
}) {
  return (
    <Card className="p-8 text-center hover:border-indigo-500/40">

      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h2 className="text-4xl font-black text-indigo-400">
        {value}
      </h2>

      <p className="text-gray-400 mt-3">
        {title}
      </p>

    </Card>
  );
}