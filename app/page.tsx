import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-sm font-semibold leading-6 text-gray-900">
                Coaching CMS
              </span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
          </div>
        </nav>
      </header>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[78.5vh] lg:items-center">
          <div className="mx-auto max-w-xxl text-center flex flex-col items-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Empower Your Coaching{" "}
              <strong className="font-extrabold text-red-700 sm:block">
                Business with a Seamless CMS
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed max-w-xl">
              Streamline your operations, manage clients, and deliver
              personalized coaching experiences with ease.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 rounded-lg shadow m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-700 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Coaching CMS
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
