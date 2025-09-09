"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Tractor } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-green-50 py-28 px-6 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold text-green-900 mb-6 leading-tight drop-shadow-lg"
          >
            Welcome to <span className="text-green-700">Kraal & Barn Farm</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-green-800 mb-10 max-w-3xl leading-relaxed"
          >
            Experience sustainable farming practices that nourish the land and
            our community. <br /> Fresh, local, and grown with care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex space-x-6"
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <Leaf className="mr-2 h-5 w-5" /> Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-700 text-green-700 hover:bg-green-100 text-lg px-8 py-4 rounded-xl shadow-sm transition"
            >
              <Tractor className="mr-2 h-5 w-5" /> Our Products
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Keep your glowing green blobs */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 opacity-50 z-0"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
    </section>
  );
}
