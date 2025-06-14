// import { Link } from "react-router-dom";
// import { ClockIcon, ChartBarIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

// const ANALYSIS_CONCEPTS = [
//   {
//     title: "Possession",
//     icon: ChartBarIcon,
//     description:
//       "Possession metrics reveal which team controls the game. By analyzing ball retention, you can identify tactical dominance and predict match outcomes. Our AI tracks every pass and touch to give you precise possession stats.",
//   },
//   {
//     title: "Average Speed",
//     icon: ArrowPathIcon,
//     description:
//       "Speed is crucial in football. We calculate the average speed of players during sprints, transitions, and key moments. This helps coaches optimize player positioning and improve team dynamics.",
//   },
//   {
//     title: "Distance Covered",
//     icon: ClockIcon,
//     description:
//       "Distance covered by players shows their work rate and stamina. Our AI maps every step to provide insights into player endurance, helping teams adjust strategies for better performance.",
//   },
// ];

// function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white">
//       {/* Hero Section */}
//       <section className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605557626697-6b5d64c4d086?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight animate-pulse">
//             Football Video Analysis
//           </h1>
//           <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto text-gray-200 animate-fade-in">
//             Analyze football videos with AI to extract insights like possession, speed, and distance.
//           </p>
//           <div className="flex justify-center space-x-6 mt-8">
//             <Link
//               to="/upload"
//               className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wide hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-lg animate-bounce"
//             >
//               Try Now
//             </Link>
//             <Link
//               to="/model-details"
//               className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wide hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-lg animate-bounce delay-100"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>

//         {/* Football Field Lines Overlay */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none">
//           <div className="h-full w-full bg-repeating-linear-gradient bg-[linear-gradient(to_right,white_2px,transparent_2px)] bg-[size:60px_100%]"></div>
//         </div>
//       </section>      
//     </div>
//   );
// }

// export default Home;


import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function TypewriterText({ text, speed = 800, eraseSpeed = 200, delay = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing phase
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
      } else {
        // Start erasing after a delay
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIndex(text.length - 1);
        }, delay);
      }
    } else {
      // Erasing phase
      if (index >= 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, eraseSpeed);
      } else {
        // Start typing again
        setIsTyping(true);
        setIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, isTyping, text, speed, eraseSpeed, delay]);

  return (
    <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto text-gray-200 animate-fade-in relative">
      {displayedText}
      <span className="animate-blink">|</span>
    </p>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605557626697-6b5d64c4d086?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight animate-pulse">
            Football Video Analysis
          </h1>
          <TypewriterText
            text="Analyze football videos with AI to extract insights like possession, speed, and distance."
            speed={100}
            eraseSpeed={50}
            delay={2000}
          />
          <div className="flex justify-center space-x-6 mt-8">
            <Link
              to="/upload"
              className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wide hover:bg-purple-700 hover:scale-110 transition-all duration-300 shadow-lg animate-bounce"
            >
              Try Now
            </Link>
            <Link
              to="/model-details"
              className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wide hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-lg animate-bounce delay-100"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Football Field Lines Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="h-full w-full bg-repeating-linear-gradient bg-[linear-gradient(to_right,white_2px,transparent_2px)] bg-[size:60px_100%]"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;