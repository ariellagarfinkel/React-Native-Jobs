// import "expo-router/entry";
// import { registerRootComponent } from 'expo';
// import { ExpoRoot } from 'expo-router';

// // Must be exported or Fast Refresh won't update the context
// export function App() {
//   const ctx = require.context('./app');
//   // const ctx = require.context('./app', true, /\.tsx?$/);
//   return <ExpoRoot context={ctx} />;
// }

// registerRootComponent(App);

import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);


