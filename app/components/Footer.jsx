"use client";

import { FaGoogle, FaPhone } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand & Payment */}
          <div className="flex flex-col items-center space-y-6" >
            <img src="/logo.png" alt="SPM Logo" className="w-44 mx-auto" />
            <div className="flex items-center gap-6">
              <img src="/Apple_pay.png" alt="Apple Pay" className="w-12" />
              <img src="/google-pay.png" alt="Google Pay" className="w-12" />
              <img src="mastercard.png" alt="MasterCard" className="w-12" />
              <img src="/visa.png" alt="Visa" className="w-12" />
            </div>
          </div>

          {/* Reach Us - Adjusted Closer */}
          <div className="space-y-3 flex flex-col">
            <h1 className="text-xl font-bold">Reach Us</h1>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                +94 (11)230 5656
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                spmfashion@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MdLocationOn className="text-lg" />
                No.80, Justice Akbar Mawatha, Colombo 02
              </p>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3 flex flex-col">
              <h1 className="text-xl font-bold">Quick Links</h1>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm">About</a></li>
                <li><a href="#" className="text-sm">Contact</a></li>
                <li><a href="#" className="text-sm">Blogs</a></li>
              </ul>
            </div>
            <div className="space-y-3 flex flex-col">
              <h1 className="text-xl font-bold">Legal</h1>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-sm">Terms & Services</a></li>
                <li><a href="#" className="text-sm">Terms of Use</a></li>
                <li><a href="#" className="text-sm">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-14 mt-10">
          <FaFacebook className="text-3xl cursor-pointer hover:scale-110 transition" />
          <FaInstagram className="text-3xl cursor-pointer hover:scale-110 transition" />
          <FaGoogle className="text-3xl cursor-pointer hover:scale-110 transition" />
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-500 mt-8 pt-6 text-center">
          <p className="text-sm">© 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
