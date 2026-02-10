export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border rounded-lg"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}