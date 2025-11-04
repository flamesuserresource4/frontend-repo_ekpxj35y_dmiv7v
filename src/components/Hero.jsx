import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sun, Moon, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const goals = [
  { key: 'it', label: 'Start Your IT Roadmap', prompt: 'Break into IT with guided paths and mentor checks.' },
  { key: 'dev', label: 'Become a Full‑Stack Developer', prompt: 'Build real projects with daily tasks and check-ins.' },
  { key: 'ds', label: 'Crack Data Science', prompt: 'Hands-on ML tasks and interview prep timelines.' },
  { key: 'exam', label: 'Ace Competitive Exams', prompt: 'Structured sprints and smart revision plans.' },
];

export default function Hero({ onToggleTheme }) {
  const [selected, setSelected] = useState(goals[0].key);

  useEffect(() => {
    const stored = localStorage.getItem('edubayte_goal');
    if (stored && goals.find(g => g.key === stored)) setSelected(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('edubayte_goal', selected);
  }, [selected]);

  const active = useMemo(() => goals.find(g => g.key === selected), [selected]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Immersive 3D preview */}
        <Spline
          scene="https://prod.spline.design/6yY0b8wU7m2oV4mJ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 dark:from-slate-900/70 dark:via-slate-900/70 dark:to-slate-900/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-teal-600" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">EduBayte</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex h-10 items-center rounded-full border border-slate-200 bg-white/70 px-3 text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
            >
              <Sun className="h-4 w-4 block dark:hidden" />
              <Moon className="hidden h-4 w-4 dark:block" />
              <span className="ml-2 text-xs font-medium">Theme</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              Self-Learn Smarter:
              <span className="block bg-gradient-to-r from-teal-500 via-teal-400 to-orange-400 bg-clip-text text-transparent">Skills Without the Grind</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-300"
            >
              {active?.prompt} EduBayte blends flexible roadmaps, daily/weekly tasks from trusted sources, 1‑on‑1 mentor sessions, and up to 30% completion rebates to keep you inspired.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex flex-col items-start gap-3 sm:flex-row"
            >
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Claim Your Roadmap
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-orange-300/70 bg-white/70 px-5 py-3 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:border-orange-700/50 dark:bg-slate-900/60 dark:text-orange-300 dark:hover:bg-slate-800/60 dark:focus:ring-offset-slate-900"
              >
                <PlayCircle className="mr-2 h-4 w-4" /> See a sample task
              </a>
            </motion.div>

            <div className="mt-6">
              <label htmlFor="goal" className="sr-only">Select goal</label>
              <div className="flex flex-wrap gap-2">
                {goals.map(g => (
                  <button
                    key={g.key}
                    id={g.key}
                    onClick={() => setSelected(g.key)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${selected === g.key ? 'bg-teal-600 text-white ring-transparent' : 'bg-white/70 text-slate-700 ring-slate-200 backdrop-blur hover:bg-white dark:bg-slate-800/70 dark:text-slate-200 dark:ring-slate-700'}`}
                    aria-pressed={selected === g.key}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full" id="demo">
            {/* Floating skill icons as experimental navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pointer-events-none absolute inset-0"
            >
              <motion.span className="absolute left-6 top-8 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow dark:bg-slate-800/70 dark:text-slate-200" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                Python
              </motion.span>
              <motion.span className="absolute right-10 top-16 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow dark:bg-slate-800/70 dark:text-slate-200" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3.2 }}>
                React
              </motion.span>
              <motion.span className="absolute bottom-8 left-10 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow dark:bg-slate-800/70 dark:text-slate-200" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2.8 }}>
                SQL
              </motion.span>
              <motion.span className="absolute bottom-14 right-8 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow dark:bg-slate-800/70 dark:text-slate-200" animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3.4 }}>
                DSA
              </motion.span>
            </motion.div>

            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white shadow-xl ring-1 ring-black/5 dark:from-slate-800 dark:to-slate-900 dark:ring-white/5">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-5">
                <div className="space-y-3">
                  {[1,2,3].map(i => (
                    <FlipTask key={i} index={i} />
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <ProgressWheel value={72} label="Rebate progress" />
                  <SkeuoBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipTask({ index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped(v => !v)}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped(v => !v)}
      aria-pressed={flipped}
      className="group h-24 w-full cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div className={`relative h-full w-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute inset-0 flex items-center justify-between rounded-xl bg-white p-4 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 [backface-visibility:hidden]">
          <div className="flex items-center gap-3">
            <input type="checkbox" aria-label={`Task ${index}`} className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Watch lesson {index}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">10 mins • YouTube</p>
            </div>
          </div>
          <span className="text-xs font-medium text-teal-600">+2%</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-orange-400 p-4 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-center text-sm font-semibold">Progress: {(index*24)%100}%</p>
        </div>
      </div>
    </div>
  );
}

function ProgressWheel({ value = 0, size = 140, stroke = 10, label = 'Progress' }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} role="img" aria-label={`${label}: ${value}%`}>
        <circle cx={size/2} cy={size/2} r={radius} strokeWidth={stroke} className="fill-none stroke-slate-200 dark:stroke-slate-700" />
        <motion.circle
          cx={size/2}
          cy={size/2}
          r={radius}
          strokeWidth={stroke}
          className="fill-none stroke-teal-500"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </svg>
      <div className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{value}% complete</div>
    </div>
  );
}

function SkeuoBadge() {
  return (
    <div className="relative h-20 w-48 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 p-[2px] shadow-[inset_0_1px_0_#fff,inset_0_-4px_12px_rgba(0,0,0,0.08)] ring-1 ring-slate-200 dark:from-slate-700 dark:to-slate-800 dark:ring-slate-700">
      <div className="flex h-full w-full items-center justify-between rounded-2xl bg-gradient-to-br from-white to-slate-50 px-4 shadow-inner dark:from-slate-800 dark:to-slate-900">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Unlock Rebate</p>
          <p className="-mt-0.5 text-lg font-extrabold text-slate-900 dark:text-white">Up to 30%</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 p-[2px] shadow-inner ring-1 ring-orange-400/50">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow">
            🔓
          </div>
        </div>
      </div>
    </div>
  );
}
