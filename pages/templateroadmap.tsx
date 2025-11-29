import React from "react";

export default function CodeChefUICopy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-3 gap-6">
        {/* Left Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Header Section */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 space-y-3">
            <h1 className="text-2xl font-bold">Python with Beginner DSA</h1>
            <p className="text-gray-300 text-sm">
              Learn the basics of Python and data structures. Use practice modules to boost your coding and logic. End the roadmap with projects to showcase your Python abilities.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 pt-2">
              <span>Certification Available</span>
              <span>4.6 ★</span>
              <span>(140.7k+ Reviews)</span>
              <span>6 Courses</span>
              <span>6 months</span>
              <span>719 Problems</span>
            </div>
            <button className="mt-3 bg-blue-600 px-4 py-2 rounded-lg text-sm">Start Roadmap Now</button>
            <p className="text-gray-400 text-xs pt-1">400k+ people already enrolled</p>
          </div>

          {/* What you'll learn */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="space-y-2">
                <p>✔ Learn Python Programming</p>
                <p>✔ Building Projects while learning Python</p>
                <p>✔ Practice Basic Math</p>
              </div>
              <div className="space-y-2">
                <p>✔ Practice Python</p>
                <p>✔ 500 to 1000 difficulty rating</p>
                <p>✔ Practice DSA</p>
              </div>
            </div>
          </div>

          {/* Level 1 */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 space-y-4">
            <h2 className="text-lg font-bold">1 — Level 1</h2>
            <h3 className="text-md font-semibold">Learn Python</h3>
            <p className="text-gray-300 text-sm">Build foundational knowledge • 2 courses • 4 weeks to complete</p>
            <p className="text-gray-400 text-sm">Start the journey with getting a strong command over Python. Revise the important concepts if you are already familiar with the language.</p>

            {/* Learn Python Programming */}
            <div className="bg-gray-700 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold">Learn Python Programming — Learn Course • 240 Problems</h4>
              <button className="bg-blue-600 px-3 py-1 rounded text-sm">Start</button>
              <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
                <li>Output / Print in Python</li>
                <li>Variables and datatypes</li>
                <li>Strings</li>
                <li>Taking input from users</li>
                <li>Conditional statements</li>
                <li>How to debug your code</li>
                <li>Arrays and Loops</li>
                <li>Functions in python</li>
                <li>Tuples and Dictionary</li>
                <li>Getting started with algorithmic problems</li>
              </ul>
            </div>

            {/* Practice Python */}
            <div className="bg-gray-700 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold">Practice Python — Practice Course • 192 Problems</h4>
              <button className="bg-blue-600 px-3 py-1 rounded text-sm">Start</button>
              <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
                <li>Input and output</li>
                <li>Conditions — if / elif / else</li>
                <li>Iterate using for and while loops</li>
                <li>Debugging problems</li>
              </ul>
            </div>

            {/* Python Online Test */}
            <div className="bg-gray-700 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold">Python Online Test & Quiz — Skill Test • 30 Problems</h4>
              <button className="bg-blue-600 px-3 py-1 rounded text-sm">Start</button>
              <p className="text-gray-300 text-sm">The test will be 1 hour and 30 minutes long duration</p>
            </div>
          </div>

          {/* Level 2 */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 space-y-6">
            <h2 className="text-lg font-bold">Level 2: Beginner DSA in Python</h2>
            <div className="bg-gray-700 h-40 rounded-xl"></div>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">Start</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold mb-2">₹4999</h2>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>✔ 6 months access</li>
              <li>✔ Beginner friendly Python</li>
              <li>✔ Hands-on projects</li>
              <li>✔ Certificate of completion</li>
            </ul>
            <button className="w-full mt-4 bg-blue-600 px-4 py-2 rounded-lg text-sm">Buy Now</button>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
            <div className="bg-gray-700 h-40 rounded-xl"></div>
            <p className="text-sm text-gray-400 mt-2">Certificate of Completion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
