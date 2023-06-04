import teacher1 from "../../assets/teacher1.png"
import teacher2 from "../../assets/teacher2.png"
import { accordions } from "../../Data"
import Accordion from "./Accordion"

const Teacher = () => {
  return (
    <section className="section pt-20" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center">
        <div className="pl-5">
          <h1 className="font-bold sm:text-3xl text-2xl mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </h1>
          <h3 className="font-semibold text-lg text-Teal mb-2">Share Your Expertise, Inspire Others</h3>
          <p className="text-sm leading-6 text-gray mb-5">
            Are you a passionate expert in your field? Join our platform as an instructor and inspire learners worldwide. Share your knowledge, create engaging courses, and make a meaningful impact in shaping the next generation of learners.
          </p>
          <button className="py-2 px-5 border-2 border-Teal bg-Teal text-white rounded-md text-sm font-medium shadow-md">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="Teacher" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-3xl text-2xl mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <h3 className="font-semibold text-lg text-Teal mb-2">Unlock Your Teaching Potential</h3>
          <p className="text-sm leading-6 text-gray mb-5">
            Become a valued member of our platform and unlock your teaching potential. As an instructor, you have the opportunity to reach a global audience, create transformative learning experiences, and earn income from your expertise. Join our community of dedicated educators today!
          </p>
          <button className="py-2 px-5 border-2 border-Teal bg-Teal text-white rounded-md text-sm font-medium shadow-md">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-3xl text-2xl pt-12">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </section>
  )
}

export default Teacher