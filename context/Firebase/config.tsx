export const firebaseEnv = process.env.REACT_APP_ENV;

// const firebaseConfig = {
//   apiKey: "AIzaSyBQI9-jlqRiz2whN8WDcFyKg9E-1O2lxrs",
//   authDomain: "bic-soleil-competition.firebaseapp.com",
//   projectId: "bic-soleil-competition",
//   storageBucket: "bic-soleil-competition.appspot.com",
//   messagingSenderId: "421218615177",
//   appId: "1:421218615177:web:f7da2ed380d50964e3ab58",
//   measurementId: "G-TYL9CGYNHT",
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// export const stagingConfig = {
//   apiKey: "AIzaSyBI1GYdv6SPgOKEHcELy_4YqRnc3vH60ew",
//   authDomain: "bic-soleil-staging.firebaseapp.com",
//   projectId: "bic-soleil-staging",
//   storageBucket: "bic-soleil-staging.appspot.com",
//   messagingSenderId: "155205438674",
//   appId: "1:155205438674:web:ce5f3d18b286a12d06b10b",
// };

export default firebaseConfig;
