import "./authWrapper.scss";

const authWrapper = (Component: any) => {
  return (props: any) => (
    <div className="auth-wrapper">
      <div className="auth-wrapper-content">
        <Component {...props} />
      </div>
    </div>
  );
};

export default authWrapper;
