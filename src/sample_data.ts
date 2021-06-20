export interface Data {
  id: number;
  x: number;
  y: number;
  description: String | null;
  image_id: String;
  image_full: String;
  image_preview: String;
  taken_time: String;
  created_at: String;
  updated_at: String;
  image_type: String;
  rotation: number;
  uuid: String;
  image_file_name: String;
  image_content_type: String;
  image_file_size: number;
  image_updated_at: String;
  sharing_token?: String;
  url?: String;
}

export const sampleData: Data[] = [
  {
    id: 16259,
    x: 0.289774088050314,
    y: 0.418134671813484,
    image_id: "InWallMEP.PNG1495000835566",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/1dfdeab8-d849-4b04-a84d-bce508a9709c.jpg",
    image_preview:
      "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/1dfdeab8-d849-4b04-a84d-bce508a9709c.jpg?1495000836",
    taken_time: "2017-04-04 11:02:16 UTC",
    created_at: "2017-05-17 06:00:35 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    description: null,
    image_type: "flat",
    rotation: 270.0,
    uuid: "849d10fc-a278-4d38-9602-2bf0a091a873",
    image_file_name: "1dfdeab8-d849-4b04-a84d-bce508a9709c.jpg",
    image_content_type: "image/png",
    image_file_size: 1841240,
    image_updated_at: "2017-05-17 06:00:36 UTC"
  },
  {
    id: 16257,
    x: 0.564633333333333,
    y: 0.576520990711122,
    description: "Sample pin",
    image_id: "InSlabMEP.jpg1495000832711",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/7847c821-eefb-4079-84c6-208792d5af79.jpg",
    image_preview:
      "//d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/7847c821-eefb-4079-84c6-208792d5af79.jpg?1495000833",
    taken_time: "2017-04-04 11:02:12 UTC",
    created_at: "2017-05-17 06:00:32 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    image_type: "flat",
    rotation: 0.0,
    uuid: "bbc53cf6-4300-4de7-9fe8-43a82349346c",
    image_file_name: "7847c821-eefb-4079-84c6-208792d5af79.jpg",
    image_content_type: "image/jpeg",
    image_file_size: 378197,
    image_updated_at: "2017-05-17 06:00:33 UTC"
  },
  {
    id: 16264,
    x: 0.369319916142558,
    y: 0.810527559055118,
    image_id: "InWallMEP.PNG1495000845561",
    taken_time: "2017-04-04 11:02:16 UTC",
    created_at: "2017-05-17 06:00:45 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    description: null,
    image_type: "flat",
    rotation: 0.0,
    uuid: "16fc8e95-fb81-4307-9394-86a1d651192a",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/2069ce2d-c57f-4099-88b1-bbe9bcd3cd38.jpg",
    image_preview:
      "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/2069ce2d-c57f-4099-88b1-bbe9bcd3cd38.jpg?1495000846",
    image_file_name: "2069ce2d-c57f-4099-88b1-bbe9bcd3cd38.jpg",
    image_content_type: "image/png",
    image_file_size: 1841240,
    image_updated_at: "2017-05-17 06:00:46 UTC"
  },
  {
    id: 16263,
    x: 0.579548176100629,
    y: 0.814934081262303,
    description: "Sample pin",
    image_id: "InWallMEP.PNG1495000843753",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/99fb4def-9b74-40a7-8ca7-aae551a2214a.jpg",
    image_preview:
      "//d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/99fb4def-9b74-40a7-8ca7-aae551a2214a.jpg?1495000844",
    taken_time: "2017-04-04 11:02:16 UTC",
    created_at: "2017-05-17 06:00:43 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    image_type: "flat",
    rotation: 0.0,
    image_file_name: "99fb4def-9b74-40a7-8ca7-aae551a2214a.jpg",
    image_content_type: "image/png",
    image_file_size: 1841240,
    image_updated_at: "2017-05-17 06:00:44 UTC",
    uuid: "667d36e5-27be-4cd4-b7d3-e1de947692cd"
  },
  {
    id: 16262,
    x: 0.690344150943396,
    y: 0.650217519685039,
    description: "Sample pin",
    image_id: "InWallMEP.PNG1495000841794",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/ba543375-f99f-4eda-93e0-1987cf9d7a4c.jpg",
    taken_time: "2017-04-04 11:02:16 UTC",
    created_at: "2017-05-17 06:00:41 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    image_type: "flat",
    rotation: 90.0,
    image_file_name: "ba543375-f99f-4eda-93e0-1987cf9d7a4c.jpg",
    image_content_type: "image/png",
    image_file_size: 1841240,
    image_updated_at: "2017-05-17 06:00:42 UTC",
    image_preview:
      "//d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/ba543375-f99f-4eda-93e0-1987cf9d7a4c.jpg?1495000842",
    uuid: "3f3ae697-ac41-4976-bd22-ce55fdf28447"
  },
  {
    id: 16261,
    x: 0.693540188679245,
    y: 0.419801896222933,
    description: null,
    image_id: "InWallMEP.PNG1495000839821",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/2a121e9d-4c1b-42b3-8bb5-39eaf23e88d0.jpg",
    image_preview:
      "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/2a121e9d-4c1b-42b3-8bb5-39eaf23e88d0.jpg?1495000840",
    taken_time: "2017-04-04 11:02:16 UTC",
    created_at: "2017-05-17 06:00:39 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    image_type: "flat",
    image_file_name: "2a121e9d-4c1b-42b3-8bb5-39eaf23e88d0.jpg",
    image_content_type: "image/png",
    image_file_size: 1841240,
    image_updated_at: "2017-05-17 06:00:40 UTC",
    rotation: 90.0,
    uuid: "e7c3a199-50e3-4d2f-b62a-fd796b46d97b"
  },
  {
    id: 16260,
    x: 0.284447358490566,
    y: 0.653213313545768,
    image_id: "InWallMEP.PNG1495000837805",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/eb5afacd-7070-4426-a881-a4ea2be08ba0.jpg",
    image_preview:
      "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/eb5afacd-7070-4426-a881-a4ea2be08ba0.jpg?1495000838",
    taken_time: "2017-04-04 11:02:16 UTC",
    created_at: "2017-05-17 06:00:37 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    description: null,
    image_type: "flat",
    rotation: 270.0,
    uuid: "16f272a2-127d-4c76-be3b-28f8c4beebb1",
    image_file_name: "eb5afacd-7070-4426-a881-a4ea2be08ba0.jpg",
    image_content_type: "image/png",
    image_file_size: 1841240,
    image_updated_at: "2017-05-17 06:00:38 UTC",
    sharing_token: "630c24acd48a4c0af7420c54cf7b40a5a259f6410fbc34bb807a245d43bb624e"
  },
  {
    id: 16258,
    x: 0.413354213836478,
    y: 0.589858785986713,
    image_id: "InSlabMEP.jpg1495000834123",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/2df56474-c099-4e0f-af04-609e73f39ce8.jpg",
    image_preview:
      "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/2df56474-c099-4e0f-af04-609e73f39ce8.jpg?1495000834",
    taken_time: "2017-04-04 11:02:12 UTC",
    created_at: "2017-05-17 06:00:34 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    description: null,
    image_type: "flat",
    rotation: 0.0,
    uuid: "6aa18512-ac20-4063-b588-9afe01e8b136",
    image_file_name: "2df56474-c099-4e0f-af04-609e73f39ce8.jpg",
    image_content_type: "image/jpeg",
    image_file_size: 378197,
    image_updated_at: "2017-05-17 06:00:34 UTC"
  },
  {
    id: 16256,
    x: 0.568894716981132,
    y: 0.31143230960876,
    image_id: "InSlabMEP.jpg1495000831173",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/9b001ff1-c059-4169-b329-235b63da9e8a.jpg",
    image_preview:
      "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/9b001ff1-c059-4169-b329-235b63da9e8a.jpg?1495000831",
    taken_time: "2017-04-04 11:02:12 UTC",
    created_at: "2017-05-17 06:00:31 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    description: null,
    image_type: "flat",
    rotation: 0.0,
    url:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/9b001ff1-c059-4169-b329-235b63da9e8a.jpg",
    uuid: "0410f798-3418-4dc1-820f-67554df76c3d",
    image_file_name: "9b001ff1-c059-4169-b329-235b63da9e8a.jpg",
    image_content_type: "image/jpeg",
    image_file_size: 378197,
    image_updated_at: "2017-05-17 06:00:31 UTC"
  },
  {
    id: 16255,
    x: 0.416550251572327,
    y: 0.305649124938484,
    image_id: "InSlabMEP.jpg1495000828654",
    image_full:
      "https://constructive-production.s3-us-west-1.amazonaws.com/photos/4cb9469f-c48d-4556-8b0a-e3e2dcef2a5b.jpg",
    image_preview:
      "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/4cb9469f-c48d-4556-8b0a-e3e2dcef2a5b.jpg?1495000829",
    taken_time: "2017-04-04 11:02:12 UTC",
    created_at: "2017-05-17 06:00:28 UTC",
    updated_at: "2017-10-31 21:03:39 UTC",
    image_type: "flat",
    description: null,
    rotation: 0.0,
    uuid: "10077b16-76d6-4393-91e3-fbd623dcb7ef",
    image_file_name: "4cb9469f-c48d-4556-8b0a-e3e2dcef2a5b.jpg",
    image_content_type: "image/jpeg",
    image_file_size: 378197,
    image_updated_at: "2017-05-17 06:00:29 UTC"
  }
];
