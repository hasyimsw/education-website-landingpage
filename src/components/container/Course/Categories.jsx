import { motion } from "framer-motion";

const Categories = (proops) => {
  const { icon, category } = proops

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05 }}
      className="flex items-center flex-col gap-4 bg-white p-8 rounded-md shadow-md"
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <button className="text-[10px] text-gray px-6 py-2 border-2 rounded-full border-Teal">
        View More
      </button>
    </motion.div>
  );
};

export default Categories;