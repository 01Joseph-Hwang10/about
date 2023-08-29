const primary = (degree?: number) => `linear-gradient(
  ${degree || 134}deg,
  var(--ifm-color-primary-lighter) 0%,
  var(--ifm-color-primary-darker) 100%
)`;

const info = (degree?: number) => `linear-gradient(
  ${degree || 134}deg,
  var(--ifm-color-info-lighter) 0%,
  var(--ifm-color-info-darker) 100%
)`;

export default {
  primary,
  info,
};
