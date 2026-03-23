const TestimonialSection = () => {
  return (
    <section id="testimonial" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">
          Client Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Video 1 */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg bg-black">
            <video
              src={import.meta.env.BASE_URL + "videos/testimonial1.mp4"}
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
              src={import.meta.env.BASE_URL + "videos/testimonial2.mp4"}
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