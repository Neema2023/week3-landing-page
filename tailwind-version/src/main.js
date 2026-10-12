import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <header class="border-b border-slate-200 bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" class="text-2xl font-extrabold tracking-tight text-blue-700">
          DevPulse<span class="text-slate-800">.</span>
        </a>

        <div class="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#home" class="text-blue-700">Home</a>
          <a href="#articles" class="transition hover:text-blue-700">Articles</a>
          <a href="#about" class="transition hover:text-blue-700">About</a>
        </div>

        <a href="#articles" class="rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800">
          Explore Articles
        </a>
      </nav>
    </header>

    <main>
      <section id="home" class="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white">
        <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <span class="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200">
              Technology • Learning • Innovation
            </span>

            <h1 class="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn, Build and Grow with Technology
            </h1>

            <p class="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Discover practical articles about web development, programming,
              design and the tools that help you become a better developer.
            </p>

            <div class="mt-9 flex flex-wrap gap-4">
              <a href="#articles" class="rounded-lg bg-blue-500 px-6 py-3.5 font-bold text-white shadow-lg transition hover:bg-blue-400">
                Explore Articles →
              </a>
              <a href="#about" class="rounded-lg border border-white/30 px-6 py-3.5 font-bold transition hover:bg-white/10">
                About DevPulse
              </a>
            </div>

            <div class="mt-12 flex gap-8 border-t border-white/15 pt-6">
              <div>
                <p class="text-2xl font-extrabold">6+</p>
                <p class="mt-1 text-sm text-slate-300">Learning topics</p>
              </div>
              <div>
                <p class="text-2xl font-extrabold">Practical</p>
                <p class="mt-1 text-sm text-slate-300">Developer guides</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-4 rounded-3xl bg-blue-400/20 blur-2xl"></div>
            <div class="relative rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div class="flex items-center gap-2 border-b border-white/15 pb-4">
                <span class="h-3 w-3 rounded-full bg-red-400"></span>
                <span class="h-3 w-3 rounded-full bg-amber-400"></span>
                <span class="h-3 w-3 rounded-full bg-green-400"></span>
                <span class="ml-3 text-sm text-slate-300">developer.js</span>
              </div>
              <pre class="overflow-x-auto py-7 text-sm leading-8 text-blue-100"><code><span class="text-pink-300">const</span> developer = {
  learn: <span class="text-amber-200">"every day"</span>,
  build: <span class="text-amber-200">"real projects"</span>,
  grow: <span class="text-amber-200">"with practice"</span>
};

<span class="text-pink-300">function</span> <span class="text-green-300">createFuture</span>() {
  return developer;
}</code></pre>
              <div class="rounded-xl bg-slate-950/50 p-4">
                <p class="text-sm font-semibold text-green-300">✓ Keep learning. Keep building.</p>
                <p class="mt-1 text-xs text-slate-300">Your next idea starts here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" class="mx-auto max-w-7xl px-6 py-20">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="font-bold uppercase tracking-widest text-blue-700">The DevPulse library</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Explore Our Latest Articles</h2>
            <p class="mt-4 max-w-2xl leading-7 text-slate-600">
              Clear explanations and useful ideas to support your technology journey.
            </p>
          </div>
          <span class="text-sm font-semibold text-slate-500">Featured learning guides</span>
        </div>

        <div class="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex h-44 items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-6xl">💻</div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-blue-700">Web Development</span>
              <h3 class="mt-3 text-xl font-bold group-hover:text-blue-700">Understanding Modern Web Development</h3>
              <p class="mt-3 leading-7 text-slate-600">Explore the foundations of websites and how the modern web works.</p>
              <a href="#about" class="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">Read article →</a>
            </div>
          </article>

          <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex h-44 items-center justify-center bg-gradient-to-br from-amber-400 to-orange-600 text-6xl">{"{}"}</div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-orange-700">Programming</span>
              <h3 class="mt-3 text-xl font-bold group-hover:text-blue-700">Getting Started with JavaScript</h3>
              <p class="mt-3 leading-7 text-slate-600">Learn how JavaScript brings interaction and behavior to websites.</p>
              <a href="#about" class="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">Read article →</a>
            </div>
          </article>

          <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex h-44 items-center justify-center bg-gradient-to-br from-slate-700 to-slate-950 text-6xl">🌿</div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-green-700">Developer Tools</span>
              <h3 class="mt-3 text-xl font-bold group-hover:text-blue-700">Why Git and GitHub Matter</h3>
              <p class="mt-3 leading-7 text-slate-600">Understand version control and how developers collaborate on projects.</p>
              <a href="#about" class="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">Read article →</a>
            </div>
          </article>

          <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex h-44 items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-700 text-6xl">📱</div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-700">Responsive Design</span>
              <h3 class="mt-3 text-xl font-bold group-hover:text-blue-700">Building Responsive Websites</h3>
              <p class="mt-3 leading-7 text-slate-600">Create layouts that adapt beautifully to phones, tablets and desktops.</p>
              <a href="#about" class="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">Read article →</a>
            </div>
          </article>

          <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex h-44 items-center justify-center bg-gradient-to-br from-violet-600 to-purple-900 text-6xl">⚙️</div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-violet-700">Backend</span>
              <h3 class="mt-3 text-xl font-bold group-hover:text-blue-700">Introduction to Backend Development</h3>
              <p class="mt-3 leading-7 text-slate-600">Discover the server-side logic that powers modern applications.</p>
              <a href="#about" class="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">Read article →</a>
            </div>
          </article>

          <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex h-44 items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-800 text-6xl">🗄️</div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-700">Databases</span>
              <h3 class="mt-3 text-xl font-bold group-hover:text-blue-700">Understanding Database Basics</h3>
              <p class="mt-3 leading-7 text-slate-600">Learn how applications store, organize and retrieve information.</p>
              <a href="#about" class="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">Read article →</a>
            </div>
          </article>
        </div>
      </section>

      <section id="about" class="bg-blue-50 px-6 py-16">
        <div class="mx-auto max-w-4xl text-center">
          <p class="font-bold uppercase tracking-widest text-blue-700">About us</p>
          <h2 class="mt-3 text-3xl font-extrabold">Technology knowledge, made approachable.</h2>
          <p class="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            DevPulse is a learning space for curious minds who want to understand
            technology, improve their skills and build useful digital experiences.
          </p>
        </div>
      </section>
    </main>

    <footer class="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
      <p class="text-xl font-extrabold text-white">DevPulse<span class="text-blue-400">.</span></p>
      <p class="mt-3">Learn. Build. Grow.</p>
      <p class="mt-4">© 2026 DevPulse. All rights reserved.</p>
    </footer>
  </div>
`;