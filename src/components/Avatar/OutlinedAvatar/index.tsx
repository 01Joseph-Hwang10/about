import React from "react";
import styles from "./styles";

interface OutlinedAvatarProps {
  size: string;
  src: string;
}

const OutlinedAvatar: React.FC<OutlinedAvatarProps> = ({ size, src }) => {
  return (
    <div css={styles.wrapper(size)}>
      <img className="avatar__photo" src={src} css={styles.image()} />
    </div>
  );
};

export default OutlinedAvatar;
