import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const stories = [
  {
    name: 'Sana P.',
    title: 'Cleared DSA round + 18% rebate',
    quote:
      'The daily tasks and mentor check-ins felt like a friend keeping me accountable. I finished my roadmap and even got money back — wild.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Ishaan R.',
    title: 'From tutorial hell to first internship',
    quote:
      'Micro-goals and the interactive checklist broke my procrastination. The rebate pushed me to show up every day.',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Lina K.',
    title: 'Cracked data science interview',
    quote:
      'Tasks curated from YouTube and ChatGPT saved me hours. Mentors gave me clarity and confidence.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % stories.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Learners who felt seen — and shipped</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Real stories from people who wanted momentum, not pressure.</p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/10"
            >
              <div className="grid gap-0 md:grid-cols-5">
                <img src={stories[idx].img} alt={stories[idx].name} className="md:col-span-2 h-64 w-full object-cover md:h-full" />
                <div className="md:col-span-3 p-6">
                  <div className="flex items-center gap-1 text-orange-500" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{stories[idx].title}</p>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">“{stories[idx].quote}”</p>
                  <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">{stories[idx].name}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex justify-center gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i+1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${i === idx ? 'bg-teal-500' : 'bg-slate-300 dark:bg-slate-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
