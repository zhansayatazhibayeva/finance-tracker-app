"use client";

import React, { useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import {
  Home,
  ArrowUpDown,
  PieChart,
  Wallet,
  Receipt,
  LogOut,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { redirect } from "next/navigation";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    {
      label: "Overview",
      icon: Home,
      href: "/app/dashboard",
    },
    {
      label: "Transactions",
      icon: ArrowUpDown,
      href: "/app/dashboard",
    },
    {
      label: "Budgets",
      icon: PieChart,
      href: "/app/dashboard",
    },
    {
      label: "Pots",
      icon: Wallet,
      href: "/app/dashboard",
    },
    {
      label: "Recurring Bills",
      icon: Receipt,
      href: "/app/dashboard",
    },
  ];

  return (
    <aside
      className={`h-screen flex flex-col justify-between bg-gray-800 p-6 flex-shrink-0 sticky top-0 overflow-hidden transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-[100px]" : "w-[280px]"
      }`}
    >
      <div>
        <h1
          className={`text-3xl flex items-center font-bold mb-12 transition-all duration-300 ${
            collapsed ? "justify-center" : "gap-4"
          }`}
        >
          <span
            className={`whitespace-nowrap transition-all duration-300 ${
              collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
            Finance tracker
          </span>
        </h1>

        <nav className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-700 text-gray-300 hover:text-white ${
                  collapsed ? "justify-center" : "gap-4"
                }`}
              >
                <Icon size={22} />

                <span
                  className={`whitespace-nowrap transition-all duration-300 ${
                    collapsed
                      ? "opacity-0 w-0 overflow-hidden"
                      : "opacity-100 w-auto"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-7">
        <Link
          href="/api/auth/signout"
          className={`flex items-center text-gray-400 font-semibold hover:text-white transition-all duration-300 ${
            collapsed ? "justify-center" : "gap-4"
          }`}
        >
          <LogOut size={22} />

          <span
            className={`whitespace-nowrap transition-all duration-300 ${
              collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
            Sign Out
          </span>
        </Link>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`flex items-center text-gray-400 font-semibold hover:text-white transition-all duration-300 ${
            collapsed ? "justify-center" : "gap-4"
          }`}
        >
          {!collapsed && (
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                collapsed
                  ? "opacity-0 w-0 overflow-hidden"
                  : "opacity-100 w-auto"
              }`}
            >
              Minimize sidebar
            </span>
          )}

          {collapsed ? <ArrowRight size={22} /> : <ArrowLeft size={22} />}
        </button>
      </div>
    </aside>
  );
}
