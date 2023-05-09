import React from "react";

const variantClasses = {
  h1: "font-extrabold sm:text-5xl md:text-5xl text-[79.59px]",
  h2: "font-black sm:text-5xl md:text-5xl text-[64px]",
  h3: "font-semibold sm:text-[41px] md:text-[47px] text-[55px]",
  h4: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h5: "sm:text-[31px] md:text-[33px] text-[35px]",
  h6: "md:text-3xl sm:text-[28px] text-[32px]",
  body1: "text-2xl md:text-[22px] sm:text-xl",
  body2: "text-xl",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
