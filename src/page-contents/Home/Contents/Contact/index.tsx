import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import ContactCard from "./ContactItem/ContactCard";
import { ContactCardContainer } from "./ContactItem/styles";
import values from "./values";

const Contact = () => {
  return (
    <SectionLayout
      title={translate({
        id: "pages.Home.Contents.Contact.title",
        message: "문의하기",
      })}
    >
      <ContactCardContainer>
        {values.contactMethods.map((contact, index) => (
          <ContactCard key={`contact-method--${index}`} contact={contact} />
        ))}
      </ContactCardContainer>
    </SectionLayout>
  );
};

export default Contact;
