(function(){
    var script = {
 "propagateClick": false,
 "definitions": [{
 "class": "DirectionalPanoramaAudio",
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D",
 "maximumAngle": 360,
 "pitch": 0,
 "id": "audio_7B3C8231_74FE_04AD_41D8_2BD5857CDF9B",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "Panorama",
 "label": "view 4",
 "id": "panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -0.38,
   "yaw": 90.65,
   "panorama": "this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 179.94,
   "yaw": -90.87,
   "panorama": "this.panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.8,
   "yaw": 0.36,
   "panorama": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "audios": [
  "this.audio_64CE28DB_74FE_059D_41D1_756FF77A0866"
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_67F94B68_740E_C965_41DA_70C216FD69CB",
  "this.overlay_607B97F0_740E_3965_41D5_D6B953748FB3",
  "this.overlay_60A50F46_740A_4AAD_41C7_A30B3F3DE7FC"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.79,
  "pitch": 0
 },
 "id": "camera_7861D03A_7513_1EBA_41B3_E09FAFDF8F44",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.58,
  "pitch": 0
 },
 "id": "camera_78802049_7513_1EC6_41C8_AA4FA4AD5933",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.13,
  "pitch": 0
 },
 "id": "camera_78B38059_7513_1EC6_41C2_A5F899062401",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.2,
  "pitch": 0
 },
 "id": "camera_79997105_7513_1E4E_41D1_6C70AD4A9BD1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 7",
 "id": "panorama_796B0C40_740A_CEA5_41C9_728937CAC094",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -61.98,
   "yaw": 54.69,
   "panorama": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -90.13,
   "yaw": 179.1,
   "panorama": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "audios": [
  "this.audio_7B3C8231_74FE_04AD_41D8_2BD5857CDF9B"
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_62CA59AD_740A_49FE_41DA_FFED766AB1EE",
  "this.overlay_66BF7634_74B7_4400_41A3_FC4A876B56BC"
 ],
 "hfov": 360
},
{
 "class": "Panorama",
 "label": "view 10",
 "id": "panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 179.87,
   "yaw": 89.23,
   "panorama": "this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -0.22,
   "yaw": -89.32,
   "panorama": "this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 11.21,
   "yaw": -47,
   "panorama": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 0.44,
   "yaw": 0.42,
   "panorama": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 123.42,
   "yaw": 39.87,
   "panorama": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_60197A78_74AB_4C00_41C1_3422685F3043",
  "this.overlay_6182D104_74AB_5C00_41C4_4993338827FE",
  "this.overlay_6002C531_74D5_4400_41C4_F10A81746857",
  "this.overlay_61D36BAE_74D5_4C00_41BD_324DA6FB2300",
  "this.overlay_606152D3_74D7_BC07_41D2_794098B0FC16"
 ],
 "hfov": 360
},
{
 "class": "Panorama",
 "label": "view 11",
 "id": "panorama_796B52F3_740A_3B69_41D3_4ED0153768F4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 66.65,
   "yaw": -95.54,
   "panorama": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 89.23,
   "yaw": 179.87,
   "panorama": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_6015CFB2_74D4_C400_4194_B9E8E10DF11A",
  "this.overlay_61603C0E_74D5_C401_41D2_D7D7F455D3F3"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796B0C40_740A_CEA5_41C9_728937CAC094_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.87,
  "pitch": 0
 },
 "id": "camera_7943F0B7_7513_1E4A_41D6_4A7AA1415DA6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "DirectionalPanoramaAudio",
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D",
 "maximumAngle": 360,
 "pitch": 0,
 "id": "audio_7B47CC72_74FE_3CAE_41D8_88572B340BDA",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.07,
  "pitch": 0
 },
 "id": "camera_79A8AF5F_7513_02FA_41C7_6E07691DA966",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.06,
  "pitch": 0
 },
 "id": "camera_796DB0F5_7513_1FCE_41D6_2AE9C3873DDE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_661FF857_74E6_0495_419A_AA3C08EAC89C.ogg",
  "mp3Url": "media/audio_661FF857_74E6_0495_419A_AA3C08EAC89C.mp3"
 },
 "id": "audio_661FF857_74E6_0495_419A_AA3C08EAC89C",
 "data": {
  "label": "forget-16026"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.13,
  "pitch": 0
 },
 "id": "camera_7844702A_7513_1E5A_41C6_7297C878B14A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.58,
  "pitch": 0
 },
 "id": "camera_79FA2153_7513_1ECA_41DA_DA83A5B0AFC3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3",
   "camera": "this.panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A",
   "camera": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB",
   "camera": "this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12",
   "camera": "this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF",
   "camera": "this.panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "camera": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094",
   "camera": "this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3",
   "camera": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7",
   "camera": "this.panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
   "camera": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4",
   "camera": "this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3",
   "camera": "this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA",
   "camera": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054",
   "camera": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5",
   "camera": "this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist"
},
{
 "class": "DirectionalPanoramaAudio",
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D",
 "maximumAngle": 360,
 "pitch": 0,
 "id": "audio_7B5AEDD1_74FE_1FED_41D6_8FA5CAA91C59",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.08,
  "pitch": 0
 },
 "id": "camera_785A301A_7513_1E7A_41BC_DDE6184EF261",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -146.72,
  "pitch": 0
 },
 "id": "camera_79CFAF7E_7513_02BA_41D2_65CF391E4813",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.46,
  "pitch": 0
 },
 "id": "camera_78A31069_7513_1EC7_41D9_268043F89B62",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -113.35,
  "pitch": 0
 },
 "id": "camera_797150D6_7513_1FCA_41DA_53AB06EBB262",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.41,
  "pitch": 0
 },
 "id": "camera_794E80C6_7513_1FCA_41B4_6B8EA05CD202",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_7914105B_740A_775B_41B4_68424FFBA054_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133,
  "pitch": 0
 },
 "id": "camera_79D1CF6F_7513_02DB_41D4_2C66B9BFC45E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796D0969_740A_C967_41D3_F6FA6F77A208_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.9,
  "pitch": 0
 },
 "id": "camera_79B39114_7513_1E4E_41B1_63267BEDEEA6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 8",
 "id": "panorama_796795FA_740A_F965_41CC_3EFDCC6972C3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -1.39,
   "yaw": -179.92,
   "panorama": "this.panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -125.81,
   "yaw": 51.93,
   "panorama": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 89.96,
   "yaw": -0.35,
   "panorama": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -75.32,
   "yaw": 125.79,
   "panorama": "this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_66BCEB89_74B5_CC00_41BA_034B49A3EA5E",
  "this.overlay_676D9BAD_74AB_4C00_41A3_19A186CEF440",
  "this.overlay_6662C191_74AC_DC00_41D9_15775275CBB8",
  "this.overlay_67CD4259_74AD_FC00_41C8_4D30244B159A"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.61,
  "pitch": 0
 },
 "id": "camera_79B9F124_7513_1E4E_41D7_3AA30C677DE1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.97,
  "pitch": 0
 },
 "id": "camera_79DD4F7E_7513_02BA_41B1_3927C9CC785E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.68,
  "pitch": 0
 },
 "id": "camera_79DD5143_7513_1ECA_41D7_140E9BEDAE57",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.04,
  "pitch": 0
 },
 "id": "camera_79B44F4F_7513_02DA_41DB_7377C158B00B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.35,
  "pitch": 0
 },
 "id": "camera_794440B7_7513_1E4A_41CD_2E7EC1BE0B27",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.68,
  "pitch": 0
 },
 "id": "camera_79CE5143_7513_1ECA_41DA_8E2486606337",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.58,
  "pitch": 0
 },
 "id": "camera_78088FDC_7513_01FE_41B3_74367B368205",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 13",
 "id": "panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 51.93,
   "yaw": -125.81,
   "panorama": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -47,
   "yaw": 11.21,
   "panorama": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -53.03,
   "yaw": 124.42,
   "panorama": "this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 33.28,
   "yaw": -9.88,
   "panorama": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_61651991_74DF_CC00_41CF_6F8EB5AE7C85",
  "this.overlay_62A58DFE_74DC_C400_41A2_1A089B8E29C1",
  "this.overlay_6297E98A_74DC_CC01_41CE_2C281650E1DD",
  "this.overlay_62E66A85_74DB_4C00_41D3_B9DE718050B5"
 ],
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3",
   "camera": "this.panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A",
   "camera": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB",
   "camera": "this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12",
   "camera": "this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF",
   "camera": "this.panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "camera": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094",
   "camera": "this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3",
   "camera": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7",
   "camera": "this.panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
   "camera": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4",
   "camera": "this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3",
   "camera": "this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA",
   "camera": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054",
   "camera": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5",
   "camera": "this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_camera",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.04,
  "pitch": 0
 },
 "id": "camera_79D1D134_7513_1E4E_41C1_EC2C66142218",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 6",
 "id": "panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 0.36,
   "yaw": -179.8,
   "panorama": "this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -9.88,
   "yaw": 33.28,
   "panorama": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -0.35,
   "yaw": 89.96,
   "panorama": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 0.42,
   "yaw": 0.44,
   "panorama": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -123.53,
   "yaw": -50.82,
   "panorama": "this.panorama_7914105B_740A_775B_41B4_68424FFBA054",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 179.1,
   "yaw": -90.13,
   "panorama": "this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094",
   "distance": 1
  }
 ],
 "vfov": 180,
 "audios": [
  "this.audio_7B28EFCE_74FE_7BF7_41C3_F9E31793661A"
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_6298CA81_747A_4BA7_41B3_DD6C45DB8C06",
  "this.overlay_623A1F0F_747A_4ABB_41B7_66DFC2637F9D",
  "this.overlay_6234F9A6_7476_49ED_41B4_A9F22E0E5316",
  "this.overlay_629D3724_7476_5AED_41D7_B481CDD7AC3A",
  "this.overlay_65E53E08_74BB_4400_41D0_418E92077CC9",
  "this.overlay_6C5655B9_74EB_4403_41D6_182B72E61395"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.06,
  "pitch": 0
 },
 "id": "camera_79BD9F5F_7513_02FA_41D6_9312E23D9F2D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 14",
 "id": "panorama_7914105B_740A_775B_41B4_68424FFBA054",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 39.87,
   "yaw": 123.42,
   "panorama": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -95.54,
   "yaw": 66.65,
   "panorama": "this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -50.82,
   "yaw": -123.53,
   "panorama": "this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 54.69,
   "yaw": -61.98,
   "panorama": "this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_688E6D9D_74F7_4400_41AA_1CBAACA28ED9",
  "this.overlay_6D3370CC_74F4_FC00_41DC_973988BD86E8",
  "this.overlay_6EE75C6A_74FD_4401_41B0_E0C2F8CED47A",
  "this.overlay_6E524D12_74FC_C401_41DC_6C0888AAC7EF"
 ],
 "hfov": 360
},
{
 "class": "Panorama",
 "label": "view 15",
 "id": "panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 125.79,
   "yaw": -75.32,
   "panorama": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -129.1,
   "yaw": 66.82,
   "panorama": "this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_6CD4276E_74D7_4400_41C8_1C064BBD26F3",
  "this.overlay_631C3061_74D5_BC03_41D5_D0031836123C",
  "this.overlay_637F4F6A_74EB_4400_4175_75FBF6201463"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.9,
  "pitch": 0
 },
 "id": "camera_782A5FFB_7513_01BA_41BD_4D9EA7D77FAD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Menu",
 "fontFamily": "Arial",
 "selectedBackgroundColor": "#202020",
 "children": [
  {
   "class": "MenuItem",
   "label": "view 1",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "view 2",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "view 3",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "view 4",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "view 5",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "view 6",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "view 7",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "view 8",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "view 9",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "class": "MenuItem",
   "label": "view 10",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "class": "MenuItem",
   "label": "view 11",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "class": "MenuItem",
   "label": "view 12",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "class": "MenuItem",
   "label": "view 13",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "class": "MenuItem",
   "label": "view 14",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "class": "MenuItem",
   "label": "view 15",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "label": "Media",
 "fontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedFontColor": "#FFFFFF",
 "id": "Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "rollOverFontColor": "#FFFFFF",
 "backgroundColor": "#404040"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.21,
  "pitch": 0
 },
 "id": "camera_79874105_7513_1E4E_4132_88FF43427192",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.65,
  "pitch": 0
 },
 "id": "camera_78190FBD_7513_01BE_41C8_1C388B0A32AB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.18,
  "pitch": 0
 },
 "id": "camera_7953B097_7513_1E4A_41D4_3084BCD288A9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -113.18,
  "pitch": 0
 },
 "id": "camera_79E73163_7513_1ECB_41D4_CFF3602A29C7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "DirectionalPanoramaAudio",
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D",
 "maximumAngle": 360,
 "pitch": 0,
 "id": "audio_64CE28DB_74FE_059D_41D1_756FF77A0866",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 5",
 "id": "panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -90.87,
   "yaw": 179.94,
   "panorama": "this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12",
   "distance": 1
  }
 ],
 "vfov": 180,
 "audios": [
  "this.audio_7B47CC72_74FE_3CAE_41D8_88572B340BDA"
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_60D4F0EB_747A_577A_419E_FBA2A5BF61C0"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.12,
  "pitch": 0
 },
 "id": "camera_79EEDFAD_7513_025E_41B6_8AC9526CFDCD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 3",
 "id": "panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 90.65,
   "yaw": -0.38,
   "panorama": "this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 1.59,
   "yaw": 179.96,
   "panorama": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A",
   "distance": 1
  }
 ],
 "vfov": 180,
 "audios": [
  "this.audio_7B5AEDD1_74FE_1FED_41D6_8FA5CAA91C59"
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_67DA80A3_740A_F7EB_41B4_A4600B354EBE",
  "this.overlay_67EAAD9B_740A_49DB_41D6_745DA27F5B7F"
 ],
 "hfov": 360
},
{
 "class": "DirectionalPanoramaAudio",
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D",
 "maximumAngle": 360,
 "pitch": 0,
 "id": "audio_7B5B0A61_74FE_04AD_41B8_9DFA19B49A4D",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "buttonMoveRight": "this.IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveUp": "this.IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
 "buttonPlayLeft": "this.IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
 "buttonMoveDown": "this.IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4",
 "buttonRestart": "this.IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
 "buttonZoomOut": "this.IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
 "buttonPause": "this.IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
 "buttonMoveLeft": "this.IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
 "displayPlaybackBar": true,
 "buttonZoomIn": "this.IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84",
 "touchControlMode": "drag_rotation",
 "buttonPlayRight": "this.IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F"
},
{
 "class": "Panorama",
 "label": "view 1",
 "id": "panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 88.94,
   "yaw": -91.95,
   "panorama": "this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A",
   "distance": 1
  }
 ],
 "vfov": 180,
 "audios": [
  "this.audio_7B5B0A61_74FE_04AD_41B8_9DFA19B49A4D"
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_6599EB39_7419_CAE7_41D8_B1E217F30CFF"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.78,
  "pitch": 0
 },
 "id": "camera_7877E02A_7513_1E5A_41CD_84AD14627958",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "DirectionalPanoramaAudio",
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D",
 "maximumAngle": 360,
 "pitch": 0,
 "id": "audio_7B81DBBC_74E5_FB9B_41BF_ECDAEA5BC9E3",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "Panorama",
 "label": "view 9",
 "id": "panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.92,
   "yaw": -1.39,
   "panorama": "this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_677CE397_74AF_DC00_41C6_90E3857441F6",
  "this.overlay_60A28E6B_74AD_4400_41C8_3D48DFF5316C"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -125.31,
  "pitch": 0
 },
 "id": "camera_79553097_7513_1E4A_41A9_7FBA0FC72754",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 2",
 "id": "panorama_79674C4B_740A_4EBB_41BA_907DF78C518A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -91.95,
   "yaw": 88.94,
   "panorama": "this.panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 179.96,
   "yaw": 1.59,
   "panorama": "this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB",
   "distance": 1
  }
 ],
 "vfov": 180,
 "audios": [
  "this.audio_7B81DBBC_74E5_FB9B_41BF_ECDAEA5BC9E3"
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_65D0E348_741E_3AA5_41C9_AB9846372630",
  "this.overlay_673AC86F_741E_777B_41CF_DEFFB3261286"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.13,
  "pitch": 0
 },
 "id": "camera_78137163_7513_1ECB_41C2_79AE00BB47C3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.47,
  "pitch": 0
 },
 "id": "camera_783AEFEC_7513_01DD_41C0_FD666577ADD9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.19,
  "pitch": 0
 },
 "id": "camera_79A5A124_7513_1E4E_41D0_F651FC2872BD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "Panorama",
 "label": "view 12",
 "id": "panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -89.32,
   "yaw": -0.22,
   "panorama": "this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 124.42,
   "yaw": -53.03,
   "panorama": "this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 66.82,
   "yaw": -129.1,
   "panorama": "this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_79962F30_7513_0246_41C6_C56CB2923A91",
 "overlays": [
  "this.overlay_61F78BF9_74DB_CC00_41D2_F1F384317A11",
  "this.overlay_6161C2A0_74DC_DC00_41C9_2D09DF553A03",
  "this.overlay_617632E4_74DD_FC00_4173_B7E8206F9DCD"
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.02,
  "pitch": 0
 },
 "id": "camera_795980A7_7513_1E4A_41CE_920499DCD3E8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.62,
  "pitch": 0
 },
 "id": "camera_796420E6_7513_1FCD_41D1_75F1009A3600",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.64,
  "pitch": 0
 },
 "id": "camera_79FF6F9D_7513_027E_41D3_CBD57DD788D4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "DirectionalPanoramaAudio",
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D",
 "maximumAngle": 360,
 "pitch": 0,
 "id": "audio_7B28EFCE_74FE_7BF7_41C3_F9E31793661A",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.77,
  "pitch": 0
 },
 "id": "camera_797A60D6_7513_1FCA_41CE_794C78D8615F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.56,
  "pitch": 0
 },
 "id": "camera_7891F049_7513_1EC6_41D7_CCEAB9A36B04",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetPitch": 0
  }
 ],
 "id": "panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.05,
  "pitch": 0
 },
 "id": "camera_7989EF40_7513_02C6_41C4_0252166B92F3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "playbackBarBottom": 10,
 "progressBackgroundColorDirection": "vertical",
 "left": 0,
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "progressBorderColor": "#AAAAAA",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "transitionDuration": 500,
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadWidth": 6,
 "minHeight": 50,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeight": 20,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 4,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 10,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 2,
 "toolTipShadowOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "shadow": false,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "progressBottom": 1,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "progressHeight": 20,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "displayTooltipInTouchScreens": true,
 "paddingBottom": 0,
 "progressBorderRadius": 4,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarHeadHeight": 30,
 "paddingTop": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowBlurRadius": 3
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
  "this.IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
  "this.IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
  "this.IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
  "this.Container_52D2AE7E_5F01_65BC_41AC_A51A5F5534C5",
  "this.IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
  "this.IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
  "this.IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
  "this.IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84"
 ],
 "shadow": false,
 "borderSize": 0,
 "width": 392,
 "horizontalAlign": "center",
 "id": "Container_52D2AE7F_5F01_65BC_4192_E5EA29912157",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "minWidth": 392,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "gap": 4,
 "data": {
  "name": "Container8703"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "hidden"
},
{
 "propagateClick": false,
 "data": {
  "name": "DropDown1204"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "18.64%",
 "id": "DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1",
 "shadow": false,
 "right": "3.63%",
 "popUpBackgroundOpacity": 0.9,
 "arrowColor": "#8A8A8A",
 "fontFamily": "Arial",
 "popUpGap": 0,
 "selectedPopUpBackgroundColor": "#33CCFF",
 "popUpShadow": false,
 "backgroundColorDirection": "vertical",
 "paddingRight": 5,
 "fontColor": "#333333",
 "top": "9.4%",
 "minHeight": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#999999"
 ],
 "class": "DropDown",
 "playList": "this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist",
 "popUpFontColor": "#000000",
 "popUpShadowOpacity": 0,
 "height": "3.388%",
 "fontSize": 14,
 "minWidth": 200,
 "popUpBorderRadius": 0,
 "popUpShadowBlurRadius": 6,
 "popUpShadowColor": "#000000",
 "gap": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "popUpShadowSpread": 1,
 "paddingLeft": 5,
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 0.9,
 "borderRadius": 4,
 "fontWeight": "normal",
 "textDecoration": "none",
 "popUpBackgroundColor": "#FFFFFF"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "toggle",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8714"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E_pressed.png",
 "cursor": "hand"
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_7B81DBBC_74E5_FB9B_41BF_ECDAEA5BC9E3.ogg",
 "mp3Url": "media/audio_7B81DBBC_74E5_FB9B_41BF_ECDAEA5BC9E3.mp3",
 "id": "audioresource_7B5BEA61_74FE_04AD_41C1_3C058E94918D"
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.57,
   "yaw": -90.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -7.91
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62BBA9B8_747A_49E6_41C1_E660BC73E202",
   "pitch": -7.91,
   "yaw": -90.87,
   "hfov": 5.57,
   "distance": 100
  }
 ],
 "id": "overlay_67F94B68_740E_C965_41DA_70C216FD69CB",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF, this.camera_796DB0F5_7513_1FCE_41D6_2AE9C3873DDE); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.6,
   "yaw": 90.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.57
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62BB09B8_747A_49E6_41C3_5D6519352AAC",
   "pitch": -5.57,
   "yaw": 90.65,
   "hfov": 5.6,
   "distance": 100
  }
 ],
 "id": "overlay_607B97F0_740E_3965_41D5_D6B953748FB3",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB, this.camera_796420E6_7513_1FCD_41D1_75F1009A3600); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.6,
   "yaw": 0.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62BB59B8_747A_49E6_41DC_8AB197CA5B6C",
   "pitch": -5.48,
   "yaw": 0.36,
   "hfov": 5.6,
   "distance": 100
  }
 ],
 "id": "overlay_60A50F46_740A_4AAD_41C7_A30B3F3DE7FC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4, this.camera_79997105_7513_1E4E_41D1_6C70AD4A9BD1); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.48,
   "yaw": 54.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_618026CD_74B7_4400_41D5_5173F3DEC34C",
   "pitch": -13.15,
   "yaw": 54.69,
   "hfov": 5.48,
   "distance": 100
  }
 ],
 "id": "overlay_62CA59AD_740A_49FE_41DA_FFED766AB1EE",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7914105B_740A_775B_41B4_68424FFBA054, this.camera_795980A7_7513_1E4A_41CE_920499DCD3E8); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.25,
   "yaw": 179.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -5.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6183F6CD_74B7_4400_41D1_19E8692835A9",
   "pitch": -5.76,
   "yaw": 179.1,
   "hfov": 3.25,
   "distance": 100
  }
 ],
 "id": "overlay_66BF7634_74B7_4400_41A3_FC4A876B56BC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4, this.camera_7943F0B7_7513_1E4A_41D6_4A7AA1415DA6); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.54,
   "yaw": -89.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -10.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1CB7D8_74EB_4401_41C1_A7F768E38626",
   "pitch": -10.1,
   "yaw": -89.32,
   "hfov": 5.54,
   "distance": 100
  }
 ],
 "id": "overlay_60197A78_74AB_4C00_41C1_3422685F3043",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3, this.camera_7877E02A_7513_1E5A_41CD_84AD14627958); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.49,
   "yaw": -47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -12.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1C57D9_74EB_4403_41DC_F52020B68B1C",
   "pitch": -12.45,
   "yaw": -47,
   "hfov": 5.49,
   "distance": 100
  }
 ],
 "id": "overlay_6182D104_74AB_5C00_41C4_4993338827FE",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA, this.camera_7861D03A_7513_1EBA_41B3_E09FAFDF8F44); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.58,
   "yaw": 0.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -7.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F13C7D9_74EB_4403_41D5_D7F971470810",
   "pitch": -7.1,
   "yaw": 0.42,
   "hfov": 5.58,
   "distance": 100
  }
 ],
 "id": "overlay_6002C531_74D5_4400_41C4_F10A81746857",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4, this.camera_7891F049_7513_1EC6_41D7_CCEAB9A36B04); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.51,
   "yaw": 89.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_3_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -11.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1397D9_74EB_4403_41DA_C17866718121",
   "pitch": -11.77,
   "yaw": 89.23,
   "hfov": 5.51,
   "distance": 100
  }
 ],
 "id": "overlay_61D36BAE_74D5_4C00_41BD_324DA6FB2300",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4, this.camera_7844702A_7513_1E5A_41C6_7297C878B14A); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.51,
   "yaw": 39.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_4_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -11.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1337D9_74EB_4403_41D3_79332A1E195E",
   "pitch": -11.64,
   "yaw": 39.87,
   "hfov": 5.51,
   "distance": 100
  }
 ],
 "id": "overlay_606152D3_74D7_BC07_41D2_794098B0FC16",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7914105B_740A_775B_41B4_68424FFBA054, this.camera_78802049_7513_1EC6_41C8_AA4FA4AD5933); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.47,
   "yaw": -95.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -13.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F12C7D9_74EB_4403_41D0_403A203E746F",
   "pitch": -13.65,
   "yaw": -95.54,
   "hfov": 5.47,
   "distance": 100
  }
 ],
 "id": "overlay_6015CFB2_74D4_C400_4194_B9E8E10DF11A",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7914105B_740A_775B_41B4_68424FFBA054, this.camera_797150D6_7513_1FCA_41DA_53AB06EBB262); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.51,
   "yaw": 179.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -11.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1277D9_74EB_4403_41B4_166CFE7F48BE",
   "pitch": -11.41,
   "yaw": 179.87,
   "hfov": 5.51,
   "distance": 100
  }
 ],
 "id": "overlay_61603C0E_74D5_C401_41D2_D7D7F455D3F3",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208, this.camera_797A60D6_7513_1FCA_41CE_794C78D8615F); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.2,
   "yaw": -179.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -13.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_69BAF07A_74F4_DC00_41C8_F4A3BB946794",
   "pitch": -13.66,
   "yaw": -179.92,
   "hfov": 8.2,
   "distance": 100
  }
 ],
 "id": "overlay_66BCEB89_74B5_CC00_41BA_034B49A3EA5E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7, this.camera_79B9F124_7513_1E4E_41D7_3AA30C677DE1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.55,
   "yaw": 125.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -9.13
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1E47D8_74EB_4401_41AA_FBF4625BAB9C",
   "pitch": -9.13,
   "yaw": 125.79,
   "hfov": 5.55,
   "distance": 100
  }
 ],
 "id": "overlay_676D9BAD_74AB_4C00_41A3_19A186CEF440",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5, this.camera_79DD5143_7513_1ECA_41D7_140E9BEDAE57); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.4,
   "yaw": 51.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -16.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1E17D8_74EB_4401_41CF_E4B51DB9E046",
   "pitch": -16.17,
   "yaw": 51.93,
   "hfov": 5.4,
   "distance": 100
  }
 ],
 "id": "overlay_6662C191_74AC_DC00_41D9_15775275CBB8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA, this.camera_79A5A124_7513_1E4E_41D0_F651FC2872BD); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.58,
   "yaw": -0.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_3_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -7.62
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1DB7D8_74EB_4401_41D0_288639F9BD9F",
   "pitch": -7.62,
   "yaw": -0.35,
   "hfov": 5.58,
   "distance": 100
  }
 ],
 "id": "overlay_67CD4259_74AD_FC00_41C8_4D30244B159A",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4, this.camera_79D1D134_7513_1E4E_41C1_EC2C66142218); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.53,
   "yaw": 124.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -10.39
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1107DA_74EB_4401_41D6_FAEBD3B9A32A",
   "pitch": -10.39,
   "yaw": 124.42,
   "hfov": 5.53,
   "distance": 100
  }
 ],
 "id": "overlay_61651991_74DF_CC00_41CF_6F8EB5AE7C85",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3, this.camera_79DD4F7E_7513_02BA_41B1_3927C9CC785E); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.56,
   "yaw": -125.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -8.39
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F10D7DA_74EB_4401_41D9_643B65C87106",
   "pitch": -8.39,
   "yaw": -125.81,
   "hfov": 5.56,
   "distance": 100
  }
 ],
 "id": "overlay_62A58DFE_74DC_C400_41A2_1A089B8E29C1",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3, this.camera_79A8AF5F_7513_02FA_41C7_6E07691DA966); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.47,
   "yaw": -9.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_2_0_0_map.gif",
      "width": 44,
      "height": 16
     }
    ]
   },
   "pitch": -9.82
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1077DF_74EB_443F_41B2_220D88C4AB7F",
   "pitch": -9.82,
   "yaw": -9.88,
   "hfov": 6.47,
   "distance": 50
  }
 ],
 "id": "overlay_6297E98A_74DC_CC01_41CE_2C281650E1DD",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4, this.camera_79CFAF7E_7513_02BA_41D2_65CF391E4813); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.46,
   "yaw": 11.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_3_0_0_map.gif",
      "width": 44,
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1007E0_74EB_4401_41D2_E05670B650D7",
   "pitch": -10.11,
   "yaw": 11.21,
   "hfov": 6.46,
   "distance": 50
  }
 ],
 "id": "overlay_62E66A85_74DB_4C00_41D3_B9DE718050B5",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208, this.camera_79D1CF6F_7513_02DB_41D4_2C66B9BFC45E); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.56,
   "yaw": 0.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -8.42
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_63906B6E_740E_497D_41B7_357AAA38B408",
   "pitch": -8.42,
   "yaw": 0.44,
   "hfov": 5.56,
   "distance": 100
  }
 ],
 "id": "overlay_6298CA81_747A_4BA7_41B3_DD6C45DB8C06",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208, this.camera_78088FDC_7513_01FE_41B3_74367B368205); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.52,
   "yaw": -179.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -11.28
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6390BB6E_740E_497D_41B9_4166F2625C07",
   "pitch": -11.28,
   "yaw": -179.8,
   "hfov": 5.52,
   "distance": 100
  }
 ],
 "id": "overlay_623A1F0F_747A_4ABB_41B7_66DFC2637F9D",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12, this.camera_79FF6F9D_7513_027E_41D3_CBD57DD788D4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.55,
   "yaw": 89.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -9.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_63912B6E_740E_497D_41D2_347DEB7AD35F",
   "pitch": -9.14,
   "yaw": 89.96,
   "hfov": 5.55,
   "distance": 100
  }
 ],
 "id": "overlay_6234F9A6_7476_49ED_41B4_A9F22E0E5316",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3, this.camera_78190FBD_7513_01BE_41C8_1C388B0A32AB); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.53,
   "yaw": -90.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -10.68
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_63916B6F_740E_497B_41D1_043BB043DEF3",
   "pitch": -10.68,
   "yaw": -90.13,
   "hfov": 5.53,
   "distance": 100
  }
 ],
 "id": "overlay_629D3724_7476_5AED_41D7_B481CDD7AC3A",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094, this.camera_782A5FFB_7513_01BA_41BD_4D9EA7D77FAD); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.87,
   "yaw": 33.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_5_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -12.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62E07144_74B5_FC00_41B9_BBF02FB0B1D4",
   "pitch": -12.45,
   "yaw": 33.28,
   "hfov": 6.87,
   "distance": 50
  }
 ],
 "id": "overlay_65E53E08_74BB_4400_41D0_418E92077CC9",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA, this.camera_79EEDFAD_7513_025E_41B6_8AC9526CFDCD); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.49,
   "yaw": -50.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_6_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -12.75
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_63205DB2_74F4_C400_41D3_72039F909AF0",
   "pitch": -12.75,
   "yaw": -50.82,
   "hfov": 5.49,
   "distance": 100
  }
 ],
 "id": "overlay_6C5655B9_74EB_4403_41D6_182B72E61395",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7914105B_740A_775B_41B4_68424FFBA054, this.camera_783AEFEC_7513_01DD_41C0_FD666577ADD9); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.2,
   "yaw": -61.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -13.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6E0B1402_74FD_4400_41C6_5B1D493B1BED",
   "pitch": -13.6,
   "yaw": -61.98,
   "hfov": 8.2,
   "distance": 100
  }
 ],
 "id": "overlay_688E6D9D_74F7_4400_41AA_1CBAACA28ED9",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796B0C40_740A_CEA5_41C9_728937CAC094, this.camera_79553097_7513_1E4A_41A9_7FBA0FC72754); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.21,
   "yaw": 66.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_3_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -13.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6E0BF402_74FD_4400_41D1_C5720D2A12DE",
   "pitch": -13.35,
   "yaw": 66.65,
   "hfov": 8.21,
   "distance": 100
  }
 ],
 "id": "overlay_6D3370CC_74F4_FC00_41DC_973988BD86E8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796B52F3_740A_3B69_41D3_4ED0153768F4, this.camera_78A31069_7513_1EC7_41D9_268043F89B62); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.25,
   "yaw": 123.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_4_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -12.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D168DBA_74FF_C400_41CB_B6F619165569",
   "pitch": -12.1,
   "yaw": 123.42,
   "hfov": 8.25,
   "distance": 100
  }
 ],
 "id": "overlay_6EE75C6A_74FD_4401_41B0_E0C2F8CED47A",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208, this.camera_78B38059_7513_1EC6_41C2_A5F899062401); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.19,
   "yaw": -123.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_5_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -13.85
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D16ADBB_74FF_C400_41BD_0898F87B9860",
   "pitch": -13.85,
   "yaw": -123.53,
   "hfov": 8.19,
   "distance": 100
  }
 ],
 "id": "overlay_6E524D12_74FC_C401_41DC_6C0888AAC7EF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4, this.camera_7953B097_7513_1E4A_41D4_3084BCD288A9); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.12,
   "yaw": -75.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -15.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6E555F0C_74F4_C400_41D4_867E9A96352D",
   "pitch": -15.84,
   "yaw": -75.32,
   "hfov": 8.12,
   "distance": 50
  }
 ],
 "id": "overlay_6CD4276E_74D7_4400_41C8_1C064BBD26F3",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3, this.camera_79874105_7513_1E4E_4132_88FF43427192); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.1,
   "yaw": 66.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -16.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6E55BF0C_74F4_C400_41C3_FB7594C5F912",
   "pitch": -16.27,
   "yaw": 66.82,
   "hfov": 8.1,
   "distance": 50
  }
 ],
 "id": "overlay_631C3061_74D5_BC03_41D5_D0031836123C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3, this.camera_79B39114_7513_1E4E_41B1_63267BEDEEA6); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.57,
   "yaw": 0.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -8.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1627E0_74EB_4401_41DB_D0C4A7581FB4",
   "pitch": -8.17,
   "yaw": 0.04,
   "hfov": 5.57,
   "distance": 100
  }
 ],
 "id": "overlay_637F4F6A_74EB_4400_4175_75FBF6201463",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.6,
   "yaw": 179.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.53
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_66DADE95_74AD_4400_41D3_5CAD964A3DB1",
   "pitch": -5.53,
   "yaw": 179.94,
   "hfov": 5.6,
   "distance": 100
  }
 ],
 "id": "overlay_60D4F0EB_747A_577A_419E_FBA2A5BF61C0",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12, this.camera_78137163_7513_1ECB_41C2_79AE00BB47C3); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.6,
   "yaw": -0.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6D73D71E_7479_DADD_41D9_82E5C742761F",
   "pitch": -5.35,
   "yaw": -0.38,
   "hfov": 5.6,
   "distance": 100
  }
 ],
 "id": "overlay_67DA80A3_740A_F7EB_41B4_A4600B354EBE",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12, this.camera_794440B7_7513_1E4A_41CD_2E7EC1BE0B27); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.59,
   "yaw": 179.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -6.28
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_665ABD30_74B7_4400_41D9_CC08F3AC4670",
   "pitch": -6.28,
   "yaw": 179.96,
   "hfov": 5.59,
   "distance": 100
  }
 ],
 "id": "overlay_67EAAD9B_740A_49DB_41D6_745DA27F5B7F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A, this.camera_794E80C6_7513_1FCA_41B4_6B8EA05CD202); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8712"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8709"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8706"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8711"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8705"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8704"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "toggle",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8710"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2_pressed.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8707"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8715"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_rollover.png",
 "cursor": "hand"
},
{
 "propagateClick": false,
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "id": "IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "height": 40,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F.png",
 "minWidth": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button8713"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_pressed.png",
 "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_rollover.png",
 "cursor": "hand"
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.6,
   "yaw": -91.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.34
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_60B19854_7419_F6AE_41D5_E509E1AB11C4",
   "pitch": -5.34,
   "yaw": -91.95,
   "hfov": 5.6,
   "distance": 100
  }
 ],
 "id": "overlay_6599EB39_7419_CAE7_41D8_B1E217F30CFF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79674C4B_740A_4EBB_41BA_907DF78C518A, this.camera_79BD9F5F_7513_02FA_41D6_9312E23D9F2D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.87,
   "yaw": -1.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -12.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6AF0E7C1_74F5_4400_41C8_26195AFD1C5B",
   "pitch": -12.25,
   "yaw": -1.39,
   "hfov": 6.87,
   "distance": 100
  }
 ],
 "id": "overlay_677CE397_74AF_DC00_41C6_90E3857441F6",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796795FA_740A_F965_41CC_3EFDCC6972C3, this.camera_785A301A_7513_1E7A_41BC_DDE6184EF261); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.5,
   "yaw": 56.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -12.11
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1D17D8_74EB_4401_41D4_4D6C2983DA8E",
   "pitch": -12.11,
   "yaw": 56.03,
   "hfov": 5.5,
   "distance": 100
  }
 ],
 "id": "overlay_60A28E6B_74AD_4400_41C8_3D48DFF5316C",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.6,
   "yaw": 1.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -5.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61F1DF78_7416_4965_41D8_ED3B4B817D74",
   "pitch": -5.65,
   "yaw": 1.59,
   "hfov": 5.6,
   "distance": 100
  }
 ],
 "id": "overlay_65D0E348_741E_3AA5_41C9_AB9846372630",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB, this.camera_79B44F4F_7513_02DA_41DB_7377C158B00B); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.57,
   "yaw": 88.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -8.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61F10F78_7416_4965_41D1_7DB3D3952B68",
   "pitch": -8.14,
   "yaw": 88.94,
   "hfov": 5.57,
   "distance": 100
  }
 ],
 "id": "overlay_673AC86F_741E_777B_41CF_DEFFB3261286",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3, this.camera_7989EF40_7513_02C6_41C4_0252166B92F3); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.55,
   "yaw": -129.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -9.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1237DA_74EB_4401_41CC_74A785335E94",
   "pitch": -9.16,
   "yaw": -129.1,
   "hfov": 5.55,
   "distance": 100
  }
 ],
 "id": "overlay_61F78BF9_74DB_CC00_41D2_F1F384317A11",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5, this.camera_79E73163_7513_1ECB_41D4_CFF3602A29C7); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.4,
   "yaw": -53.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -16.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F11D7DA_74EB_4401_41D4_73B9069D0861",
   "pitch": -16.15,
   "yaw": -53.03,
   "hfov": 5.4,
   "distance": 100
  }
 ],
 "id": "overlay_6161C2A0_74DC_DC00_41C9_2D09DF553A03",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA, this.camera_79FA2153_7513_1ECA_41DA_DA83A5B0AFC3); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.58,
   "yaw": -0.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -7.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F1167DA_74EB_4401_41BD_3B48AB60C222",
   "pitch": -7.59,
   "yaw": -0.22,
   "hfov": 5.58,
   "distance": 100
  }
 ],
 "id": "overlay_617632E4_74DD_FC00_4173_B7E8206F9DCD",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_796D0969_740A_C967_41D3_F6FA6F77A208, this.camera_79CE5143_7513_1ECA_41DA_8E2486606337); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
  "this.IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
  "this.IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4"
 ],
 "shadow": false,
 "borderSize": 0,
 "width": 40,
 "horizontalAlign": "center",
 "id": "Container_52D2AE7E_5F01_65BC_41AC_A51A5F5534C5",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "class": "Container",
 "contentOpaque": false,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "gap": 4,
 "data": {
  "name": "Container8708"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "hidden"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_62BBA9B8_747A_49E6_41C1_E660BC73E202",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_62BB09B8_747A_49E6_41C3_5D6519352AAC",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_62BB59B8_747A_49E6_41DC_8AB197CA5B6C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796DFF5E_740A_495D_41D3_4FD45CAEFB12_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_618026CD_74B7_4400_41D5_5173F3DEC34C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6183F6CD_74B7_4400_41D1_19E8692835A9",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B0C40_740A_CEA5_41C9_728937CAC094_0_HS_2_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1CB7D8_74EB_4401_41C1_A7F768E38626",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_0_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1C57D9_74EB_4403_41DC_F52020B68B1C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_1_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F13C7D9_74EB_4403_41D5_D7F971470810",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_2_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1397D9_74EB_4403_41DA_C17866718121",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_3_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1337D9_74EB_4403_41D3_79332A1E195E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D0969_740A_C967_41D3_F6FA6F77A208_0_HS_4_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F12C7D9_74EB_4403_41D0_403A203E746F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0_HS_0_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1277D9_74EB_4403_41B4_166CFE7F48BE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B52F3_740A_3B69_41D3_4ED0153768F4_0_HS_1_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_69BAF07A_74F4_DC00_41C8_F4A3BB946794",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_0_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1E47D8_74EB_4401_41AA_FBF4625BAB9C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_1_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1E17D8_74EB_4401_41CF_E4B51DB9E046",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_2_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1DB7D8_74EB_4401_41D0_288639F9BD9F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796795FA_740A_F965_41CC_3EFDCC6972C3_0_HS_3_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1107DA_74EB_4401_41D6_FAEBD3B9A32A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_0_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F10D7DA_74EB_4401_41D9_643B65C87106",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_1_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1077DF_74EB_443F_41B2_220D88C4AB7F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_2_0.png",
   "width": 560,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1007E0_74EB_4401_41D2_E05670B650D7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79689680_740A_5BA5_41D5_C2EBCA5975DA_0_HS_3_0.png",
   "width": 560,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_63906B6E_740E_497D_41B7_357AAA38B408",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6390BB6E_740E_497D_41B9_4166F2625C07",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_63912B6E_740E_497D_41D2_347DEB7AD35F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_63916B6F_740E_497B_41D1_043BB043DEF3",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_3_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_62E07144_74B5_FC00_41B9_BBF02FB0B1D4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_5_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_63205DB2_74F4_C400_41D3_72039F909AF0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796D32AC_740A_DBFD_41D9_5982CE3EABE4_0_HS_6_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6E0B1402_74FD_4400_41C6_5B1D493B1BED",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_2_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6E0BF402_74FD_4400_41D1_C5720D2A12DE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_3_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6D168DBA_74FF_C400_41CB_B6F619165569",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_4_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6D16ADBB_74FF_C400_41BD_0898F87B9860",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7914105B_740A_775B_41B4_68424FFBA054_0_HS_5_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6E555F0C_74F4_C400_41D4_867E9A96352D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6E55BF0C_74F4_C400_41C3_FB7594C5F912",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0_HS_1_0.png",
   "width": 560,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1627E0_74EB_4401_41DB_D0C4A7581FB4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_797B9A5A_740A_4AA5_41C6_DCB3CFB7FDD5_0_HS_2_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_66DADE95_74AD_4400_41D3_5CAD964A3DB1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796CF8F6_740A_376B_41D1_7E538B93E5AF_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6D73D71E_7479_DADD_41D9_82E5C742761F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_665ABD30_74B7_4400_41D9_CC08F3AC4670",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B25CB_740A_59BB_41DB_902A63E4C7FB_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_60B19854_7419_F6AE_41D5_E509E1AB11C4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79FA3252_740A_7AA5_41D7_9F65BC3FF4D3_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6AF0E7C1_74F5_4400_41C8_26195AFD1C5B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0_HS_0_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1D17D8_74EB_4401_41D4_4D6C2983DA8E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796A1FB2_740A_C9E5_41C3_48472D5A61C7_0_HS_1_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_61F1DF78_7416_4965_41D8_ED3B4B817D74",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_61F10F78_7416_4965_41D1_7DB3D3952B68",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79674C4B_740A_4EBB_41BA_907DF78C518A_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1237DA_74EB_4401_41CC_74A785335E94",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0_HS_0_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F11D7DA_74EB_4401_41D4_73B9069D0861",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0_HS_1_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_6F1167DA_74EB_4401_41BD_3B48AB60C222",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79691CC4_740A_4FAD_41B3_B178F77C24C3_0_HS_2_0.png",
   "width": 480,
   "height": 330
  }
 ],
 "colCount": 4
}],
 "children": [
  "this.MainViewer",
  {
   "propagateClick": false,
   "children": [
    "this.Container_52D2AE7F_5F01_65BC_4192_E5EA29912157"
   ],
   "shadow": false,
   "left": "0%",
   "borderSize": 0,
   "verticalAlign": "middle",
   "horizontalAlign": "center",
   "scrollBarWidth": 10,
   "width": "100%",
   "scrollBarOpacity": 0.5,
   "paddingRight": 0,
   "scrollBarColor": "#000000",
   "minHeight": 1,
   "bottom": "0%",
   "height": 142,
   "class": "Container",
   "contentOpaque": false,
   "scrollBarVisible": "rollOver",
   "minWidth": 1,
   "scrollBarMargin": 2,
   "paddingBottom": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "gap": 10,
   "data": {
    "name": "Container44746"
   },
   "backgroundOpacity": 0,
   "borderRadius": 0,
   "layout": "horizontal",
   "overflow": "scroll"
  },
  "this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1"
 ],
 "borderSize": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "shadow": false,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "start": "this.playAudioList([this.audio_661FF857_74E6_0495_419A_AA3C08EAC89C]); this.init(); this.syncPlaylists([this.DropDown_7B560666_7416_7B6D_419C_E1DEA14230B1_playlist,this.mainPlayList])",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "downloadEnabled": false,
 "contentOpaque": false,
 "height": "100%",
 "defaultVRPointer": "laser",
 "minWidth": 20,
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
 "gap": 10,
 "borderRadius": 0,
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "data": {
  "name": "Player43899"
 },
 "backgroundPreloadEnabled": true,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
