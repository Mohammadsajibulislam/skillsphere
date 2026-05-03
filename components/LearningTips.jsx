const tips = [
  {
    id: 1,
    icon: "📅",
    title: "Set a Study Schedule",
    description:
      "Dedicate specific hours each day for learning. Consistency is the key to mastering any skill.",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Set Clear Goals",
    description:
      "Break your learning into small achievable goals. Celebrate every milestone you reach.",
  },
  {
    id: 3,
    icon: "📝",
    title: "Take Notes",
    description:
      "Write down key concepts while learning. It helps you retain information much better.",
  },
  {
    id: 4,
    icon: "🔁",
    title: "Practice Regularly",
    description:
      "Apply what you learn through projects and exercises. Practice makes perfect.",
  },
];

export default function LearningTips() {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Learning Tips</h2>
          <p className="text-gray-500 mt-2">
            Smart strategies to help you learn faster and better
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition p-6 text-center"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-500">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}