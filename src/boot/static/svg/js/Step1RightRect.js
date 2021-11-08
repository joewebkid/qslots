import * as React from "react";

function SvgStep1RightRect({fill, ...props}) {
  return (
    <svg
      width={329}
      height={334}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={120.008}
        width={252.016}
        height={240.015}
        rx={44.765}
        transform="rotate(30 120.008 0)"
        fill={fill ? fill : "#fc6652"}
      />
    </svg>
  );
}

export default SvgStep1RightRect;
