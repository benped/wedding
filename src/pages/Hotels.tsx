const Hotels = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-8 max-w-[1420px]">
      <h1 className="text-4xl text-sage-green font-serif mb-4">HOTELS</h1>
      <p className="text-base mb-12 text-sage-green">WE DIDN'T BLOCK OUT ANY HOTELS FOR OUR WEDDING, BUT HERE ARE SEVERAL HOTEL OPTIONS.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Close to Venue Section */}
        <details className="mb-8 open:mb-12 md:pr-9">
          <summary className="text-3xl text-sage-green font-serif mb-6 cursor-pointer hover:text-green-800">
            Close to Venue
          </summary>
          <div className="pl-4">
            <div className="flex items-start gap-4 h-44">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Graduate by Hilton</h2>
                <p className="mb-1 text-sage-green">615 Washington Ave SE</p>
                <p className="mb-4 text-sage-green">Minneapolis, MN 55414</p>
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
              <div className="w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/graduate.jpeg"
                  alt="Graduate by Hilton"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="py-5">
              <hr className="border-sage-green/30" />
            </div>
            <div className="flex items-start gap-4 h-44 mb-8">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Hilton Garden Inn Minneapolis University</h2>
                <p className="mb-1 text-sage-green">511 SE Huron Blvd</p>
                <p className="mb-4 text-sage-green">Minneapolis, MN 55414</p>
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
              <div className="w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/gardeninn.jpeg"
                  alt="Hilton Garden Inn Minneapolis University"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="py-5">
              <hr className="border-sage-green/30" />
            </div>
            <div className="flex items-start gap-4 h-44">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Hampton Inn & Suites Minneapolis University Area</h2>
                <p className="mb-1 text-sage-green">2812 University Ave SE</p>
                <p className="mb-4 text-sage-green">Minneapolis, MN 55414</p>
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
              <div className="w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/hampton.jpeg"
                  alt="Hampton Inn & Suites Minneapolis University Area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </details>

        {/* Close to Airport Section */}
        <details className="mb-8 md:pr-9">
          <summary className="text-3xl text-sage-green font-serif mb-6 cursor-pointer hover:text-green-800">
            Close to Airport
          </summary>
          <div className="pl-4">
            {/* Add airport hotels here with the same structure */}
            <div className="flex items-start gap-4 h-44">
              <div className="flex-1">
                <h2 className="text-3xl text-sage-green font-serif mb-2">Hilton Minneapolis-St. Paul Airport</h2>
                <p className="mb-1 text-sage-green">3800 American Blvd E</p>
                <p className="mb-4 text-sage-green">Bloomington, MN 55425</p>
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
              <div className="w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="assets/images/airporthilton.webp"
                  alt="Hilton Minneapolis-St. Paul Airport"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Hotels;