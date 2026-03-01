import { TextHelper } from "./TextHelper";

export interface ButtonProps {
  SubClass?: string;
  Text?: string;
  Url: string;
  Svg?: string;
  ImageUrl?: string;
  asButton?: boolean;
  onClick?: () => void;
}

export function Button({
  SubClass = "",
  Text,
  Url,
  Svg,
  ImageUrl,
  asButton,
  onClick,
}: ButtonProps) {
  const content = (
    <>
      <div className="stroke" />
      <div className="fill" />
      <div className="raycast" />

      {Svg != null && (
        <div
          className="containerIcon"
          dangerouslySetInnerHTML={{ __html: Svg }}
        />
      )}

      {ImageUrl != null && (
        <div className="containerIcon imageIcon">
          <img src={ImageUrl} alt="" className="logo-image" />
        </div>
      )}

      {Text != null && <TextHelper Text={Text} />}
    </>
  );

  const className = ["button", SubClass].filter(Boolean).join(" ");

  if (asButton) {
    return (
      <button type="button" className={className} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <a className={className} href={Url}>
      {content}
    </a>
  );
}
