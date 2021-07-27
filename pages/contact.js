import Contact from "../src/modules/Contact/Contact";
import Link from 'next/link'
import Image from 'next/image'
import Maincontentcontact from "../src/modules/Contact/Maincontentcontact";

function contact() {
    return (
        <div>
            <Contact/>
            <Maincontentcontact/>
        </div>
    )
}

export default contact
