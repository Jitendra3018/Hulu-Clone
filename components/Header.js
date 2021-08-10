import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 items-center h-auto justify-between">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem Icon={HomeIcon} title="Home" />
                <HeaderItem Icon={LightningBoltIcon} title="Trending" />
                <HeaderItem Icon={BadgeCheckIcon} title="Verified" />
                <HeaderItem Icon={CollectionIcon} title="Collections" />
                <HeaderItem Icon={SearchIcon} title="Search" />
                <HeaderItem Icon={UserIcon} title="Account" />
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    );
}

export default Header;
