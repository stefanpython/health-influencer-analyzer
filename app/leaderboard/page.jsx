import React from "react";

const influencers = [
  {
    rank: 1,
    name: "Dr. Peter Attia",
    category: "Medicine",
    trustScore: "94%",
    trend: "up",
    followers: "1.2M+",
    claims: 203,
  },
  {
    rank: 2,
    name: "Dr. Rhonda Patrick",
    category: "Nutrition",
    trustScore: "91%",
    trend: "up",
    followers: "980K+",
    claims: 156,
  },
  {
    rank: 3,
    name: "Dr. Chris Palmer",
    category: "Mental_health",
    trustScore: "90%",
    trend: "up",
    followers: "180K+",
    claims: 76,
  },
  {
    rank: 4,
    name: "Andrew Huberman",
    category: "Neuroscience",
    trustScore: "89%",
    trend: "up",
    followers: "4.2M+",
    claims: 127,
  },
  {
    rank: 5,
    name: "Dr. Dominic D'Agostino",
    category: "Nutrition",
    trustScore: "89%",
    trend: "down",
    followers: "290K+",
    claims: 112,
  },
  {
    rank: 6,
    name: "Dr. Gabrielle Lyon",
    category: "Medicine",
    trustScore: "88%",
    trend: "up",
    followers: "380K+",
    claims: 84,
  },
  {
    rank: 7,
    name: "Dr. David Sinclair",
    category: "Longevity",
    trustScore: "87%",
    trend: "up",
    followers: "1.1M+",
    claims: 145,
  },
];

const Leaderboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">Influencer Trust Leaderboard</h1>
        <p className="text-gray-400 mt-2">
          Real-time rankings of health influencers based on scientific accuracy,
          credibility, and transparency.
        </p>
        <div className="flex justify-between mt-6 bg-gray-800 p-4 rounded-lg">
          <div>
            <p className="text-lg font-semibold">1,234</p>
            <p className="text-gray-400 text-sm">Active Influencers</p>
          </div>
          <div>
            <p className="text-lg font-semibold">25,431</p>
            <p className="text-gray-400 text-sm">Claims Verified</p>
          </div>
          <div>
            <p className="text-lg font-semibold">85.7%</p>
            <p className="text-gray-400 text-sm">Average Trust Score</p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          {["All", "Nutrition", "Fitness", "Medicine", "Mental Health"].map(
            (category) => (
              <button
                key={category}
                className="bg-green-600 px-4 py-2 rounded-lg text-sm hover:bg-green-500"
              >
                {category}
              </button>
            )
          )}
        </div>

        <table className="w-full mt-6 border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-3">Rank</th>
              <th className="p-3">Influencer</th>
              <th className="p-3">Category</th>
              <th className="p-3">Trust Score</th>
              <th className="p-3">Trend</th>
              <th className="p-3">Followers</th>
              <th className="p-3">Verified Claims</th>
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer) => (
              <tr key={influencer.rank} className="bg-gray-800 rounded-lg">
                <td className="p-3">#{influencer.rank}</td>
                <td className="p-3">{influencer.name}</td>
                <td className="p-3">{influencer.category}</td>
                <td className="p-3 text-green-400">{influencer.trustScore}</td>
                <td className="p-3">
                  {influencer.trend === "up" ? "📈" : "📉"}
                </td>
                <td className="p-3">{influencer.followers}</td>
                <td className="p-3">{influencer.claims}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
