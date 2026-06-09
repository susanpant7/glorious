import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dfyqhn5fy' } });
  
  const img = cld
        .image('WhatsApp_Image_2026-06-09_at_08.46.30_2_ksl3kf');

};

export default App