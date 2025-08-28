"use client";
import React from "react";
import { BiMailSend, BiMap, BiPhone, BiBuilding } from "react-icons/bi";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-bg-gray-dark/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 `}
        >
          {/* Content Column */}
          <div>
            <span className="inline-block px-3 py-1 bg-bg-gray-dark/10 text-book-accent text-xs font-medium rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className=" text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-book-accent mb-6" />

            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              For event bookings and more enquiries, please contact us using the information below.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiBuilding size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Organization</h3>
                  <p className="text-foreground/70">bmpUnited</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiMap size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-foreground/70">1501 Timber Wolf Dr. Durham, NC 27713</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiPhone size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:8883370785" className="text-foreground/70">888.337.0785</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bg-gray-dark/10 p-3 rounded-full text-book-accent">
                  <BiMailSend size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:Charlie.Ukwu@bmpu.org"
                    className="text-foreground/70"
                  >
                    Charlie.Ukwu@bmpu.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
