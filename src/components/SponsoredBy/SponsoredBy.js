import React, { useState } from 'react';
import './SponsoredBy.scss';
import SponsorsPopUp from '../SponsorsPopUp/SponsorsPopUp';
const driveURL = 'https://drive.google.com/uc?id=';

function SponsoredBy() {
  const images = [
    {
      name: 'allevents',
      src: driveURL + '1GzUHWsJqY8pacZz-8MrdBP4qPbqALaF0',
      sponsoredLink: '#',
    },
    {
      name: 'visaeuro',
      source: driveURL + '1ldHKPhnxQyyy_Lg5OHUTrcqQR4lTwtkj',
      src: driveURL + '12EVtQK-hA2nHVGECGxMUFEOyKlBLjqxJ',
      sponsoredLink: '#',
    },
    {
      name: 'career lines',
      src: driveURL + '1kdyBeDv5cnpijGTKKFfLqeRUQFwtWaSk',
      sponsoredLink: '#',
    },
    {
      name: 'I.C.E GATE Academy',
      source: driveURL + '1sD0MDol3xcbxVL0b0boqdx3I_36KRAfe',
      src: driveURL + '13pHmGKPaOXO-zCsl6IxTVly3gbxSEQMo',
      sponsoredLink: 'https://forms.gle/mHaHATiT1Mw38AGF7',
    },
  ];

  const [openOne, setOpenOne] = useState(false);
  const [OpenImgTwo, setOpenImgTwo] = useState(false);
  const [OpenImgThree, setOpenImgThree] = useState(false);
  const [OpenImgFour, setOpenImgFour] = useState(false);

  return (
    <div className="sponsored-by">
      <div className="sponsored-by__title-box">
        <div className="sponsored-by__front-line">&nbsp;</div>
        <div className="sponsored-by__title">Sponsored By</div>
        <div className="sponsored-by__back-line">&nbsp;</div>
      </div>
      <div className="logo-box">
        <SponsorsPopUp
          source={images[0].src}
          sponsorAlt={images[0].name}
          imgHover={() => {
            setOpenOne(true);
          }}
          clicked={() => {
            setOpenImgTwo(true);
          }}
          open={openOne}
          close={() => {
            setOpenOne(false);
          }}
          SponsorsBanner={images[0].source}
          bgColor="black"
          sponsorshipText="Powered By"
          sponsoredLink={images[0].sponsoredLink}
        />
        <SponsorsPopUp
          source={images[1].src}
          sponsorAlt={images[1].name}
          close={() => {
            setOpenImgTwo(false);
          }}
          imgHover={() => {
            setOpenImgTwo(true);
          }}
          clicked={() => {
            setOpenImgTwo(true);
          }}
          bgColor="black"
          open={OpenImgTwo}
          SponsorsBanner={images[1].source}
          sponsorshipText="In Association "
          sponsoredLink={images[1].sponsoredLink}
          imgBg="#F0F4F8"
          imgPadding="0.5rem"
          imgBorderRadius="0.3rem"
        />
        <SponsorsPopUp
          source={images[2].src}
          sponsorAlt={images[2].name}
          close={() => {
            setOpenImgThree(false);
          }}
          clicked={() => {
            setOpenImgTwo(true);
          }}
          imgHover={() => {
            setOpenImgThree(true);
          }}
          bgColor="black"
          open={OpenImgThree}
          sponsorshipText="Education Partner "
          sponsoredLink={images[2].sponsoredLink}
          SponsorsBanner={images[2].source}
        />
        <SponsorsPopUp
          source={images[3].src}
          sponsorAlt={images[3].name}
          close={() => {
            setOpenImgFour(false);
          }}
          imgHover={() => {
            setOpenImgFour(true);
          }}
          clicked={() => {
            setOpenImgTwo(true);
          }}
          bgColor="black"
          open={OpenImgFour}
          sponsorshipText="Knowledge Partner "
          sponsoredLink={images[3].sponsoredLink}
          SponsorsBanner={images[3].source}
        />
      </div>
    </div>
  );
}

export default SponsoredBy;
