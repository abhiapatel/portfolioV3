import React from "react";

export default function Section({
  id,
  className,
  title,
  contactSection,
  children,
}) {
  return (
    <>
      {contactSection ? (
        <div
          className={`${className} flex flex-col lg:pt-5 p-10 pb-5 lg:mt-0 md:mt-0 sm:mt-20`}
          id={id}
        >
          <div className="flex lg:pt-28 md:pt-32 sm:pt-0">
            <h1 className="uppercase text-md leading-6 tracking-widest text-sky-400">
              {title}
            </h1>
          </div>
          <div className="flex justify-start flex-col w-full p-6 gap-6">
            {children}
          </div>
        </div>
      ) : (
        <div
          className={`${className} grid lg:grid-cols-4 lg:pt-5 lg:px-52 sm:p-10 lg:mt-0 md:mt-0 sm:mt-20 md:p-10 lg:gap-14 sm:gap-5`}
          id={id}
        >
          <div className="flex lg:justify-end md:justify-start sm:justify-start lg:pt-28 md:pt-32 sm:pt-0">
            <h1 className="uppercase text-md leading-6 tracking-widest text-sky-400">
              {title}
            </h1>
          </div>
          <div className="col-span-3 flex justify-start flex-col w-full lg:pt-28 sm:p-6 gap-6">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
