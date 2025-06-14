import { ClockIcon, ChartBarIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const ANALYSIS_CONCEPTS = [
  {
    title: "Possession",
    icon: ChartBarIcon,
    description:
      "Possession metrics reveal which team controls the game. By analyzing ball retention, you can identify tactical dominance and predict match outcomes. Our AI tracks every pass and touch to give you precise possession stats, calculating the percentage of time each team maintains control of the ball through advanced video frame analysis.",
  },
  {
    title: "Average Speed",
    icon: ArrowPathIcon,
    description:
      "Speed is crucial in football. We calculate the average speed of players during sprints, transitions, and key moments. Our AI processes video frames to detect player movements, using pixel displacement and frame rate to derive speed in km/h, helping coaches optimize player positioning and improve team dynamics.",
  },
  {
    title: "Distance",
    icon: ClockIcon,
    description:
      "Distance covered by players shows their work rate and stamina. Our AI maps every step by tracking player positions across video frames, converting pixel distances to real-world measurements using field calibration. This provides insights into player endurance, helping teams adjust strategies for better performance.",
  },
];

function ModelDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-purple-200 text-black pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-5xl font-semibold text-center  tracking-tight text-[#2a2727] mb-12">
          Model Details & Concepts
        </h1>

        <section className="py-4 px-4 bg-gradient-to-b from-purple-200 to-purple-200 text-black">
        <div className="max-w-5xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ANALYSIS_CONCEPTS.map((concept, index) => (
              <div
                key={concept.title}
                className={`flex flex-col bg-white items-center p-6 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-${index * 100}`}
              >
                <concept.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{concept.title}</h3>
                <p className="text-gray-600 text-center">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Video Section */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-center uppercase tracking-tight mb-6">
            See Our AI in Action
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/JjRju0LPQ3g"
                title="AI Football Analysis Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                ></iframe>
            </div>
            <p className="text-gray-700 text-center max-w-2xl">
              Watch how our AI analyzes football matches to provide insights on possession, speed, and distance. This demo showcases real-time tracking and data visualization for a professional match.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelDetails;