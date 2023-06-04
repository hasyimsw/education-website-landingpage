import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsTiktok
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-Teal pt-10 px-2 sm:px-4 md:px-10 pb-4">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white pb-2">
        <div>
          <div className="font-bold mb-4">Get Started</div>
          <p className="text-sm leading-6">
            Ready to embark on your learning journey? Take the first step and get started today. Explore our courses, join our community, and unlock a world of knowledge and opportunities. Start your learning adventure with us now!
          </p>
        </div>
        <div>
          <div className="font-bold mb-4">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Web Design
            </a>
            <a href="" className="text-sm hover:underline">
              Web Development
            </a>
            <a href="" className="text-sm hover:underline">
              Science
            </a>
            <a href="" className="text-sm hover:underline">
              Digital Marketing
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-4">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-4">Follow us</div>
          <div className="text-sm mb-2">skillexlearning@gmail.com</div>
          <div className="text-sm">+62 8953-6490-7741</div>
          <div className="flex gap-4 mt-2">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/___letterr" target="_blank" rel="noreferrer" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsYoutube />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-solid border-slate-400">
        <p className="text-sm text-white/80">Copyright © 2023 - Built with ❤️ by <a href="https://github.com/hasyimsw/" target="_blank" rel="noreferrer" className="hover:underline">hasyimsw</a></p>
      </div>
    </footer>
  );
};

export default Footer;