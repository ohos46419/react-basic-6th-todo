const RootLayout = ({ children }) => {
  return (
    <main className="main-center">
      <header>나는 완전히 붕괴되었습니다</header>
      {children}
      <footer>저는 footer입니다</footer>
    </main>
  );
};

export default RootLayout;
