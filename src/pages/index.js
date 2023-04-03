import Image from "next/image"
import { useEffect, useState } from "react";
import bg from "../../public/email_img.png"

export default function Home() {

  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (email === "") return alert("Please enter your email");
    const res = await fetch("http://localhost:3000/api/generateanswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const data = await res.json();
    setAnswer(data.text.content);
  }

  return (
    <div className="">
      <div className="header flex justify-evenly  items-center bg-[#f8eaf836] p-4">
        <div className="icon"><svg width={45} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="black" ><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z" /></svg><p>Emails</p>
        </div>
        <div className="flex gap-4 font-sans text-[20px] hover:cursor-pointer ">
          <p className="hover:bg-[#ff8f00] rounded-[6px] p-[6px]">use cases</p>
          <p className="hover:bg-[#ff8f00] rounded-[6px] p-[6px]">Pricing</p>
          <p className="hover:bg-[#ff8f00] rounded-[6px] p-[6px]">Resources</p>
          <p className="hover:bg-[#ff8f00] rounded-[6px] p-[6px]">what's new</p>
          <button className="hover:bg-[#ff8f00] rounded-[6px] p-[6px] flex items-center justify-center gap-1"> <span>Start writing </span>
            <span><svg viewBox="0 0 24 24" fill="black" width="1rem" height="1rem"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></span> </button>

        </div>
      </div>
      <div className="home flex justify-evenly items-center mt-48">
        <div className="heading">
          <h1 className="font-serif text-6xl mb-8">AI Email Writer</h1>
          <p className=" font-sans text-2xl">Create catchy emails for marketing, sales, engagement, <br /> & more in  seconds</p>

          <button
            type="button" className="flex items-center justify-center gap-1 mt-10  rounded-full bg-[#ff8f00] px-6 pt-4 pb-4 text-[1rem] font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-[#ff8f00]-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-#ff8f00-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-[#ff8f00]-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]">
            <span>Start writing </span>
            <span><svg viewBox="0 0 24 24" fill="#fff" width="1rem" height="1rem"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></span>
          </button>
        </div>
        <div className="img "><Image src={bg} alt="" width={350} height={100} /></div>
      </div>
      <div className=" mt-20">
        <header>
          <h1 className="font-serif items-center justify-center text-4xl mt-6 mb-14 flex gap-3"><span>Email Writer</span>
            <span><svg width={28} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z" /></svg></span></h1>
        </header>
        <main>
          <form id="email-form">
            {/* <label htmlFor="to">Choose use case :</label> */}
            {/* <input type="text" id="to" name="to" required /> */}
            <label htmlFor="subject">Purpose of email & Key points :</label>
            <input onChange={(e) => setEmail(e.target.value)} id="emailid" className="emailclass placeholder-gray-500 ..." placeholder="write here....." type="text" name="subject" required />
            <label htmlFor="message">your Email :</label>
            <textarea className="placeholder-gray-500 ..." placeholder="Here is your Result ....." id="message" name="message" required onChange={(e) => console.log(e.target.value)} value={answer}></textarea>
            <button onClick={(e) => handleClick(e)} className="mt-8" type="submit">Generate Email</button>
          </form>
          <div id="email-result"></div>
        </main>
        <footer className="mt-8 text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg width={22} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" /></svg>
              <span className="ml-3 text-xl">AI Email Writer</span>
            </a>
            <p className="text-sm text-gray-800  sm:ml-4 sm:pl-4 sm:border-l-2 sm:text-gray-600 sm:py-2 sm:mt-0 mt-4">© 2023 Email Writer —
              <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@surbhi</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}