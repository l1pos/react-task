interface Props {
  text: string;
  query: string;
}

const HighlightText = ({ text, query }: Props) => {
  if (!query.trim()) return <>{text}</>;

  // Разбиваем текст на части по ключевым словам
  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: "#ffff00" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightText;
