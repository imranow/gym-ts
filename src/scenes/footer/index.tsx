import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget ante ultrices, placerat dui quis, efficitur dui. Mauris ut est
            mattis, mollis ex ac, pretium dolor. Cras lobortis fringilla turpis,
            non condimentum mauris porta sit amet. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas
          </p>

          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">FAQs & Help</p>
            <p className="my-5">Gyms near me</p>
            <p>Blog</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Legal</h4>
            <p className="my-5">Terms & Conditions</p>
            <p className="my-5">Privacy Policy</p>
            <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
