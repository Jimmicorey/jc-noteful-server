function makeNoteArray() {
  return [
    {
      id: 1,
      name: 'note1',
      content:'this is the folder1',
      folderid:1,
      modified:'2029-01-22T16:28:32.615Z'
    },
    {
      id: 2,
      name: 'note2',
      content:'this is the note in folder1',
      folderid:1,
      modified:'2029-01-22T16:28:32.615Z'
    },
    {
      id: 3,
      name: 'note3',
      content:'this is the folder2',
      folderid:2,
      modified:'2029-01-22T16:28:32.615Z'
    },
    {
      id: 4,
      name: 'note4',
      content:'this is the note in folder1',
      folderid:1,
      modified:'2029-01-22T16:28:32.615Z'
    }
  ];
}
  
module.exports = {
  makeNoteArray
};