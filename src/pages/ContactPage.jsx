import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = (data) => {
    console.log("Form Submitted: ", data);
    reset();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Contact <span className="text-green-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Have questions about your crypto portfolio? We are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT: Contact Info / Context */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Whether you are curious about features, a free trial, or even
                press inquiries—we’re ready to answer any and all questions.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 123-456-7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">support@crypfi.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Location</h3>
                    <p className="text-gray-600">
                      123 Blockchain Land, Crypto City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The Form */}
          <div className="bg-white shadow-xl rounded-xl border border-gray-100 p-6 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
                <div className="text-green-600 text-5xl">✓</div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="flex flex-col gap-4"
              >
                {/* NAME */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full p-3 rounded-md border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    className={`w-full p-3 rounded-md border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className={`w-full p-3 rounded-md border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 resize-none`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="mt-4 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-md border border-green-600 hover:bg-white hover:text-green-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
