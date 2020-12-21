import React from "react";

const Button = ({
  title,
  borderColor,
  backgroundColor = "#fff",
  color = "#000",
  icon,
  width = 194,
  height = 64,
  borderRadius = 97,
  margin = 2,
  loading,
  ...others
}) => {
  return (
    <div
      className="idea-submit-btn"
      style={{
        border: borderColor ? `1px solid ${borderColor}` : "",
        backgroundColor,
        width,
        height,
        borderRadius,
        margin
      }}
      {...others}
    >
      {loading ? (
        <div className="loader"></div>
      ) : (
        <span style={{ color, marginLeft: icon ? 4 : 0 }}>{title}</span>
      )}
      {icon && (
        <img
          className="select-option-img"
          src={process.env.PUBLIC_URL + `img/go-back.svg`}
          alt="آیکن"
        />
      )}
    </div>
  );
};
export default Button;