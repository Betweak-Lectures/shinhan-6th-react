// src/components/MyButton.jsx

export default function MyButton({ title, color, clickUrl }) {
  return (
    <a
      href={clickUrl}
      target="_blank"
      style={{
        padding: 10,
        borderRadius: 5,
        textDecoration: "none",
        color: "white",
        backgroundColor: color,
      }}
    >
      {title}
    </a>
  );
}
