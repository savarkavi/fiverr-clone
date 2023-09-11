import { BsTiktok, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-[200px] mb-[50px] py-12 border-t border-black">
      <div className="flex justify-between max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Categories</h3>
          <a href="#">Graphics & Design</a>
          <a href="#">Digital Marketing</a>
          <a href="#">Writing & Translation</a>
          <a href="#">Video & Animation</a>
          <a href="#">Music & Audio</a>
          <a href="#">Fiverr Logo Maker</a>
          <a href="#">Programming & Tech</a>
          <a href="#">Data</a>
          <a href="#">Business</a>
          <a href="#">Lifestyle</a>
          <a href="#">Photography</a>
          <a href="#">End-to-End Projects</a>
          <a href="#">Sitemap</a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">About</h3>
          <a href="#">Careers</a>
          <a href="#">Press & News</a>
          <a href="#">Partnerships</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Intellectual Property Claims</a>
          <a href="#">Investor Relations</a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Support & Education</h3>
          <a href="#">Help & Support</a>
          <a href="#">Trust & Safety</a>
          <a href="#">Selling on Fiverr</a>
          <a href="#">Buying on Fiverr</a>
          <a href="#">Fiverr Guides</a>
          <a href="#">Fiverr Workspace</a>
          <a href="#">Learn</a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Community</h3>
          <a href="#">Customer Success Stories</a>
          <a href="#">Community Hub</a>
          <a href="#">Forum</a>
          <a href="#">Events</a>
          <a href="#">Blog</a>
          <a href="#">Influencers</a>
          <a href="#">Affiliates</a>
          <a href="#">Podcast</a>
          <a href="#">Become a Seller</a>
          <a href="#">Invite a Friend</a>
          <a href="#">Community Standards</a>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex justify-between mt-[50px] border-t pt-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">fiverr</h1>
          <span>© Fiverr International Ltd. 2023</span>
        </div>
        <div className="flex gap-8 text-xl">
          <BsTiktok className="cursor-pointer" />
          <BsInstagram className="cursor-pointer" />
          <BsFacebook className="cursor-pointer" />
          <BsLinkedin className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
