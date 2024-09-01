/* import Lottie from "lottie-react";
import contact from "../../assets/Img/contact.json"; */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForm } from "../../validtion";
import emailjs from "@emailjs/browser";
import An from "../An";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForm),
  });
  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .send(
        "service_u2b9tak",
        "template_pfr5tbi",
        {
          from_email: data.email,
          from_name: data.name,
          message: data.text,
        },
        {
          publicKey: "aO0WuVDFl4Qk7DSmq",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="bg-head ">
      <An />
      <div className="container  h-screen flex  items-center  ">
        <div className="  text-white w-full    font-nav ">
          <h2 className="flex items-center gap-2 md:text-3xl text-xl ">
            <div className="h-[2px] w-20 bg-white   "></div>
            <span className="text-customBlue ">04.</span>Contact US
          </h2>
          <div className="bg-[#001925] p-6 max-w-[700px]  mx-auto border-l-4 my-10 border-[#83dbff] clip-path-custom">
            <h2 className="text-2xl text-white font-nav">Get in touch</h2>
            <form className="my-4 " onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-col flex gap-8">
                <input
                  type="text"
                  className="bg-[#002733]  p-4 text-lg focus:border-l-4 duration-100 outline-none  border-[#83dbff]"
                  placeholder="Name"
                  {...register("name", { required: true, minLength: 6 })}
                />
                {errors["name"] && (
                  <span className="bg-red-700 p-2">
                    {errors["name"].message}
                  </span>
                )}
                <input
                  type="email"
                  className="bg-[#002733] p-4  text-lg  focus:border-l-4 duration-100 outline-none  border-[#83dbff]"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
                />
                {errors["email"] && (
                  <span className="bg-red-700 p-2">
                    {errors["email"].message}
                  </span>
                )}
                <textarea
                  {...register("text", { required: true, minLength: 3 })}
                  className="bg-[#013747] p-4 text-lg   focus:border-l-4 duration-100 outline-none  border-[#83dbff]"
                  placeholder="Say Hello "
                ></textarea>
                {errors["text"] && (
                  <span className="bg-red-700 p-2">
                    {errors["text"].message}
                  </span>
                )}
                <div className="flex gap-4">
                  <button className=" basis-[70%] text-lg text-[#001925] font-nav font-semibold p-2 bg-[#83dbff]">
                    Send
                  </button>
                  <button className=" basis-[30%] text-lg text-white bg-[#001925] font-nav font-semibold p-2   border-[#83dbff] border-b border-r clip-path-custom2 ">
                    Rest
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*   <div className="container flex justify-center">
        <Lottie className="w-1/4" animationData={contact} />{" "}
      </div> */}
    </div>
  );
}

export default Contact;
