import React from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import evulCertificate from 'figma:asset/59fd81018a595483359ff8dfe9064710636bbb87.png';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";

export const ContactDetailsSection: React.FC = () => {
  return (
    <section className="relative w-full pt-16 lg:pt-24 pb-[60px] bg-[#F4F9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 h-full flex items-center justify-center">
             <Dialog>
               <DialogTrigger asChild>
                 <img 
                   src={evulCertificate} 
                   alt="Eesti Võlausaldajate Liit Certificate" 
                   className="w-full max-w-md lg:max-w-full h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                 />
               </DialogTrigger>
               <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto h-auto p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
                 <img 
                   src={evulCertificate} 
                   alt="Eesti Võlausaldajate Liit Certificate" 
                   className="max-w-full max-h-[85vh] object-contain rounded-lg bg-white"
                 />
               </DialogContent>
             </Dialog>
          </div>

          {/* Right Column - Contact Details */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8 lg:pl-10">
            
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#163823] tracking-tight">
                Kontakt
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jätkusuutlik metsamajandus ning teie pikaajaline ning usaldusväärne partner kõiges metsanduses. Ostame teie kinnistu või saame teile kinnistu eest parima hinna ilma tüütute vahendajate või helistajateta.
              </p>
            </div>

            <div className="space-y-8 mt-8">
              
              {/* Company Name & Reg Code */}
              <div className="bg-white p-6 rounded-xl border border-[#E8F2EC] shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2">
                  Eesti Metsamaakler Group OÜ
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <FileText className="w-5 h-5 text-[#347D4E]" />
                  <span className="font-medium">Registrikood:</span>
                  <span>17131769</span>
                </div>
              </div>

              {/* Contact Info List */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#347D4E]/10 flex items-center justify-center text-[#347D4E] shrink-0 group-hover:bg-[#347D4E] group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Aadress</h4>
                    <p className="text-lg text-[#163823] font-medium leading-tight">
                      Tartu maakond, Tartu Linn, <br />
                      Kaunase pst 72, 50706
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a href="tel:+37253765888" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#347D4E]/10 flex items-center justify-center text-[#347D4E] shrink-0 group-hover:bg-[#347D4E] group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Telefon</h4>
                    <p className="text-lg text-[#163823] font-medium group-hover:text-[#347D4E] transition-colors">
                      +372 5376 5888
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@metsamaakler.ee" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#347D4E]/10 flex items-center justify-center text-[#347D4E] shrink-0 group-hover:bg-[#347D4E] group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">E-mail</h4>
                    <p className="text-lg text-[#163823] font-medium group-hover:text-[#347D4E] transition-colors">
                      info@metsamaakler.ee
                    </p>
                  </div>
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
