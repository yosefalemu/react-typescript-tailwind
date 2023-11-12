import { useState } from "react";
import Logo from "@/assets/Logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import NavLinkComponent from "./NavLinkComponent";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/Hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isButtonClicked, setIsButtonClicked] = useState<Boolean>(false);
  const navBackround = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBackround} flex align-item justify-between w-full py-6 fixed top-0 z-30`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            {/* left */}
            <img src={Logo} alt="Logo" />
            {/* right */}
            {isAboveMediumScreen ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <NavLinkComponent
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavLinkComponent
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavLinkComponent
                    page="About Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavLinkComponent
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center gap-8 text-sm">
                  <p>Sign Up</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Be our member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="flex items-center justify-center rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsButtonClicked(!isButtonClicked)}
                >
                  <Bars3Icon className="text-white h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SideModal */}
        {!isAboveMediumScreen && isButtonClicked && (
          <div className="fixed right-0 top-0 h-full w-[300px] bg-primary-100">
            {/* close button */}
            <div className="p-6 flex justify-end">
              <button
                onClick={() => setIsButtonClicked(!isButtonClicked)}
                className="bg-secondary-500 rounded-full p-1"
              >
                <XMarkIcon className="text-white h-6 w-6" />
              </button>
            </div>
            {/* Menu items */}
            <div className="flex flex-col gap-10 text-2xl ml-[33%]">
              <NavLinkComponent
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
