import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('sending!')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.dismiss(loadingToast)
          toast.success('mail sent successfully!')
          formRef.current.reset();
        },
        () => {
          toast.dismiss(loadingToast)
          toast.error('failed!')
        }
      );
  };

  return (
    <section className="bg-black py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-600 bg-clip-text text-transparent mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-neutral-400 text-center mb-12">
          Have a question or want to work together? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-neutral-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-neutral-950 border border-neutral-600 text-neutral-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-neutral-400"
              />
            </div>
            <div className="w-full">
              <label className="block text-neutral-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-neutral-950 border border-neutral-600 text-neutral-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-grneutralay-700 mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              name="message"
              required
              placeholder="Tell us about your project or inquiry..."
              className="w-full bg-neutral-950 border border-neutral-600 text-neutral-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-neutral-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-neutral-100 font-semibold py-3 cursor-pointer rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-center mt-4 text-neutral-600">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
