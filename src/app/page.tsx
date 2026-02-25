const services = [
  {
    title: "Collision Repair",
    description:
      "Expert repair for all types of collision damage, from minor fender benders to major structural work.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Auto Painting",
    description:
      "Factory-quality paint matching and application using state-of-the-art equipment and premium materials.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Dent Removal",
    description:
      "Paintless dent repair and traditional dent removal to restore your vehicle's flawless finish.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Frame Straightening",
    description:
      "Precision frame and unibody straightening using computerized measuring systems for exact alignment.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Glass Replacement",
    description:
      "Windshield and auto glass repair or replacement with OEM-quality materials and proper sealing.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Insurance Claims",
    description:
      "We work directly with all major insurance companies to streamline your claim and get you back on the road.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const galleryImages = [
  { alt: "Before and after collision repair", bg: "bg-stone-200" },
  { alt: "Custom paint job detail", bg: "bg-stone-300" },
  { alt: "Restored classic car", bg: "bg-stone-200" },
  { alt: "Frame straightening process", bg: "bg-stone-300" },
  { alt: "Paint booth finishing", bg: "bg-stone-200" },
  { alt: "Completed vehicle restoration", bg: "bg-stone-300" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center bg-gradient-to-br from-rosewood-dark via-rosewood to-rosewood-light pt-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-warm-gold uppercase">
              Expert Auto Body Repair
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Restoring Your Vehicle to Perfection
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              At Rosewood Body Shop, we combine decades of experience with
              cutting-edge technology to deliver flawless auto body repair. From
              minor dents to major collision damage, we treat every vehicle like
              our own.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-warm-gold px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-700"
              >
                Get a Free Estimate
              </a>
              <a
                href="#services"
                className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-rosewood uppercase">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-gray">
              From collision repair to custom painting, we offer a full range of
              auto body services to keep your vehicle looking its best.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-stone-200 p-8 transition-all hover:border-rosewood/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rosewood/10 text-rosewood transition-colors group-hover:bg-rosewood group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-warm-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-rosewood uppercase">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted Craftsmanship Since 1998
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                For over 25 years, Rosewood Body Shop has been the go-to
                destination for quality auto body repair in the community. Our
                team of certified technicians brings passion and precision to
                every job.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "I-CAR Gold Class certified technicians",
                  "Lifetime warranty on all repairs",
                  "State-of-the-art equipment and paint booth",
                  "Direct insurance billing for all major providers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-rosewood"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-stone-200 p-16">
              <div className="text-center">
                <p className="text-6xl font-bold text-rosewood">25+</p>
                <p className="mt-2 text-lg font-medium text-warm-gray">
                  Years of Excellence
                </p>
                <div className="mx-auto mt-6 h-px w-16 bg-rosewood/30" />
                <p className="mt-6 text-4xl font-bold text-rosewood">10,000+</p>
                <p className="mt-2 text-lg font-medium text-warm-gray">
                  Vehicles Restored
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-rosewood uppercase">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-gray">
              See the quality of our work for yourself. Every project receives
              our full attention to detail.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.bg} flex aspect-[4/3] items-center justify-center rounded-xl`}
              >
                <p className="px-4 text-center text-sm font-medium text-stone-500">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-warm-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-rosewood uppercase">
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Request a Free Estimate
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                Ready to get your vehicle repaired? Contact us for a free
                estimate. We&apos;ll get you back on the road in no time.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-rosewood" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-warm-gray">123 Main Street, Anytown, USA 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-rosewood" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+15551234567" className="text-warm-gray transition-colors hover:text-rosewood">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-rosewood" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-warm-gray">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-warm-gray">Sat: 9:00 AM - 2:00 PM</p>
                    <p className="text-warm-gray">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-rosewood focus:ring-1 focus:ring-rosewood"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-rosewood focus:ring-1 focus:ring-rosewood"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-rosewood focus:ring-1 focus:ring-rosewood"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-rosewood focus:ring-1 focus:ring-rosewood"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Describe the damage or service needed
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-rosewood focus:ring-1 focus:ring-rosewood"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-rosewood px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rosewood-dark"
                >
                  Request Estimate
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
