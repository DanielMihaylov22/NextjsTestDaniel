import { AgencySelection } from "../../sections/AgencySelection"

const agencyProps = {
    image: { src: "/img/NoVideoBait.png", alt: "", width: 1000 / 2, height: 1680 / 2 },
    title: "Managed agency selection.",
    description: "Strengthen your onboarding process",
    cards: [{
        title: "Brief",
        description: `Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.`,
        icon: "/icons/edit-tools.png"
    },{
        title: "Search",
        description: `in-depth agency search covering; <strong>criteria matching,</strong> door knocking and due-dilligence vetting.`,
        icon: "/icons/business.png"
    },{
        title: "Pitch",
        description: `Comprehensive <strong>pitch management,</strong> including comms, diary management and pitch hosting.`,
        icon: "/icons/meeting.png"
    }]
  };

export default function Agencyselection({}){
    return <AgencySelection {...agencyProps} />
}