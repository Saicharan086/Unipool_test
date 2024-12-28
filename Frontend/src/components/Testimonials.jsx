import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote: "It was the best of times, it was the worst of times...",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      rating: 5,
    },
    {
      quote: "To be, or not to be, that is the question...",
      name: "William Shakespeare",
      title: "Hamlet",
      rating: 4,
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      rating: 4,
    },
    {
      quote: "It is a truth universally acknowledged...",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      rating: 5,
    },
    {
      quote: "Call me Ishmael...",
      name: "Herman Melville",
      title: "Moby-Dick",
      rating: 3,
    },
  ];
  
  export default function InfiniteMovingCardsDemo() {
    return (
      <div className="h-[40rem] rounded-md flex gap-20 flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <h2 className="font-semibold text-5xl text-center">Testimonials</h2>
        <InfiniteMovingCards className="" items={testimonials} direction="right" speed="slow" />
      </div>
    );
  }