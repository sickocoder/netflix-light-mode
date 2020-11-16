import FirstSerieImage from '../../../assets/images/series/first.png';
import SecondSerieImage from '../../../assets/images/series/second.png';
import ThirdSerieImage from '../../../assets/images/series/third.png';

import ML01 from '../../../assets/images/series/mylist-01.png';
import ML02 from '../../../assets/images/series/mylist-02.png';
import ML03 from '../../../assets/images/series/mylist-03.png';
import ML04 from '../../../assets/images/series/mylist-04.png';

import NO01 from '../../../assets/images/series/no-01.png';
import NO02 from '../../../assets/images/series/no-02.png';
import NO03 from '../../../assets/images/series/no-03.png';
import NO04 from '../../../assets/images/series/no-04.png';

export const ContinueWatchingData = {
  sectionTitle: 'Continue watching',
  items: [
    {
      id: 1,
      image: FirstSerieImage,
      description: 'S1:E2',
      watchPercetage: 65,
    },
    {
      id: 2,
      image: SecondSerieImage,
      description: 'S1:E2',
      watchPercetage: 20,
    },
    {
      id: 3,
      image: ThirdSerieImage,
      description: 'S1:E2',
      watchPercetage: 5,
    },
  ],
};

export const moviesData = [
  {
    sectionTitle: 'My list',
    items: [
      {
        id: 1,
        image: ML01,
      },
      {
        id: 2,
        image: ML02,
      },
      {
        id: 3,
        image: ML03,
      },
      {
        id: 4,
        image: ML04,
      },
    ],
  },
  {
    sectionTitle: 'NETFLIX ORIGINALS',
    items: [
      {
        id: 1,
        image: NO01,
      },
      {
        id: 2,
        image: NO02,
      },
      {
        id: 3,
        image: NO03,
      },
      {
        id: 4,
        image: NO04,
      },
    ],
  },
];
