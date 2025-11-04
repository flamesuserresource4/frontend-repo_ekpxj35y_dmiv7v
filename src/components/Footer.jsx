export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Start your free trial</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Get a personalized roadmap, the first week of tasks, and a mentor intro—free.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Claim Your Roadmap
            </button>
          </form>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} EduBayte. Learn with momentum, not burnout.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
