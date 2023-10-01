type AcationBarProps = {
  title: string;
  children: React.ReactNode;
};

const AcationBar = ({ title, children }: AcationBarProps) => {
  return (
    <div>
      <h1>{title}</h1>

      <div
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AcationBar;
