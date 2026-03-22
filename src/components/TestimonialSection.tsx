const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">
          Client Experience
        </h2>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Video 1 */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg bg-black">
            <video
              src="public\videos\WhatsApp Video 2026-03-20 at 5.31.35 PM.mp4"
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-auto max-h-[400px] bg-black"
            />
          </div>

          {/* Video 2 */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg bg-black">
            <video
              src="public\videos\WhatsApp Video 2026-03-22 at 1.45.26 PM.mp4"
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-auto max-h-[400px] bg-black"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;