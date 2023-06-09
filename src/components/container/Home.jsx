import hero from "../../assets/hero.png"
import { logos } from "../../Data"
import { motion } from "framer-motion"

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="section pt-24 min-h-screen" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <h3 className="font-semibold text-xs text-Teal mb-4">
            your e-learning partner
          </h3>
          <h1 className="sm:text-5xl text-3xl font-bold uppercase mb-2">
            This is <br /> the new way <br /> to learn online
          </h1>
          <p className="text-sm leading-6 text-gray max-w-sm">
          Discover the innovative way to learn online. Engaging courses, expert instructors, global community. Join us now!
          </p>
          <div className="mt-6">
            <button className="py-2 px-5 bg-Teal border-2 border-Teal text-white rounded-md text-sm font-medium shadow-md mr-5">
              Get Started
            </button>
            <button className="py-2 px-6 border-2 border-solid border-gray rounded-md text-sm font-medium shadow-md">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="Hero" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="Logo" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Home