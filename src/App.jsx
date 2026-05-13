function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backgroundColor: "#111",
        }}
      >
        <h2>Ruscoob</h2>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={linkStyle}>
            Home
          </a>
          <a href="#about" style={linkStyle}>
            About
          </a>
          <a href="#services" style={linkStyle}>
            Services
          </a>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "20px",
          }}
        >
          Welcome to Ruscoob
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px",
            color: "#bbb",
            lineHeight: 1.6,
          }}
        >
          Building simple, modern web experiences with React and Vite.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            fontSize: "18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "white",
          }}
        >
          Learn More
        </button>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          padding: "100px 40px",
          backgroundColor: "#181818",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>About</h2>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "800px",
            color: "#bbb",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          Ruscoob is a lightweight React project focused on clean design,
          simplicity, and fast performance.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "100px 40px",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={cardStyle}>
            <h3>Web Design</h3>
            <p>Modern responsive layouts built for speed and simplicity.</p>
          </div>

          <div style={cardStyle}>
            <h3>Development</h3>
            <p>React and Vite applications with clean structure.</p>
          </div>

          <div style={cardStyle}>
            <h3>Hosting</h3>
            <p>Deployment-ready frontend projects for production use.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        style={{
          padding: "40px",
          borderTop: "1px solid #222",
          textAlign: "center",
          color: "#777",
        }}
      >
        © 2026 Ruscoob
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const cardStyle = {
  backgroundColor: "#1f1f1f",
  padding: "30px",
  borderRadius: "12px",
  lineHeight: 1.6,
};

export default App;
