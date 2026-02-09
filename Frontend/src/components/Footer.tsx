import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black pb-20 flex justify-center'>
      <div className='lg:max-w-[1300px] w-[1300px]'>

            <Accordion type="single" collapsible className='sm:p-20 p-7'>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                          <AccordionItem value="item-2">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                          <AccordionItem value="item-3">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
            </Accordion>

          <section className='footerSection flex text-center gap-10 sm:justify-around sm:flex-row flex-col items-center cursor-pointer'>
              <div>
                <h1 className='text-4xl'>INNEWS</h1>
              </div>
              <div className=''>
                <h2>About Us</h2>
                <ul>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </div>
              <div>
                          <h2>About Us</h2>
                <ul>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </div>
              <div>
                          <h2>About Us</h2>
                <ul>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
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
