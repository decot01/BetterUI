export interface TextHelperProps {
  Text: string;
  TextClass?: string;
}

export function TextHelper({ Text, TextClass = "text" }: TextHelperProps) {
  return (
    <div className="container textHelper">
      <div
        className={TextClass}
        dangerouslySetInnerHTML={{ __html: Text }}
      />
      <div className="helper" />
    </div>
  );
}
