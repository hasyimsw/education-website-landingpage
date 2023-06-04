import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = (proops) => {
  const { image, category, title, participants, rating, price } = proops

  return (
    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-sm">
      <img src={image} alt="Image" />
      <div className="mt-2 text-xs text-Teal">{category}</div>
      <div className="text-sm my-2 font-semibold">{title}</div>
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center">
          <div className="p-1 rounded-full">
            <AiOutlineUser className="text-Teal" />
          </div>
          <div className="text-sm font-semibold">{participants}</div>
        </div>
        <div className="flex items-center">
          <div className="p-1 rounded-full">
            <AiOutlineStar className="text-yellow" />
          </div>
          <div className="text-sm font-semibold">{rating}</div>
        </div>
        <div className="text-sm font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default Course;