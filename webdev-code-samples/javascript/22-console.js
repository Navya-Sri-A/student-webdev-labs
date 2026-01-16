const consoleMethods = function printConsoleMethods() {
  // console.log
  console.log('This is a console log statement');

  // console.info ==> Displays a message with the
  // info log level
  console.info('This is a console info statement');

  // console.warn ==> Displays a message with the
  // warning log level (yellow)
  console.warn('This is a console warning statement');

  // console.error ==> Displays a message with the
  // error log level (red)
  console.error('This is a console error statement');

  // console.table ==> Displays tabular data as a table
  console.table([
    'Great Pyramid of Giza',
    'Hanging Gardens of Babylon',
    'Statue of Zeus at Olympia',
    'Temple of Artemis at Ephesus',
    'Mausoleum at Halicarnassus',
    'Colossus of Rhodes',
    'Lighthouse of Alexandria',
  ]);

  // console.dir ==> Displays an interactive listing of
  // the properties of a specified JavaScript object
  console.dir([
    { id: 1, wonder: 'Great Pyramid of Giza', location: 'Egypt' },
    { id: 2, wonder: 'Hanging Gardens of Babylon', location: 'Iraq' },
    { id: 3, wonder: 'Statue of Zeus at Olympia', location: 'Greece' },
    { id: 4, wonder: 'Temple of Artemis at Ephesus', location: 'Turkey' },
    { id: 5, wonder: 'Mausoleum at Halicarnassus', location: 'Turkey' },
    { id: 6, wonder: 'Colossus of Rhodes', location: 'Greece' },
    { id: 7, wonder: 'Lighthouse of Alexandria', location: 'Egypt' },
  ]);

  // console.trace ==> Outputs a stack trace
  console.trace();
};

consoleMethods();
