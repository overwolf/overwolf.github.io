// const fs = require('fs'); // filesystem
// const path = require('path');
// const paths = ['../website/pages/docs'];

// const regex = /id: ([-\w]*)/gms;

// const readRecursive = function (dir) {
//   const files = fs.readdirSync(dir);
//   files.forEach((name) => {
//     const file = path.resolve(dir, name);
//     return fs.stat(file, function (error, stat) {
//       if (error) {
//         return console.log(error);
//       }

//       if (stat) {
//         if (file.endsWith('.mdx')) {
//           fs.readFile(file, 'utf8', function (error, data) {
//             if (error) {
//               return console.log(error);
//             }

//             const id = data.match(regex)[0].replace('id: ', '');
//             const hi = name.replace('.mdx', '');
//             if (hi != id) {
//               console.log(`${hi} vs ${id}`);
//             }
//           });
//         } else {
//           readRecursive(file);
//         }
//       }
//     });
//   });
// };

// readRecursive(paths[0]);
