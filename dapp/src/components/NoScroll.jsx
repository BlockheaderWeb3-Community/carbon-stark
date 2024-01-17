/* eslint-disable react/prop-types */
function NoScroll({ children }) {
  return <div className="!h-[100dvh] !overflow-hidden">{children}</div>;
}

export default NoScroll;
