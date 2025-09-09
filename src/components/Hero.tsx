"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Tractor, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-green-50 py-20 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-green-800 mb-6"
          >
            Welcome to Kraal & Barn Farm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-700 mb-8 max-w-2xl"
          >
            Experience sustainable farming practices that nourish the land and
            our community. Fresh, local, and grown with care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-4"
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Leaf className="mr-2 h-5 w-5" /> Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Tractor className="mr-2 h-5 w-5" /> Our Products
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 opacity-50 z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
}
