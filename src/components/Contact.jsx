import React from "react";

const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
          <form className="mt-6 max-w-md mx-auto">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md mb-4" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md mb-4" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-md mb-4"></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  