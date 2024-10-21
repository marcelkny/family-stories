import { useCallback, useState } from "react";
import AddIcon from "../icons/AddIcon";
import { BottomSlideMenu } from "./BottomSlideMenu";
import { BottomSlideMenuItem } from "../../dtos/bottomslidemenu.dto";
import CurrencyEuroIcon from "../icons/CurrencyEuroIcon";
import { useIsLoggedIn } from "../../context/SessionContext";
import MenuIcon from "../icons/MenuIcon";

const slideMenuCenterItems: BottomSlideMenuItem[] = [
    {
        caption: "Neue Transaktion",
        funcionType: "nav",
        target: "/transaction/new",
    },
];

const slideMenuSettingItems: BottomSlideMenuItem[] = [
    {
        caption: "Settings",
        funcionType: "nav",
        target: "/settings",
    },
    {
        caption: "Logout",
        funcionType: "logout",
    },
];

export default function Footer() {
    const [menuActive, setMenuActive] = useState(false);
    const [slideMenuItems, setSlideMenuItems] = useState<BottomSlideMenuItem[]>([]);
    const isLoggedIn = useIsLoggedIn();
    const [currentItemsType, setCurrentItemsType] = useState<string>("center");

    const toggleMenu = () => {
        console.log("should be: ", !menuActive);
        setMenuActive(!menuActive);
    };
    const setMenuItems = 
        (itemsType: string) => {
            console.log("setMenuItems: ", itemsType);
            console.log("currentItemsType: ", currentItemsType);
            switch (itemsType) {
                case "center":
                    setSlideMenuItems(slideMenuCenterItems);
                    break;
                case "setting":
                    setSlideMenuItems(slideMenuSettingItems);
                    break;
                default:
                    return;
            }
            if(menuActive === false || (menuActive === true && itemsType === currentItemsType)) {
                toggleMenu();
            }
            setCurrentItemsType(itemsType);
            
            
        };
    return (
        <div className="bg-slate-900 h-16 text-white">
            Footer
        </div>
    );
}
