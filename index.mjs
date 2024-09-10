import "./styles.css";
const rive = require("@rive-app/canvas");

// ---------------------------------
// The layout of the graphic will adhere to
const layout = new rive.Layout({
  fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
  alignment: rive.Alignment.Center,
});

// ---------------------------------
// HTML Canvas element to render to
const riveCanvas = document.getElementById("rive-canvas");

// ---------------------------------
// Re-adjust the rendering surface if the window resizes
window.addEventListener(
  "resize",
  () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
  false
);

// ---------------------------------
// Cleanup Rive
//
// When creating a Rive instance, you need to ensure that it gets cleaned up.
// This should happen in scenarios where you no longer want to show the Rive canvas,
// for example, where:
// - UI with Rive Animations is no longer necessary (i.e. a modal with Rive graphics is closed)
// - The animation or state machine has completed and will no longer ever be run/shown

// NOTE: This function is not called in this example.
function cleanUpRive() {
  riveInstance.cleanup();
}

// -------------------------------------------------------
// ---- [START - OPTION 1]
// ---- LOCAL RIVE EXAMPLE
// Loads a .riv file from local resources.
// Set this as the src attribute when creating a new Rive instance.

// --[EXAMPLE FROM HERE]
const riveInstance = new rive.Rive({
  // Load a local riv `clean_the_car.riv` or upload your own!
  src: "clean_the_car.riv",
  // Be sure to specify the correct state machine (or animation) name
  stateMachines: "Motion", // Name of the State Machine to play
  canvas: riveCanvas,
  // artboard: "Artboard" // Optionally provide the artboard to display
  layout: layout, // This is optional. Provides additional layout control.
  autoplay: true,
  onLoad: () => {
    // Prevent a blurry canvas by using the device pixel ratio
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
});
// --[EXAMPLE TO HERE]

// ---- [END - OPTION 1]
// ---- LOCAL RIVE EXAMPLE

// -------------------------------------------------------
// ---- [START - OPTION 2]
// ---- HOSTED RIVE EXAMPLE
// Use a string representing the URL where the .riv file is hosted.
// Set this as the src attribute when creating a new Rive instance.

// --[EXAMPLE FROM HERE]
// const riveInstance = new rive.Rive({
//   // Hosted .riv asset.
//   src: "https://cdn.rive.app/animations/vehicles.riv",
//   stateMachines: "bumpy",
//   canvas: riveCanvas,
//   autoplay: true,
//   onLoad: () => {
//     riveInstance.resizeDrawingSurfaceToCanvas();
//   },
// });
// --[EXAMPLE TO HERE]

// ---- [END - OPTION 2]
// ---- HOSTED RIVE EXAMPLE

// -------------------------------------------------------
// ---- [START - OPTION 3]
// ---- BUFFER RIVE EXAMPLE
// Use the buffer attribute to load an ArrayBuffer when fetching a file
// This is useful when reusing the same .riv file across multiple
// Rive instances, allowing you to download the binary data only once,
// or retrieving it in some other way.

// --[EXAMPLE FROM HERE]
// async function loadRiveFileBuffer(url) {
//   return await (await fetch(new Request(url))).arrayBuffer();
// }

// async function bufferExample() {
//   const buffer = await loadRiveFileBuffer(
//     "https://cdn.rive.app/animations/vehicles.riv"
//   );

//   const riveInstance = new rive.Rive({
//     // Buffer .riv asset.
//     buffer: buffer,
//     stateMachines: "bumpy",
//     canvas: riveCanvas,
//     autoplay: true,
//     onLoad: () => {
//       riveInstance.resizeDrawingSurfaceToCanvas();
//     },
//   });
// }

// bufferExample();
// --[EXAMPLE TO HERE]

// ---- [END - OPTION 3]
// ---- BUFFER RIVE EXAMPLE

// -------------------------------------------------------
// ---- [START - OPTION 4]
// ---- PARSED RIVE FILE EXAMPLE
// Use the riveFile parameter to reuse a previously loaded (parsed) Rive runtime file object,
// including any loaded assets. This is the most efficient option if the same Rive File is
// used in multiple places on the same web page.

// --[EXAMPLE FROM HERE]
// async function loadRiveFile(url) {
//   const buffer = await (await fetch(new Request(url))).arrayBuffer();
//   const riveFile = new rive.RiveFile({
//     src: "https://cdn.rive.app/animations/vehicles.riv",
//   });
//   await riveFile.init();
//   return riveFile;
// }

// async function fileExample() {
//   const riveFile = await loadRiveFile(
//     "https://cdn.rive.app/animations/vehicles.riv"
//   );

//   const riveInstance = new rive.Rive({
//     // File .riv asset.
//     riveFile: riveFile,
//     stateMachines: "bumpy",
//     canvas: riveCanvas,
//     autoplay: true,
//     onLoad: () => {
//       riveInstance.resizeDrawingSurfaceToCanvas();
//     },
//   });
// }

// fileExample();
// --[EXAMPLE TO HERE]

// ---- [END - OPTION 4]
// ---- PARSED RIVE FILE EXAMPLE
