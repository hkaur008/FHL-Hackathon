import bharatX from "../Components/Sponsors/logo/bharatX.png";
import ShardingSphere from "../Components/Sponsors/logo/ShardingSphere Logo.jpeg";
import asyncapi from "./Org/asyncapi.jpg";
import HyperLedger from "./Org/hypreldgerindia.jpeg"

const config = {
    // desktopSwags: {
    //     wallpaper: {
    //         download: "1",
    //         images: ["swag1.jpeg", "swag2.jpg", "swag3.png"],
    //     },

    //     zoomBackground: {
    //         download: "2",
    //         images: ["swag1.jpeg", "swag2.jpg", "swag3.png"],
    //     },
    // },
    // mobileSwags: {
    //     wallpaper: {
    //         download: "3",
    //         images: ["swagmobile1.jpg", "swagmobile2.png", "swagmobile3.jpg"],
    //     },
    //     story: {
    //         download: "4",
    //         images: ["swagmobile1.jpg", "swagmobile2.png", "swagmobile3.jpg"],
    //     },
    // },

    prizes: [
        {
            website: "https://bharatx.tech/",
            icon: bharatX,
            logoSize:"90%",
            prices: [
                "30k cash prize winner of Bounty Challenge",
                "Goodies to TOP 50 contributors",
                "Hiring Opportunities",
            ],
        },
        {
            website: "https://shardingsphere.apache.org/",
            icon: ShardingSphere,
            logoSize:"55%",
            prices: [
                "Goodies",
                "Swags",
                "T-Shirts",
                "Many other cool stuffs to Contributors",
            ],
        },
        {
            website: "https://www.asyncapi.com/",
            icon: asyncapi,
            logoSize:"55%",
            prices: [
                "T-Shirts",
                "Article by asyncapi specially for recoginition"
            ],
        },
        {
            website: "https://www.asyncapi.com/",
            icon: HyperLedger,
            logoSize:"55%",
            prices: [
                "Special Ambassabor kits for Students /Paticipants in any way including contributing to pull requests, issues"
            ],
        },
    ],
};

export default config;
