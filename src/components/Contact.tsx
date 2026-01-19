const Contact=() =>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4 text-center ">Contact Us</h1>
            <form >
        <div className="flex flex-col items-center bg-fuchsia-200 p-4 rounded-lg w-4/6 m-auto">
          <input
            type="text"
            className="border border-black p-2 m-2 w-1/2"
            placeholder="Name"
          />
          <input
            type="email"
            className="border border-black p-2 m-2 w-1/2"
            placeholder="Email"
          />
          <textarea
            className="border border-black p-2 m-2 w-1/2 h-32 "
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="font-semibold border border-black p-2 m-2 mt-8 rounded-lg w-1/2 hover:bg-pink-950 hover:text-white transition"
          >
            Submit
          </button>
        </div>
      </form>
         </div>  )                            
};
export default Contact;