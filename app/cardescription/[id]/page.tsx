import React from "react";
import {
  Share2,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Palette,
  Car,
} from "lucide-react";
import SellCar from "@/model/sellCar.model";
import { connectdb } from "@/lib/db";
import Link from "next/link";
import CarImageGallery from "./CarImageGallery";

type CarDescriptionProps = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

const CarDetailsPage: React.FC<CarDescriptionProps> = async ({ params }) => {
  console.log(params);
  await connectdb();

  try {
    const car = await SellCar.findById(params.id).populate(
      "user",
      "phone city name",
    );

    console.log(car);

    if (!car) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Car not found
            </h1>
            <Link
              href="/available-cars"
              className="text-teal-600 hover:underline"
            >
              Back to Available Cars
            </Link>
          </div>
        </div>
      );
    }

    const carData = {
      title: `${car.vehicleModel} (${car.makeYear})`,
      type: car.vehicleType || "N/A",
      color: car.vehicleColor || "N/A",
      km: car.kmDriven || 0,
      fuel: car.fuelType || "N/A",
      transmission: car.transmission || "N/A",
      city: car.user?.city || "N/A",
      price: car.expectedValuation || "Price on request",
      year: car.makeYear || 0,
      engine: car.engineType || "N/A",
      condition: car.condition || "Good",
      sellerName: car.user?.name || "Seller",
      sellerPhone: car.user?.phone || "Contact for phone",

      description:
        car.additionalInfo || car.description || "No additional info provided.",

      accidentHistory: {
        hasAccidents: car.accidents || "unknown",
        details: car.accidentInfo || "No accident information available.",
      },

      features:
        Array.isArray(car.additionalFeatures) &&
        car.additionalFeatures.length > 0
          ? car.additionalFeatures.map(
              (f: { id: number; text: string }) => f.text,
            )
          : [
              "Air Conditioning",
              "Power Steering",
              "Electric Windows",
              "Central Locking",
              "Music System",
            ],

      images: Array.isArray(car.images)
        ? car.images.map((img: any) => img.url || "/default-image.png")
        : ["/carTabsImage/Sedan/honda_city.png"],
    };

    return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header with background */}
        <section className="relative overflow-hidden py-8 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: "#008080" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
              style={{ backgroundColor: "#004D40" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 flex space-x-2 text-sm font-medium">
              <Link
                href="/"
                className="transition-colors duration-200 flex items-center hover:opacity-80"
                style={{ color: "#008080" }}
              >
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href="/sell"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: "#008080" }}
              >
                Cars For Sale
              </Link>
              <span className="text-gray-400">/</span>
              <span style={{ color: "#004D40" }}>{carData.title}</span>
            </nav>

            {/* Car Title and Actions */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: "#004D40" }}
                >
                  {carData.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {carData.city}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {carData.year}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                <button className="p-3 rounded-full border-2 bg-white text-gray-600 border-gray-300 hover:border-teal-500 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery - Client Component */}
              <CarImageGallery images={carData.images} title={carData.title} />

              {/* Car Specifications */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#004D40" }}
                >
                  Car Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#E0F2F1" }}
                    >
                      <Car className="w-5 h-5" style={{ color: "#008080" }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <p className="font-semibold">{carData.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#E0F2F1" }}
                    >
                      <Palette
                        className="w-5 h-5"
                        style={{ color: "#008080" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Color</p>
                      <p className="font-semibold">{carData.color}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#E0F2F1" }}
                    >
                      <Gauge className="w-5 h-5" style={{ color: "#008080" }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mileage</p>
                      <p className="font-semibold">
                        {carData.km.toLocaleString()} km
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#E0F2F1" }}
                    >
                      <Fuel className="w-5 h-5" style={{ color: "#008080" }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fuel Type</p>
                      <p className="font-semibold">{carData.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#E0F2F1" }}
                    >
                      <Settings
                        className="w-5 h-5"
                        style={{ color: "#008080" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Transmission</p>
                      <p className="font-semibold">{carData.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#E0F2F1" }}
                    >
                      <Calendar
                        className="w-5 h-5"
                        style={{ color: "#008080" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Engine</p>
                      <p className="font-semibold">{carData.engine}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#004D40" }}
                >
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {carData.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#004D40" }}
                >
                  Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {carData.features.map((feature, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#00F3FF" }}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Price and Contact */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                <div className="text-center mb-6">
                  <p
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#008080" }}
                  >
                    Rs.{carData.price}
                  </p>
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "#E0F2F1", color: "#004D40" }}
                  >
                    {carData.condition} Condition
                  </div>
                </div>

                {/* Seller Info */}
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "#004D40" }}
                  >
                    Seller Information
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium">{carData.sellerName}</p>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {carData.city}
                    </p>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <a
                    href={`tel:${carData.sellerPhone}`}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-full font-semibold transition-all text-white"
                    style={{ backgroundColor: "#008080" }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Seller</span>
                  </a>
                  <a
                    href={`https://wa.me/${carData.sellerPhone.replace(
                      /[^0-9]/g,
                      "",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-full font-semibold transition-all border-2"
                    style={{ borderColor: "#008080", color: "#008080" }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• All documents verified</p>
                    <p>• Test drive available</p>
                    <p>• Negotiable price</p>
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <Link
                href="/sell"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition text-center"
              >
                Back to All Cars
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching car details:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error loading car details
          </h1>
          <Link
            href="/available-cars"
            className="text-teal-600 hover:underline"
          >
            Back to Available Cars
          </Link>
        </div>
      </div>
    );
  }
};

export default CarDetailsPage;
