import ContactForm from "@/components/ContactForm/ContactForm";

export default function WorkWithUs() {
  return (
    <section className="pb-20 md:py-56 text-white">
      <div className="container">
        <div className="px-3 md:max-w-4xl md:mx-auto">
          <div className="relative">
            <span style={{left: '-50px', fontFamily: 'Poppins'}} className="font-light text-8xl absolute top-3">/</span>
            <p className="font-light text-4xl leading-none">
                Want to <br /> work with <br /> geniuses?
            </p>
          </div>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
