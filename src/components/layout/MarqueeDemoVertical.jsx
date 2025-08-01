import React from "react";
import { Marquee } from "../cards/Marquee";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const reviews = [
  {
    name: "Kapish Rohilla",
    username: "@kapish",
    body: "Super impressed by how personalized everything is. The meal plan actually fits my routine!",
    img: "https://avatar.vercel.sh/kapish",
  },
  {
    name: "Kabir Sharma",
    username: "@kabir",
    body: "The AI workout planner is a game changer. I finally feel consistent with my fitness goals.",
    img: "https://avatar.vercel.sh/kabir",
  },
  {
    name: "Avneet Singh",
    username: "@avneet",
    body: "Didn't expect it to be this good. The suggestions are on point, every single time.",
    img: "https://avatar.vercel.sh/avneet",
  },
  {
    name: "Mir Ahemd",
    username: "@mir",
    body: "It's like having a personal coach and nutritionist in my pocket. Love it!",
    img: "https://avatar.vercel.sh/mir",
  },
  {
    name: "Neel Shah",
    username: "@neel",
    body: "Great UI, smooth experience, and solid results. I've never felt more motivated.",
    img: "https://avatar.vercel.sh/neel",
  },
  {
    name: "Prem Patel",
    username: "@prem",
    body: "Honestly, I was skeptical, but this actually works. I'm already seeing changes.",
    img: "https://avatar.vercel.sh/prem",
  },
  {
    name: "Abhay Maheshwari",
    username: "@abhay",
    body: "Meals, workouts, progress tracking — all in one place. Super convenient!",
    img: "https://avatar.vercel.sh/abhay",
  },
  {
    name: "Haroon Tariq",
    username: "@haroon",
    body: "This keeps me consistent. I've finally found something that sticks with me.",
    img: "https://avatar.vercel.sh/haroon",
  },
  {
    name: "Yatharth Daga",
    username: "@yatharth",
    body: "Custom fitness suggestions that actually make sense. Highly recommend it!",
    img: "https://avatar.vercel.sh/yatharth",
  },
  {
    name: "Sarabjeet Singh",
    username: "@sarabjeet",
    body: "The automation is mind-blowing. Saves me hours every week. Totally worth it.",
    img: "https://avatar.vercel.sh/sarabjeet",
  },
  {
    name: "Abhishek Patel",
    username: "@abhishek",
    body: "Love how it adapts based on my progress. Feels really smart and responsive.",
    img: "https://avatar.vercel.sh/abhishek",
  },
  {
    name: "Ritwik",
    username: "@ritwik",
    body: "Simple to use, powerful under the hood. Definitely my favorite fitness tool.",
    img: "https://avatar.vercel.sh/ritwik",
  },
  {
    name: "Max Haxx",
    username: "@max",
    body: "It's slick, accurate, and easy to follow. Couldn't ask for more.",
    img: "https://avatar.vercel.sh/max",
  },
  {
    name: "Stephen Jerry",
    username: "@stephen",
    body: "Perfect for busy people. The AI takes care of all the planning I just show up.",
    img: "https://avatar.vercel.sh/stephen",
  },
  {
    name: "Vansh Rana",
    username: "@Vansh",
    body: "Its very intuitive has real nice informative tutorials. I really like it.",
    img: "https://avatar.vercel.sh/stephen",
  },
];


const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={classNames(
        "w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)] mb-4 cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-6 h-6 sm:w-8 sm:h-8" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xs sm:text-sm font-medium text-neutral-100">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-neutral-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs sm:text-sm text-neutral-100">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemoVertical() {
  const chunkSize = Math.ceil(reviews.length / 3);
  const columns = [
    reviews.slice(0, chunkSize),
    reviews.slice(chunkSize, chunkSize * 2),
    reviews.slice(chunkSize * 2),
  ];

  return (
    <div className="relative flex h-[50vh] sm:h-[60vh] md:h-[70vh] w-full justify-center overflow-hidden bg-black">
      {/* Mobile Layout - Single Column */}
      <div className="md:hidden w-full px-4">
        <Marquee
          pauseOnHover
          className="[--duration:30s]"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={review.username + i} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Desktop Layout - Three Columns */}
      <div className="hidden md:flex w-full">
        {columns.map((col, idx) => (
          <div key={idx} className="w-1/3 px-2">
            <Marquee
              pauseOnHover
              vertical
              reverse={idx % 2 !== 0}
              className="[--duration:25s]"
            >
              {col.map((review, i) => (
                <ReviewCard key={review.username + i} {...review} />
              ))}
            </Marquee>
          </div>
        ))}
      </div>

      {/* Top Blur */}
      <div className="pointer-events-none absolute top-0 left-0 h-12 sm:h-24 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm z-10" />
      {/* Bottom Blur */}
      <div className="pointer-events-none absolute bottom-[-1px] left-0 h-12 sm:h-24 w-full bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm z-10" />
    </div>
  );
}
