import about from "../../assets/About.jpg"

const About = () => {
  return (
    <section className="section pt-20" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-md">
          <img src={about} alt="Image" className="p-4" />
        </div>
        <div>
          <h1 className="font-bold sm:text-3xl text-2xl mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </h1>
          <p className="text-sm text-gray leading-6 mb-4">
            We provide the best online courses.
            At Skillex, our mission is to deliver exceptional online learning experiences. We are committed to offering a curated selection of high-quality courses across various disciplines. Our courses are carefully crafted by industry experts and designed to provide practical skills and knowledge that are relevant in today&apos;s fast-paced world. With a focus on interactive learning, engaging content, and continuous improvement, we strive to provide the best educational opportunities for learners worldwide.
          </p>
          <button className="py-2 px-5 border-2 border-solid border-gray rounded-md text-sm font-medium shadow-md">
            Know More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About