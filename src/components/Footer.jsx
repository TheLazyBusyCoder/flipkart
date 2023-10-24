function Footer() {
  return (
    <div className="bg-slate-800 h-80 w-full grid grid-cols-[1fr_45%] grid-rows-[1fr_20%] gap-2 px-14 pt-11">
      <div
        className=" h-full w-full
      grid grid-cols-4 gap-1
      "
      >
        <div className=" text-white flex flex-col gap-2">
          <h1 className="text-sm text-gray-400">ABOUT</h1>
          <ul className="text-xs font-semibold">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Flipkart Wholesale</li>
            <li>Cleartrip</li>
            <li>Coorporate Information</li>
          </ul>
        </div>
        <div className=" text-white flex flex-col gap-2">
          <h1 className="text-sm text-gray-400">HELP</h1>
          <ul className="text-xs font-semibold">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQs</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        <div className=" text-white flex flex-col gap-2">
          <h1 className="text-sm text-gray-400">CONSUMER POLICY</h1>
          <ul className="text-xs font-semibold">
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        <div className=" text-white flex flex-col gap-2">
          <h1 className="text-sm text-gray-400">SOCIAL</h1>
          <ul className="text-xs font-semibold">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div
        className=" h-full w-full
      grid grid-cols-2 gap-1 
       
      "
      >
        <div className=" text-white flex flex-col gap-2">
          <h1 className="text-sm text-gray-400">Mail Us:</h1>
          <div className="text-xs">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia &amp; </p>
            <p> Clove Embassy Tech Village, </p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
          </div>
        </div>

        <div className=" text-white flex flex-col gap-2">
          <h1 className="text-sm text-gray-400">Registered Office Address :</h1>
          <div className="text-xs">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia &amp; </p>
            <p> Clove Embassy Tech Village, </p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
          </div>
        </div>
      </div>
      <div className="border col-span-full h-full w-full">footer</div>
    </div>
  );
}

export default Footer;
