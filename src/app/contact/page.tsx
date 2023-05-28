import ContactMe from "@/components/ContactMe";
import SendEmail from "@/components/SendEmail";

const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">
        <ContactMe />
        <SendEmail />
      </div>
    </div>
  );
};

export default page;
