import Header from "@/components/Header";
import SocialLink from "@/components/SocialLink";
import {PROPERTIES} from "@/app/utils/utils";
const ConnectPage= () => {
    return (
        <div>
            {/*Connect Header */}
            <Header name="Connect" />
            {/*Socials*/}
            <div className="flex mt-4 bg-zinc-600 border-2 border-zinc-500 rounded-lg shadow-zinc-700 shadow-md">
                <div className="flex justify-around items-center w-full m-4 gap-4">
                    <SocialLink src={PROPERTIES.linkedinURL} image_src={PROPERTIES.linkedinImage}
                                alt={PROPERTIES.linkedinAlt} title={PROPERTIES.linkedinTitle}/>
                    <SocialLink src={PROPERTIES.githubURL} image_src={PROPERTIES.githubImage}
                                alt={PROPERTIES.githubAlt} title={PROPERTIES.githubTitle}/>
                    <SocialLink src={PROPERTIES.gmailURL} image_src={PROPERTIES.gmailImage}
                                alt={PROPERTIES.gmailAlt} title={PROPERTIES.gmailTitle} />
                </div>
            </div>
        </div>
    );
};

export default ConnectPage;
