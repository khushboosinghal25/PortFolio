
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
<h1 className="text-3xl font-bold mb-4" style={{ borderBottom: "2px solid white" }}>Contact me</h1>
        <span >Please fill out the form below to contact me</span>
        <div className="flex justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl flex flex-col items-center"
          >
            <input type="hidden" name="access_key" value="0156991f-8964-48bd-90b2-23452cf76151" />
            <h1 className="text-2xl font-semibold mb-4 text-black">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-900">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email" // Change type to "email"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-blue-800 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
