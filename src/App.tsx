function App() {
  return (
    <div className="min-h-screen p-8">
      <header className="max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl font-bold mb-2 text-left">Ella McIntosh</h1>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src="/images/P1160535.JPG" 
                  alt="Ella McIntosh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 prose prose-lg text-left">
              <p>
                Hi, I'm Ella! I'm chief of staff at the{' '}
                <a href="https://effectiveinstitutionsproject.org/" className="text-blue-600 hover:underline">
                  Effective Institutions Project
                </a>
                , where we're thinking about how to equip the most important institutions in the world to tackle the challenges of the 21st century. Before that, I did a masters in social & public policy at the LSE. I'm based in London, and when not thinking about improving institutions can often be found playing tennis, swimming in the ponds at hampstead heath or reading the internet.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-left">Contact</h2>
          <p className="text-gray-600 text-left">
            Get in touch at{' '}
            <a href="mailto:ella.l.mci@gmail.com" style={{ color: '#320a59' }} className="hover:underline">
              ella.l.mci [at] gmail.com
            </a>
            {' '}or on{' '}
            <a href="https://www.linkedin.com/in/ella-mci/" style={{ color: '#320a59' }} className="hover:underline">
              LinkedIn
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
