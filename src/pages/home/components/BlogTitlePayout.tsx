'use client';
import { useState, useEffect } from "react";

export default function BlogTitlePayout() {
  const [activeAuthor, setActiveAuthor] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => setActiveAuthor(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const authors = {
    william: {
      name: "William Southam",
      title: "✅ Gambling Editor",
      description:
        "William has more than a decade of experience in the gambling industry, analyzing and reviewing online casino and sport betting sites.",
      img: "/william.png",
      initial: "W",
    },
    jenny: {
      name: "Jenny Zaino",
      title: "✅ Senior Fact Checker",
      description:
        "Jenny is an experienced fact-checker specializing in compliance, regulation, and accuracy in online gambling content.",
      img: "/jenny.png",
      initial: "J",
    },
  };

  const renderPopup = (key) => {
    const data = authors[key];
    if (!data || activeAuthor !== key) return null;

    return (
      <div
        className="absolute top-10 left-0 z-50 bg-white shadow-xl rounded-xl p-5 w-72 border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-3">
          <img
            src={data.img}
            alt={data.name}
            className="w-12 h-12 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `data:image/svg+xml,
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='50' fill='%23e5e7eb'/>
                <text x='50' y='55' text-anchor='middle' fill='%236b7280' font-size='40' font-family='Arial'>
                  ${data.initial}
                </text>
              </svg>`;
            }}
          />
          <div>
            <div className="font-bold text-gray-900">{data.name}</div>
            <div className="text-sm text-gray-600">{data.title}</div>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">{data.description}</p>
      </div>
    );
  };

  return (
    <div className="px-2">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Australia Fast Payout eWallet Casinos – Trusted Real Money Picks
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-600">

            {/* Last Updated */}
            <div className="flex items-center gap-2">
              <span className="font-medium">Last Updated:</span>
              <span className="font-bold text-gray-900">December 07, 2025</span>
            </div>

            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setActiveAuthor("william")}
              onMouseLeave={() => setActiveAuthor(null)}
              onClick={(e) => {
                e.stopPropagation();
                setActiveAuthor(activeAuthor === "william" ? null : "william");
              }}
            >
              <img
                src="/william.png"
                alt="William Southam"
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e5e7eb'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='%236b7280' font-size='40'%3ET%3C/text%3E%3C/svg%3E";
                }}
              />

              <span>
                Written by:{" "}
                <span className="text-blue-600 font-medium border-b border-dotted border-blue-500 hover:border-blue-600">
                  William Southam
                </span>
              </span>

              {renderPopup("william")}
            </div>

            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setActiveAuthor("jenny")}
              onMouseLeave={() => setActiveAuthor(null)}
              onClick={(e) => {
                e.stopPropagation();
                setActiveAuthor(activeAuthor === "jenny" ? null : "jenny");
              }}
            >
              <img
                src="/jenny.png"
                alt="Jenny Zaino"
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e5e7eb'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='%236b7280' font-size='40'%3EL%3C/text%3E%3C/svg%3E";
                }}
              />

              <span>
                Facts checked by:{" "}
                <span className="text-blue-600 font-medium border-b border-dotted border-blue-500 hover:border-blue-600">
                  Jenny Zaino
                </span>
              </span>

              {renderPopup("jenny")}
            </div>
          </div>
        </div>

        {/* Badge Section */}
        <div className="flex-shrink-0 self-center md:self-start bg-transparent">
          <div className="relative w-full flex justify-center bg-transparent">
            <img
              src="/badge.png"
              alt="Best Casinos Review Badge"
              className="w-40 md:w-42 object-contain bg-transparent"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' rx='20' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='20'%3ENO IMAGE%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
