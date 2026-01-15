import { useState } from "react";
import { useForm } from "react-hook-form";

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
    <div className=" w-screen m-auto flex flex-col">
      <h1 className="text-4xl">Contact us</h1>
      {submitted && <p className="text-green-500">Your message has been recieved!</p>}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {/* NAME */}
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          id="name"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className=" text-red-500">{errors.name.message}</p>}

        {/* EMAIL */}
        <label htmlFor="email">Email</label>
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
          placeholder="Email"
        />
        {errors.email && (
          <p className=" text-red-500">{errors.email.message}</p>
        )}

        {/* MESSAGE */}
        <label htmlFor="message">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          id="message"
          rows={5}
          placeholder="Type your message..."
        />
        {errors.message && (
          <p className=" text-red-500">{errors.message.message}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
