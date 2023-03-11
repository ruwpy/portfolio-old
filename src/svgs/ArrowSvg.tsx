export default function ArrowSvg({
  iconStyle,
  direction,
}: {
  iconStyle?: string;
  direction?: string;
}) {
  return (
    <svg
      className={`button__arrow ${iconStyle}`}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        className={direction}
        d="M14 4.66666L14 23.3333M14 23.3333C14 23.3128 14 15.6452 21.4667 15.6452M14 23.3333C14 23.3128 14 15.6452 6.53334 15.6452"
        stroke="#F1ECE8"
        strokeWidth="2.25"
      />
    </svg>
  );
}
