import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Full-Width Brand Image Section */}
      <section className="relative w-full h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/brand-main.jpg" // Replace with your image path in the public folder
            alt="Brand Showcase"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">About Our Brand</h1>
            <p className="text-lg">
              Welcome to SPM Fashion Mart, your ultimate destination for fashion-forward styles and trends. At SPM, we believe that fashion is not just about clothing—it’s about self-expression, confidence, and individuality. That’s why we bring you a carefully curated selection of the latest styles in clothing, accessories, and footwear to suit every occasion and personality.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-8 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            SPM Fashion Mart is more than just a shopping destination—it’s a community of fashion enthusiasts who believe in expressing their true selves. Whether you’re looking for the latest trends or timeless classics, we’re here to help you find exactly what you need.

            Thank you for choosing SPM Fashion Mart. Together, let’s celebrate fashion and make every day a stylish one!
          </p>
        </div>
      </section>

      {/* Details & Perfection Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-12 max-w-6xl mx-auto">
        {/* Our Mission Grid */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">
          <div className="w-full space-y-4 text-center">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-gray-600">
              At SPM Fashion Mart, our mission is to make fashion accessible and enjoyable for everyone. We strive to inspire creativity and individuality while offering a seamless shopping experience. Our collections are crafted with care, blending timeless designs with contemporary flair to bring you outfits that make a statement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Mission Highlights */}
            
            
          </div>
        </div>

        {/* Crafted Perfection */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">
          <div className="w-full space-y-4 text-center">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="text-gray-600">
              At SPM Fashion Mart, our vision is to redefine how people connect with fashion. We aim to empower individuals to embrace their unique identities through styles that inspire and resonate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Vision Highlights */}
            
            
          </div>
        </div>
      </section>
    </div>
  );
};
