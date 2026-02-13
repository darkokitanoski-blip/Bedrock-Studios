import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


// footer component to implement
const Footer = () => {
  return (
    <footer className='bg-black pb-20 flex justify-center'>
      <div className='lg:max-w-325 w-325'>

        <div className=" pl-25 pr-25">
            <h1 className="text-6xl text-center pt-8">questions about bedrock studios</h1>
            <Accordion type="single" collapsible className=" sm:p-20 p-7">
      
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I publish my game with Bedrock Studios?
                </AccordionTrigger>
                <AccordionContent>
                  Submit your project through our developer portal. Our publishing team
                  reviews gameplay, market fit, and long-term potential. If approved, we
                  support you with funding, marketing, distribution, and post-launch growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What kind of games are you looking for?
                </AccordionTrigger>
                <AccordionContent>
                  We focus on bold, high-quality titles across PC and console. Whether it's
                  indie passion projects or large-scale multiplayer experiences, we look
                  for originality, strong mechanics, and long-term player engagement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What support do publishers provide?
                </AccordionTrigger>
                <AccordionContent>
                  From funding and production guidance to global marketing campaigns and
                  storefront optimization, we help turn great games into commercial
                  successes. Our team works closely with developers at every stage.
                </AccordionContent>
              </AccordionItem>

          </Accordion>
        </div>


        <section className='footerSection flex text-center gap-10 sm:justify-around sm:flex-row flex-col items-center cursor-pointer'>
          <div>
            <h1 className='text-4xl'>Bedrock Studios</h1>
          </div>
          <div>
            <h2 className="text-xl p-3">Games</h2>
            <ul>
              <li>Releases</li>
              <li>Top Charts</li>
              <li>Upcoming</li>
              <li>Popular</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl p-3">Company</h2>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl p-3">Support</h2>
            <ul>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Forums</li>
              <li>Help</li>
            </ul>
          </div>
        </section>


          <div className='IconsSocial flex mt-20 justify-center gap-16'>
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
          <hr className='opacity-15 mt-10'/>
          <p className='text-center opacity-25'>@Darko-Dev1</p>
      </div>

    </footer>
  )
}

export default Footer
