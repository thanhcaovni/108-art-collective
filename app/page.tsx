export default function Home() {
  return (
    <main style={{
      height: "100vh",
      background: "#050505",
      color: "#ECE5DB",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "serif"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{
          fontSize: "10rem",
          margin: 0,
          letterSpacing: "-0.04em"
        }}>
          108
        </h1>

        <p style={{
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          marginTop: 24
        }}>
          ART COLLECTIVE
        </p>

        <p style={{
          color: "#8A1014",
          letterSpacing: "0.4em",
          textTransform: "uppercase"
        }}>
          FROM NOTHING TO INFINITE
        </p>
      </div>
    </main>
  );
}
