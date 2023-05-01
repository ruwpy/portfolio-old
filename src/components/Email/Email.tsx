import "./Email.scss";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

const Email = ({ name, email, message }: EmailProps) => {
  return (
    <div className="email">
      <span className="email__name">
        name: <span>{name}</span>
      </span>
      <span className="email__from">
        from: <span>{email}</span>
      </span>
      <p className="email__message">{message}</p>
    </div>
  );
};

export default Email;
