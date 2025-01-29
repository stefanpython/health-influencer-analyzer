"use client";

import React, { useState } from "react";
import { Search, ArrowUpRight, ArrowRight, Filter } from "lucide-react";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  const stats = [
    {
      label: "Trust Score",
      value: "89%",
      subtext: "Based on 127 verified claims",
    },
    { label: "Yearly Revenue", value: "$5.0M", subtext: "Estimated earnings" },
    { label: "Products", value: "1", subtext: "Recommended products" },
    { label: "Followers", value: "4.2M+", subtext: "Total following" },
  ];

  const categories = [
    "All Categories",
    "Sleep",
    "Performance",
    "Hormones",
    "Nutrition",
    "Exercise",
    "Stress",
    "Cognition",
    "Motivation",
    "Recovery",
    "Mental Health",
  ];

  const statuses = ["All Statuses", "Verified", "Questionable", "Debunked"];

  const claims = [
    {
      status: "Verified",
      date: "14/01/2024",
      trustScore: "92%",
      title:
        "Viewing sunlight within 30-60 minutes of waking enhances cortisol release",
      analysis:
        "Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.",
    },
    {
      status: "Verified",
      date: "08/12/2023",
      trustScore: "88%",
      title:
        "Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery",
      analysis:
        "Research indicates NSDR techniques enhance neural plasticity and aid in stress reduction.",
    },
    {
      status: "Verified",
      date: "01/12/2023",
      trustScore: "95%",
      title: "Cold exposure can increase norepinephrine by up to 500%",
      analysis:
        "Multiple clinical studies support the relationship between cold exposure and catecholamine release.",
    },
    {
      status: "Questionable",
      date: "28/11/2023",
      trustScore: "65%",
      title: "Mouth taping during sleep improves oxygen utilization",
      analysis:
        "Limited peer-reviewed studies available. More research needed to confirm long-term benefits.",
    },
    {
      status: "Verified",
      date: "15/11/2023",
      trustScore: "91%",
      title: "Exercise before fasting increases fat oxidation",
      analysis:
        "Metabolic studies consistently show enhanced fat utilization when exercising in a fasted state.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/64/64"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Andrew Huberman</h1>
            <div className="flex gap-4 text-sm text-gray-300 mb-3">
              <span>Neuroscience</span>
              <span>Sleep</span>
              <span>Performance</span>
              <span>Hormones</span>
              <span>Stress Management</span>
              <span>Exercise Science</span>
              <span>Light Exposure</span>
              <span>Circadian Biology</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stanford Professor of Neurobiology and Ophthalmology, focusing on
              neural development, brain plasticity, and neural regeneration.
              Host of the Huberman Lab Podcast, translating neuroscience into
              practical tools for everyday life. Known for evidence-based
              approaches to performance, sleep, stress management, and brain
              optimization.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-semibold mt-2 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 text-sm">
          <button className="text-emerald-400">Claims Analysis</button>
          <button className="text-gray-400">Recommended Products</button>
          <button className="text-gray-400">Monetization</button>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search claims..."
              className="w-full bg-gray-900 text-white pl-12 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          {/* Categories */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Categories</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1 rounded-full text-sm transition-colors ${
                    category === selectedCategory
                      ? "bg-emerald-400 text-gray-900"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Verification Status */}
          <div>
            <div className="text-sm text-gray-400 mb-2">
              Verification Status
            </div>
            <div className="flex gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-1 rounded-full text-sm transition-colors ${
                    status === selectedStatus
                      ? "bg-emerald-400 text-gray-900"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Claims List */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Filter className="w-4 h-4" />
            <span>Showing {claims.length} claims</span>
          </div>

          {/* Claims */}
          {claims.map((claim, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg mb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      claim.status === "Verified"
                        ? "bg-emerald-400/20 text-emerald-400"
                        : "bg-yellow-400/20 text-yellow-400"
                    }`}
                  >
                    {claim.status}
                  </span>
                  <span className="text-gray-400 text-sm">{claim.date}</span>
                </div>
                <div className="bg-gray-900 px-3 py-1 rounded-full">
                  <span
                    className={`font-semibold ${
                      parseInt(claim.trustScore) > 80
                        ? "text-emerald-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {claim.trustScore}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">
                    Trust Score
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-4">{claim.title}</h3>
              <div className="flex items-center gap-4">
                <button className="text-emerald-400 text-sm flex items-center gap-1">
                  View Source <ArrowRight className="w-4 h-4" />
                </button>
                <button className="text-emerald-400 text-sm flex items-center gap-1">
                  View Research <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400">
                    AI
                  </span>
                  AI Analysis
                </div>
                <p className="text-gray-400 text-sm mt-2">{claim.analysis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
