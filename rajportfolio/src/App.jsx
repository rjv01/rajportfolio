import { useState } from "react";

function App() {
  const data = [
    {
      id: "rjv01",
      text:"Welcome to My Personal Portfolio ",
      profilePic: "../src/assets/rajProfile1.jpg",
      // content1: "Welcome to My Personal Portfolio",
    },
    {
      id: "About Me",
      profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQFJQtILZr-gvw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703257283843?e=1753315200&v=beta&t=6ICGUngp4lmnBxh-8mWuGVtXpC5ywUtEgr4qOYCulTY",
      content1:[
        <>
        Hey there, I'm in my <strong className="text-green-400">Final year of Btech(CSE)</strong>. I’m someone who loves creating things independently and learning from my mistakes. <strong>I’m not afraid</strong> to ask for help when needed, because I believe that’s part of 
        <strong> growing</strong>. As I’m in the early phase of my journey, I’m eager to <strong>explore different technologies</strong> and tech stacks before deciding where to specialize.
        </>
      ],
      content2:[
        <>
        I enjoy turning <strong className="text-green-400">ideas into fully functional, live websites</strong>. While I’m comfortable working alone, I thrive even more when collaborating with a team. I value <strong>feedback—especially</strong> when someone points out <strong>bugs</strong> in my work—because it helps me learn and improve One of <strong className="text-green-400">my strengths is communication</strong>—not necessarily in terms of language fluency, but in the way I express thoughts clearly and connect with people. I am a deep thinker and sometimes tend to overdo things, but I'm actively working on improving that.
        </>
      ],
    },
    {
      id: "School College Skills",
      profilePic: "../src/assets/RajProfilePic.png",
      content1:[
        <>
        I am a <strong className="text-green-400">KV student</strong> who studied KV ONGC in Chandkheda, Ahmedabad, for both my <strong className="text-green-400">10th(83%) and 12th(81.1%) grades</strong>.  A little info: Despite the fact that my grades didn't always reflect it, I've always loved math.  However, I've always done well in science, which is a topic I really adore. Even though I'm not a state champion in any sport, I enjoy playing cricket and football, especially in my spare time and at college functions.I'm currently t in the last year of <strong className="text-green-400">Vellore Institute of Technology's B.Tech program in computer science and engineering in Bhopal (2021-2025)</strong>.  I've learnt the majority of my knowledge on my own using YouTube and other  resources(<strong>friends</strong>).  Despite this, I now have a <strong className="text-green-400">CGPA of 8.51</strong> and <strong>have passed</strong> all of my college examinations without any backlogs or supplemental tests. I like <strong>Parallel Computing and Computer Vision</strong> just like I liked my school crush – something I admire from a distance but haven’t had a deep <strong>conversation</strong> with yet.
        </>
      ],
      content2:[
        <>
        I gained an understanding of the fundamentals of web programming during my first year by learning <strong className="text-green-400">HTML, CSS, and a bit JavaScript</strong>.  While working on a college project in my second year, I explored the Python-based backend framework <strong className="text-green-400">Django</strong>. Later, I moved on to the <strong className="text-green-400">MERN stack (MongoDB, Express.js, React, Node.js)</strong>, which I learned through online courses and YouTube tutorials. It became my go-to stack for building full-stack web applications.Other programming languages that I know how to use are <strong className="text-green-400">MySQL, Java, and C++</strong>.The majority of my DSA <strong className="text-green-400">(Data Structures and Algorithms)</strong> practice was completed in C++, which improved my ability to solve problems.I learned Java because it was a necessary subject in college.In my opinion, <strong className="text-green-400">MySQL is both enjoyable and fascinating</strong> to work with because it is straightforward in theory but difficult to use when dealing with intricate queries.
        </>
      ],
    },
    {
    id: "Projects",
    profilePic: "../src/assets/github-profile-old.jpg",
    content1: [
      <>
        <strong className="text-green-400">EventPro (HTML, CSS, Django):</strong> A web platform designed to collect and display details of all events happening in our college. It also manages the activities of different college clubs.{" "}
        <a href="https://github.com/rjv01/Suvidha-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          GitHub Link
        </a>
        <br />
        <br />
      </>,
      <>
        <strong className="text-green-400">Suvidha:</strong> A socially driven project focused on providing work opportunities for rural and local people.{" "}
        <a href="https://github.com/rjv01/Suvidha-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          GitHub Link
        </a>
      </>
    ],
    content2: [
      <>
        <strong className="text-green-400">ArrowBuzz:</strong> A service-based bidding platform where servicemen can place bids on tasks posted by customers.{" "}
        <a href="https://github.com/anshulsarathe35/ArrowBuzz_frontend" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          GitHub Link
        </a>
        <br />
        <br />
      </>,
      <>
        <strong className="text-green-400">Konsi-Movie:</strong> A personal project that allows users to post reviews of movies they’ve watched.{" "}
        <a href="https://github.com/rjv01/konsi-movies" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          GitHub Link
        </a>
      </>
    ]
  },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, data.length - 1));
  };

  const handleBack = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const current = data[index];

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
  <div className="flex flex-col items-center bg-[#0f0f0f] text-white border border-red-500 w-[900px] h-[600px] p-6 gap-4 rounded-xl shadow-lg shadow-red-500/30 transition-all duration-300">
    <h1 className="text-4xl bebas-neue-regular text-red-500 tracking-wide uppercase text-center">
      {current.id} 
    </h1>

    {current.text && (
      <p className="text-xl bebas-neue-regular text-red-500 tracking-wide text-center">
        {current.text}
      </p>
    )}

    <div className="grid grid-cols-3 gap-4 w-full h-full">
      <div className="overflow-y-auto pr-2 max-h-[400px] text-justify poppins-regular text-sm leading-relaxed scroll-smooth">
        {current.content1}
      </div>
      <div className="flex justify-center items-center">
        <img
          className="rounded-xl h-[200px] w-[200px] object-cover border-2 border-red-600"
          src={current.profilePic}
          alt="profile"
        />
      </div>
      <div className="overflow-y-auto pl-2 max-h-[400px] text-justify poppins-regular text-sm leading-relaxed scroll-smooth">
        {current.content2}
      </div>
    </div>

    <div className="flex gap-3 mt-2">
      {index > 0 && (
        <button
          onClick={handleBack}
          className="text-base px-4 py-1 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md shadow-red-500/30 transition-all duration-200"
        >
          Back
        </button>
      )}
      {index < data.length - 1 && (
        <button
          onClick={handleNext}
          className="text-base px-4 py-1 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md shadow-red-500/30 transition-all duration-200"
        >
          Next
        </button>
      )}
    </div>
  </div>
</div>

  );
}

export default App;
