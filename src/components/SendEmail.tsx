import React from "react";

const SendEmail = () => {
  return (
    <div className="w-2/5 mx-auto flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold">Or Send me an email</h1>
      <form
        className="bg-blue-950 text-white w-full max-w-sm min-w-max rounded p-4 mt-8 "
        action=""
      >
        <div>Your Email</div>
        <input className="w-full" type="text" />
        <div>Subject</div>
        <input className="w-full" type="text" />
        <div>Message</div>
        <textarea
          name="message"
          id="message"
          className="w-full h-48 resize-none"
        ></textarea>
        <button className="w-full text-black bg-amber-400">Submit</button>
      </form>
    </div>
  );
};

export default SendEmail;
