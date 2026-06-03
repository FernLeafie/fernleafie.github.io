"use client";
import ThemeSwitcher from "@/components/utils/ThemeSwitcher";

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <p>meow</p>
        <p>prrr</p>
        <p>mrrp</p>
        <div>
          <p>nyan</p>
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  );
}
export default Footer;
