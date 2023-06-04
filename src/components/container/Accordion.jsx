import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Accordion = (proops) => {
  const { id, title, content } = proops

  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="pb-4">
      <div className={`${id === activeIndex ? "bg-Teal text-white rounded-[4px]" : "transition-all duration-300"}`}>
        <div className={`${id === activeIndex ? "border-b border-slate-400" : ""} flex items-center justify-between cursor-pointer py-2 px-4`} onClick={() => handleClick(id)}>
          <h3 className="text-base font-medium">
            {title}
          </h3>
          <BsChevronDown
            className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`}
          />
        </div>
        <AnimatePresence>
          {id === activeIndex && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <p className="text-sm leading-6 p-4">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;