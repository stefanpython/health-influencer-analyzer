"use client";

import React, { useState } from "react";
import { ArrowLeft, Search, PlusCircle } from "lucide-react";

const ResearchTasks = () => {
  const [selectedMode, setSelectedMode] = useState("specific"); // specific or discover
  const [selectedTimeRange, setSelectedTimeRange] = useState("lastMonth");
  const [includeRevenue, setIncludeRevenue] = useState(true);
  const [verifyJournals, setVerifyJournals] = useState(true);

  const [selectedJournals, setSelectedJournals] = useState([]);

  const toggleJournal = (journal) => {
    setSelectedJournals((prev) =>
      prev.includes(journal)
        ? prev.filter((j) => j !== journal)
        : [...prev, journal]
    );
  };

  const selectAllJournals = () => {
    setSelectedJournals([
      "PubMed Central",
      "Science",
      "The Lancet",
      "JAMA Network",
      "Nature",
      "Cell",
      "New England Journal of Medicine",
    ]);
  };

  const deselectAllJournals = () => {
    setSelectedJournals([]);
  };

  return (
    <div className="min-h-screen  bg-slate-900 text-white p-8">
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src="/api/placeholder/32/32"
            alt="VerifyInfluencers Logo"
            className="w-8 h-8"
          />
          <span className="text-emerald-400 text-xl">VerifyInfluencers</span>
        </div>

        <div className="flex flex-wrap items-center space-x-6">
          <a href="#" className="text-gray-300">
            Leaderboard
          </a>
          <a href="#" className="text-gray-300">
            Products
          </a>
          <a href="#" className="text-gray-300">
            Monetization
          </a>
          <a href="#" className="text-gray-300">
            About
          </a>
          <a href="#" className="text-gray-300">
            Contact
          </a>
          <a href="#" className="text-gray-300">
            Admin
          </a>
          <button className="text-gray-300">Sign Out</button>
        </div>
      </nav>

      <div className="flex items-center mb-6">
        <button className="flex items-center text-emerald-400">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>
        <h1 className="text-2xl font-semibold ml-4">Research Tasks</h1>
      </div>

      <div className="bg-slate-800/50 rounded-lg p-6">
        <h2 className="text-lg font-medium mb-6 flex items-center">
          <div className="w-6 h-6 mr-2 text-emerald-400">⬡</div>
          Research Configuration
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={() => setSelectedMode("specific")}
            className={`bg-slate-800/80 rounded-lg p-4 hover:bg-slate-700/80 transition-colors ${
              selectedMode === "specific" ? "border-2 border-emerald-600" : ""
            }`}
          >
            <h3 className="text-center mb-2">Specific Influencer</h3>
            <p className="text-sm text-gray-400 text-center">
              Research a known health influencer by name
            </p>
          </button>

          <button
            onClick={() => setSelectedMode("discover")}
            className={`bg-slate-800/80 rounded-lg p-4 hover:bg-slate-700/80 transition-colors ${
              selectedMode === "discover" ? "border-2 border-emerald-600" : ""
            }`}
          >
            <h3 className="text-center mb-2">Discover New</h3>
            <p className="text-sm text-gray-400 text-center">
              Find and analyze new health influencers
            </p>
          </button>

          <div className="mt-6">
            <label className="block text-sm mb-2">Time Range</label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "lastWeek", label: "Last Week" },
                { id: "lastMonth", label: "Last Month" },
                { id: "lastYear", label: "Last Year" },
                { id: "allTime", label: "All Time" },
              ].map((timeRange) => (
                <button
                  key={timeRange.id}
                  onClick={() => setSelectedTimeRange(timeRange.id)}
                  className={`p-2 bg-slate-800/80 rounded text-center hover:bg-slate-700/80 transition-colors
                  ${
                    selectedTimeRange === timeRange.id
                      ? "bg-emerald-400/10 text-emerald-400"
                      : ""
                  }`}
                >
                  {timeRange.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-4">
              <label className="block text-sm mb-2">
                Products to Find Per Influencer
              </label>
              <input
                type="text"
                defaultValue="10"
                className="w-full bg-slate-800/80 rounded p-2 border border-slate-700"
              />
              <p className="text-xs text-gray-400 mt-1">
                Set to 0 to skip product research
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4>Include Revenue Analysis</h4>
                  <p className="text-xs text-gray-400">
                    Analyze monetization methods and estimate earnings
                  </p>
                </div>
                <button
                  onClick={() => setIncludeRevenue(!includeRevenue)}
                  className="relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out"
                  style={{
                    backgroundColor: includeRevenue ? "#10b981" : "#374151",
                  }}
                >
                  <div
                    className={`absolute w-5 h-5 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
                      includeRevenue ? "translate-x-6" : "translate-x-1"
                    }`}
                    style={{ top: "2px" }}
                  />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h4>Verify with Scientific Journals</h4>
                  <p className="text-xs text-gray-400">
                    Cross-reference claims with scientific literature
                  </p>
                </div>
                <button
                  onClick={() => setVerifyJournals(!verifyJournals)}
                  className="relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out"
                  style={{
                    backgroundColor: verifyJournals ? "#10b981" : "#374151",
                  }}
                >
                  <div
                    className={`absolute w-5 h-5 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
                      verifyJournals ? "translate-x-6" : "translate-x-1"
                    }`}
                    style={{ top: "2px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 -mt-16">
          <div>
            <label className="block text-sm mb-2">Influencer Name</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Enter influencer name"
                className="w-full bg-slate-800/80 rounded p-2 pl-10 border border-slate-700"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm mb-2">
                Claims to Analyze Per Influencer
              </label>
              <input
                type="text"
                defaultValue="50"
                className="w-full bg-slate-800/80 rounded p-2 border border-slate-700"
              />
              <p className="text-xs text-gray-400 mt-1">
                Recommended: 50-100 claims for comprehensive analysis
              </p>
            </div>

            <div className="container mt-4">
              <div className="text-xs flex justify-end mb-2">
                <button
                  className="text-emerald-400"
                  onClick={selectAllJournals}
                >
                  Select All
                </button>
                {" | "}
                <button
                  className="text-emerald-400"
                  onClick={deselectAllJournals}
                >
                  Deselect All
                </button>
              </div>
              {[
                "PubMed Central",
                "Science",
                "The Lancet",
                "JAMA Network",
                "Nature",
                "Cell",
                "New England Journal of Medicine",
              ].map((journal) => (
                <div
                  key={journal}
                  className="bg-slate-800/80 rounded p-3 mb-2 flex justify-between items-center border border-emerald-400/20 cursor-pointer"
                  onClick={() => toggleJournal(journal)}
                >
                  {journal}
                  <div
                    className={`w-4 h-4 rounded-full ${
                      selectedJournals.includes(journal)
                        ? "bg-emerald-400"
                        : "border-2 border-emerald-400"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm mb-2">
            Notes for Research Assistant
          </label>
          <textarea
            placeholder="Add any specific instructions or focus areas..."
            className="w-full h-32 bg-slate-800/80 rounded p-3 border border-slate-700"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-4 py-2 rounded flex items-center">
            <span className="mr-2">+</span>
            Start Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchTasks;
