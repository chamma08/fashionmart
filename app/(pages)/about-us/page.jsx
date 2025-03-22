import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 text-gray-800">
      
      {/* Header Section */}
      <section className="relative w-full h-[450px] bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">About Our Brand</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat amet, et fames malesuada.</p>
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/brand-main.jpg"
            alt="Brand Image"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-8 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor pretium, sed congue urna, et. Etiam etiam facilisi mauris et velit. 
            Varius tellus, sed tincidunt leo venenatis vel hac. Aliquam ornare mattis viverra. Nec morbi lectus magna.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-12 max-w-6xl mx-auto">
        
        {/* Carefully Considered Details */}
        <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold">Carefully Considered Details & Perfections</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum viverra neque, sit amet convallis felis.
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg">Learn More</button>
          </div>
          <div className="ml-6 w-72 h-48 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/detail-perfection.jpg"
              alt="Details & Perfections"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Crafted Perfection */}
        <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="ml-6 w-72 h-48 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/crafted-perfection.jpg"
              alt="Crafted Perfection"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-4 text-right pl-6">
            <h3 className="text-xl font-bold">Crafted in Combination of Beauty & Perfection</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum viverra neque, sit amet convallis felis.
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg">Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
