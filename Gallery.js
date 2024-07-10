import React, { useState } from 'react';
import './Gallery.css';
import ImageItem from './ImageItem';
import Modal from './Modal';

const images = [
  'https://www.livemint.com/lm-img/img/2024/06/30/600x338/CRICKET-WC-2024-T20-IND-RSA-36_1719728113722_1719728124935.jpg',
  'https://images.deccanherald.com/deccanherald/2024-07/b540460d-885f-4184-a807-b16312450396/T20_World_Cup_Winning_Images__4_.JPG?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true',
  'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-06/Rohit%20Sharma%20India%20T20%20World%20Cup%202024%20copy.jpg?h=920929c4&itok=G2y_-HYt',
  'https://images.cnbctv18.com/uploads/2024/06/team-india-t20-world-cup-2024-06-9da0951700a33b7fcec01b6b3f9186e2-780x438.jpg',
  'https://cf-img-a-in.tosshub.com/lingo/itne/images/story/202406/6676669a86927-t20-world-cup-2024-india-to-face-bangladesh-on-june-22-photo-t20worldcupx-225225674-16x9.jpg?size=948:533',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_riCDSpPxtTkB_vE4kvMk1b50esIZuzvdcA&s',
  'https://images.icc-cricket.com/image/upload/t_ratio21_9-size50/v1719860582/prd/jukcm2fuoiebjy7irxf8',
  'https://images.deccanherald.com/deccanherald%2F2024-07%2F6773be05-252d-40da-8182-efed611c244f%2FT20_World_Cup_Winning_Images__10_.JPG?rect=0%2C0%2C2899%2C1631',
  'https://www.aljazeera.com/wp-content/uploads/2024/06/AP24181703453378-1719693879.jpg?resize=1170%2C780&quality=80',
  'https://static.toiimg.com/thumb/msid-106580368,width-1070,height-580,imgsize-29234,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
  'https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2024/06/09/500x300_828551-20240610010428.webp',
  'https://images.mykhel.com/img/2024/06/arshdeep-singh-t20-wc-600-1718369413.jpg',
  'https://c.ndtvimg.com/2024-06/csoj5alo_rohit-kohli_625x300_30_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675',
  'https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/yvapijhcegyp8azlzlp9',
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/rohit-sharma-and-virat-kohli-273055209-16x9_0.jpg?VersionId=_S8PmYXYtiKWvZ_TaJLCE413JUxvTq6y&size=690:388',
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/rohit-sharma-kisses-hardik-pandya-293050235-16x9_0.jpeg?VersionId=BxpBn65YptRkjNXdqBoOIoO0MFsISfKY&size=690:388',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1BFp9n_cCbOSJ4vnqt2Wv5akQc5cmwTcGA&s',
  'https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/tpf5r9ewpixklikagjem',
  'https://english.mathrubhumi.com/image/contentid/policy:1.9679267:1719689965/BCC7F934-40F3-49B8-AD3E-2E1D953403DF.jpg?$p=2bae0f1&f=16x10&w=852&q=0.8',
  'https://cdn1.img.sputniknews.in/img/07e7/0b/13/5484369_0:161:3070:1888_1920x0_80_0_0_f0e934d38acc234c8ea9afdda37f93f2.jpg',
  'https://kashmirobserver.net/wp-content/uploads/2024/06/India-T20-World-Champions.jpg',
  'https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1260x945/t20-world-cup-2024-team-india-fb-2024061258039_202407764096.jpg',
  'https://c.ndtvimg.com/2024-06/gspltml8_sasa_625x300_30_June_24.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605',
  'https://etvbharatimages.akamaized.net/etvbharat/prod-images/04-07-2024/1200-675-21864928-1110-21864928-1720111644133.jpg',
  'https://www.hindustantimes.com/ht-img/img/2024/07/03/550x309/ANI-20240702185-0_1720007252600_1720007271296.jpg',
  'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202407/66875f2f8878a-rohit-sharma--virat-kohli--jasprit-bumrah-with-bcci-president-roger-binny-source-xmufaddal-vohra-054918276-16x9.jpg?size=948:533',
  'https://www.livemint.com/lm-img/img/2024/07/05/600x338/CRICKET-WC-2024-T20-IND-4_1720144975663_1720144998532.jpg'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showPrevImage = () => {
    const newIndex = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} openModal={() => openModal(index)} />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          closeModal={closeModal}
          showPrevImage={showPrevImage}
          showNextImage={showNextImage}
        />
      )}
    </div>
  );
};

export default Gallery;
