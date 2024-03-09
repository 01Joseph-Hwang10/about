import React from "react";
import styles, {
  ContactDescription,
  ContactIconWrapper,
  ContactInfo,
  ContactTitle,
} from "./styles";
import { ContactMethod } from "../values";
import useIsMobile from "@site/src/hooks/useIsMobile";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactCardProps {
  contact: ContactMethod;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const isMobile = useIsMobile();
  const isDarkMode = useIsDarkMode();
  const iconColor = isDarkMode
    ? "var(--ifm-color-secondary)"
    : "var(--ifm-color-primary-contrast-foreground)";
  return (
    <div css={styles.cardWrapper}>
      <div className="card" css={styles.card}>
        <ContactIconWrapper>
          <FontAwesomeIcon
            icon={contact.icon}
            size={contact.getSize(isMobile)}
            color={iconColor}
          />
        </ContactIconWrapper>
        <div css={styles.contentWrapper}>
          <ContactTitle isDarkMode={isDarkMode}>{contact.title}</ContactTitle>
          <ContactDescription>{contact.description}</ContactDescription>
          <ContactInfo>{contact.info}</ContactInfo>
          <a
            href={contact.href}
            className="button button--primary"
            css={styles.button}
          >
            문의하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
