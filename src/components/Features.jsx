import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarClock, CheckSquare, Users, BadgePercent } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 dark:bg-slate-900">
      <div className="absolute inset-x-0 top-0 -z-0 h-32 bg-gradient-to-b from-teal-100/60 to-transparent dark:from-teal-900/20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Everything you need to stay consistent
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Flexible roadmaps, interactive tasks, real mentors, and a motivational rebate when you finish.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Roadmaps" icon={<CalendarClock className="h-5 w-5" />}>
            <Timeline />
          </Card>
          <Card title="Tasks" icon={<CheckSquare className="h-5 w-5" />}>
            <InteractiveChecklist />
          </Card>
          <Card title="Mentors" icon={<Users className="h-5 w-5" />}>
            <MentorCarousel />
          </Card>
          <Card title="Rebates" icon={<BadgePercent className="h-5 w-5" />}>
            <RebateAnimated />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, icon, children }) {
  return (
    <div className="group rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60">
      <div className="mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow">
          {icon}
        </span>
        <h3 className="text-base font-bold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Timeline() {
  const items = [
    { t: 'Week 1', d: 'Foundations & tools' },
    { t: 'Week 2', d: 'Core concepts' },
    { t: 'Week 3', d: 'Project sprint' },
    { t: 'Week 4', d: 'Interview prep' },
  ];
  return (
    <ol className="relative ml-4 border-l-2 border-teal-500/50 pl-4">
      {items.map((it, idx) => (
        <motion.li key={it.t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="mb-3">
          <div className="-ml-[25px] mb-1 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-teal-500 ring-2 ring-white dark:ring-slate-800" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{it.t}</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">{it.d}</p>
        </motion.li>
      ))}
    </ol>
  );
}

function InteractiveChecklist() {
  const [done, setDone] = useState([false, false, false]);
  return (
    <div className="space-y-3">
      {[0,1,2].map(i => (
        <label key={i} className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/40 dark:hover:bg-slate-900/60">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={done[i]}
              onChange={() => setDone(d => d.map((v, idx) => idx === i ? !v : v))}
              className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              aria-label={`Checklist item ${i+1}`}
            />
            <span className="text-slate-700 dark:text-slate-200">Complete task {i+1}</span>
          </div>
          <motion.span
            initial={false}
            animate={{ scale: done[i] ? 1.05 : 1, color: done[i] ? '#16a34a' : '#334155' }}
            className="text-xs font-semibold"
          >
            {done[i] ? '+2% rebate' : '+0%'}
          </motion.span>
        </label>
      ))}
    </div>
  );
}

function MentorCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const mentors = [
    { name: 'Ayaan', role: 'Backend Engineer', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop' },
    { name: 'Mira', role: 'Data Scientist', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop' },
    { name: 'Leo', role: 'Frontend Lead', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop' },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="flex gap-4">
        {mentors.map((m, i) => (
          <motion.div key={m.name} initial={{ x: 40, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ delay: i * 0.1 }} className="min-w-[140px] rounded-xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900/50 dark:ring-slate-700">
            <img src={m.img} alt={m.name} className="h-24 w-full rounded-lg object-cover" />
            <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-100">{m.name}</p>
            <p className="text-xs text-slate-500">{m.role}</p>
            <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400">Book a 15‑min</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RebateAnimated() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setValue(v => v >= 30 ? 0 : v + 1), 60);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-sm text-slate-600 dark:text-slate-300">Earn back a portion of your fee by completing milestones. We track progress and unlock rewards.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          <svg viewBox="0 0 36 36" className="h-16 w-16">
            <path d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" fill="none" stroke="rgba(15,23,42,0.15)" strokeWidth="4" className="dark:stroke-[rgba(148,163,184,0.25)]" />
            <motion.path
              d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="4"
              strokeDasharray="100 100"
              animate={{ strokeDasharray: `${value} 100` }}
              transition={{ duration: 0.2 }}
            />
          </svg>
          <span className="pointer-events-none absolute inset-0 grid place-items-center text-xs font-bold text-orange-500">{value}%</span>
        </div>
        <span className="mt-1 text-[11px] font-medium text-slate-600 dark:text-slate-300">up to 30%</span>
      </div>
    </div>
  );
}
