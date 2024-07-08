import { BookMarked, HandPlatter, Handshake, Icon, Ship } from "lucide-react";

const K = {
    NAVLINKS: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about-us"
        },
        {
            name: "Collection",
            path: "/collection"
        },
        {
            name: "ContactUs",
            path: "/contact-us"
        },

    ],

    SERVICES: [
        {
            title: "Exclusive Yacht Charters",
            description: "Set sail on an unforgettable journey with our exclusive yacht charters. Experience a world of luxury and adventure awaiting you.",
            icon: <Ship/>,
            iconColor: "#E1CEC8",
            bgColor: "#F5EBEB"
        },
        {
            title: "Customized Itineraries",
            description: "Experience the freedom of a tailored adventure with our customized itineraries. ",
            icon: <BookMarked/>,
            iconColor: "#8BBD8E",
            bgColor: "#DCEBDD"
        },
        {
            title: "Gourmet Onboard Dining",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <HandPlatter/>,
            iconColor: "#D1B54A",
            bgColor: "#F4E6D8"
        },
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <Handshake/>,
            iconColor: "#D29A61",
            bgColor: "#F4E6D8"
        },
    ],
    
};

export default K