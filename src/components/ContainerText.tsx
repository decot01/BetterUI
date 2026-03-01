export interface ContainerTextProps {
  SubClass?: string;
  Text?: string;
  Url?: string;
  TextSize?: number;
  TextWeight?: number;
}

export function ContainerText({
  SubClass = "",
  Text = "",
  Url = "",
  TextSize = 16,
  TextWeight = 600,
}: ContainerTextProps) {
  const className = ["container-text", SubClass].filter(Boolean).join(" ");
  return (
    <div className={className}>
      <a
        className="text"
        href={Url}
        style={{
          fontSize: TextSize,
          fontWeight: TextWeight,
        }}
      >
        {Text}
      </a>
      <div className="helper" />
    </div>
  );
}
