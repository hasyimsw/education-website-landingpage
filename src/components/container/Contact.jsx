import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="section py-20" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </h1>
        <p className="text-sm leading-7 text-gray">
          Stay up-to-date with the latest news, updates, and exclusive offers by subscribing to our newsletter. Be the first to know about new courses, industry insights, and upcoming events. Join our community of learners and professionals today!
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5 space-y-3"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="py-2 px-4 outline-none text-sm shadow-md sm:w-80 w-60"
          />
          <button className="text-sm text-white bg-Teal py-2 px-5 shadow-md">
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact