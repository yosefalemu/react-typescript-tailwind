import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Footer = ({}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="md:flex w-5/6 mx-auto gap-16">
        <div className="mt-16 basis-1/2 md:mt-0 text-sm">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h6 className="font-bold">Links</h6>
          <p className="my-5 text-sm">Massa orci senectus</p>
          <p className="my-5 text-sm">Et gravida id et etiam</p>
          <p className="text-sm">Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 text-sm">
            Tempus metus mattis risus volutpat egestas.
          </p>
          <p className="text-sm">(251)9-82-01-03-18</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
