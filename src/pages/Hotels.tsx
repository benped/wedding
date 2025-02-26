const Hotels = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-8 max-w-[1420px]">
      <h1 className="text-4xl text-sage-green font-serif mb-4 pl-6">HOTELS</h1>
      <p className="text-base mb-12 text-sage-green pl-6">WE DIDN'T BLOCK OUT ANY HOTELS FOR OUR WEDDING, BUT HERE ARE SEVERAL HOTEL OPTIONS.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:pr-9">
        {/* Close to Venue Section */}
        <div className="mb-8 md:pr-9">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sage-green mb-4 whitespace-normal text-left pl-4">
            CLOSE TO VENUE
          </h3>
            <div className="py-2">
              <hr className="border-sage-green/30" />
            </div>
          <div className="pl-4">
            <div className="flex flex-col sm:flex-row items-start gap-4 min-h-[200px] sm:h-40 mb-2">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Graduate by Hilton</h2>
                <p className="mb-1 text-sage-green">615 Washington Ave SE</p>
                <p className="mb-2 text-sage-green">Minneapolis, MN 55414</p>
                <div className="flex gap-8">
                  <a
                    href="https://www.hilton.com/en/hotels/mspgmgu-graduate-minneapolis/?SEO_id=GMB-AMER-GU-MSPGMGU&y_source=1_MTA1MzY0NDczOC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    WEBSITE
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Graduate+by+Hilton+Minneapolis/@44.9743662,-93.2296097,17z/data=!3m1!4b1!4m9!3m8!1s0x52b32d181427ff0f:0x22030b386e4d1cb4!5m2!4m1!1i2!8m2!3d44.9743662!4d-93.2296097!16s%2Fg%2F1hdzyfqv7?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    DIRECTIONS
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/graduate.jpeg"
                  alt="Graduate by Hilton"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 min-h-[200px] sm:h-40 mb-2">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Hilton Garden Inn Minneapolis University</h2>
                <p className="mb-1 text-sage-green">511 SE Huron Blvd</p>
                <p className="mb-2 text-sage-green">Minneapolis, MN 55414</p>
                <div className="flex gap-8">
                  <a
                    href="https://www.hilton.com/en/hotels/msputgi-hilton-garden-inn-minneapolis-university-area/?SEO_id=GMB-AMER-GI-MSPUTGI&y_source=1_NTg4NTgyMi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    WEBSITE
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Hilton+Garden+Inn+Minneapolis+University+Area/@44.9730876,-93.2265612,17.13z/data=!4m9!3m8!1s0x52b32d21073bf825:0x133ddd2752942320!5m2!4m1!1i2!8m2!3d44.970985!4d-93.2223247!16s%2Fg%2F11g68x4n0z?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    DIRECTIONS
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/gardeninn.jpeg"
                  alt="Hilton Garden Inn Minneapolis University"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 min-h-[200px] sm:h-40">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Hampton Inn & Suites Minneapolis University Area</h2>
                <p className="mb-1 text-sage-green">2812 University Ave SE</p>
                <p className="mb-2 text-sage-green">Minneapolis, MN 55414</p>
                <div className="flex gap-8">
                  <a
                    href="https://www.hilton.com/en/hotels/mspuahx-hampton-suites-minneapolis-university-area/?SEO_id=GMB-AMER-HX-MSPUAHX&y_source=1_MzgxMDkwMS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    WEBSITE
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Hampton+Inn+%26+Suites+Minneapolis+University+Area/@44.9719949,-93.2217109,17.13z/data=!4m9!3m8!1s0x52b32cde585fb85f:0x155f2378812c4c66!5m2!4m1!1i2!8m2!3d44.9712158!4d-93.2168323!16s%2Fg%2F11cp7jy44b?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    DIRECTIONS
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/hampton.jpeg"
                  alt="Hampton Inn & Suites Minneapolis University Area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Close to Airport Section */}
        <div className="mb-8 md:pr-9">
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sage-green mb-4 whitespace-normal text-left pl-4">
            CLOSE TO AIRPORT
          </h3>
          <div className="py-2">
              <hr className="border-sage-green/30" />
            </div>
          <div className="pl-4">
            <div className="flex flex-col sm:flex-row items-start gap-4 min-h-[200px] sm:h-40 mb-2">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Hilton Minneapolis-St. Paul Airport</h2>
                <p className="mb-1 text-sage-green">3800 American Blvd E</p>
                <p className="mb-2 text-sage-green">Bloomington, MN 55425</p>
                <div className="flex gap-8">
                  <a
                    href="https://www.hilton.com/en/hotels/mspahhf-hilton-minneapolis-st-paul-airport/?SEO_id=GMB-AMER-HH-MSPAHHF&y_source=1_MTIyMDg4NC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    WEBSITE
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Hilton+Minneapolis-St.+Paul+Airport/@44.8608966,-93.3008865,12z/data=!4m9!3m8!1s0x87f62f1fe67cd5b9:0x9aba174c805c909a!5m2!4m1!1i2!8m2!3d44.8609262!4d-93.2184859!16s%2Fg%2F1tkp5jrw?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    DIRECTIONS
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/airporthilton.webp"
                  alt="Hilton Minneapolis-St. Paul Airport"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Downtown Options - Moved inside the second column */}
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sage-green mb-4 whitespace-normal text-left pl-4">
            DOWNTOWN OPTIONS
          </h3>
          <div className="py-2">
              <hr className="border-sage-green/30" />
            </div>
          <div className="pl-4">
            <div className="flex flex-col sm:flex-row items-start gap-4 min-h-[200px] sm:h-40 mb-2">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Hewing Hotel</h2>
                <p className="mb-1 text-sage-green">300 N Washington Ave</p>
                <p className="mb-2 text-sage-green">Minneapolis, MN</p>
                <div className="flex gap-8">
                  <a
                    href="https://hewinghotel.com/"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    WEBSITE
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Hewing+Hotel/@44.9849577,-93.2747567,17z/data=!3m1!5s0x52b3328f5c609015:0xeb15eb900e64bf44!4m10!3m9!1s0x52b3328f5c948e67:0xa004337ad394d05f!5m3!1s2025-05-03!4m1!1i2!8m2!3d44.9849172!4d-93.2725463!16s%2Fg%2F11cm03br0v?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    DIRECTIONS
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/hewing.jpeg"
                  alt="Hewing Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 min-h-[200px] sm:h-40">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Emery Autograph Collection Hotel</h2>
                <p className="mb-1 text-sage-green">215 4th St South</p>
                <p className="mb-2 text-sage-green">Minneapolis, MN</p>
                <div className="flex gap-8">
                  <a
                    href="https://www.marriott.com/en-us/hotels/mspak-emery-autograph-collection/"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    WEBSITE
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Emery,+Autograph+Collection/@44.9784231,-93.2677148,17z/data=!4m10!3m9!1s0x52b3329b890741bb:0xe766f7f6ce0f1ba8!5m3!1s2025-05-03!4m1!1i2!8m2!3d44.978277!4d-93.2665375!16s%2Fg%2F1td_gx3x?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D"
                    className="text-sage-green hover:text-green-800 font-altivo"
                  >
                    DIRECTIONS
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/emery.jpeg"
                  alt="Emery Autograph Collection Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;