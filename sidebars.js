module.exports = {
  someSidebar: {
    Hardware: ['mdx'],
    Images: [
      'doc1',
      'doc2',
      'doc3',
      {
        type: 'category',
        label: 'macOS',
        items: ['doc1', 'doc2'],
      },
    ],
    Software: ['doc1']
  },
  imageSidebar: {
    Images: [
      'images',
      {
        type: 'category',
        label: 'macOS',
        items: [
          'image-mac-admin',
          'image-mac-art',
          'image-mac-artcheckouts',
          'image-mac-artfoundations',
          'image-mac-biology',
          'image-mac-communicationstudies',
          'image-mac-computerscience',
          'image-mac-digitalmedia',
          'image-mac-dimedenver',
          'image-mac-facultylab',
          'image-mac-generallabs',
          'image-mac-journalism',
          'image-mac-metmedia',
          'image-mac-music',
          'image-mac-photography',
          'image-mac-recordingbooth',
          'image-mac-technicalcommunication',
          'image-mac-theatre'
        ],
      },
      {
        type: 'category',
        label: 'Windows',
        items: [
          'image-win-accesscenter',
          'image-win-admin',
          'image-win-chemistry',
          'image-win-collegeofbusiness',
          'image-win-facultylab',
          'image-win-generallabs',
          'image-win-humanperformanceandsport',
          'image-win-nursing',
          'image-win-schoolofeducation'
        ],
      },
    ],
  }
};
