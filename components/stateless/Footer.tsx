const Footer = () => {
  return (
    <footer className="text-center py-4 text-bg-dark bg-bg-light dark:text-bg-light dark:bg-bg-dark border-t border-secondary transition">
      <p>
        Copyright ©{" " + new Date().getFullYear() + " "}Made by Hanivan Rizky S
      </p>
    </footer>
  );
};

export default Footer;
