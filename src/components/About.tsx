export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
        <div className="w-12 h-1 bg-blue-600 mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo placeholder */}
          <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-gray-200" />

          {/* Bio */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              {/* TODO: bio paragraph 1 */}
              A short paragraph about your background, passion, and journey.
            </p>
            <p>
              {/* TODO: bio paragraph 2 */}
              What drives you and what you are currently working on.
            </p>

            {/* Quick facts */}
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="font-medium text-gray-800 w-24">Location</span>
                <span>Your City, Country</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-gray-800 w-24">Education</span>
                <span>Degree · University</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-gray-800 w-24">Available</span>
                <span>Full-time / Freelance</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
