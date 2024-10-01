// import logo from "./extensions/?.png";
// Property Abyan's Lab

const config = {
  // Replace the Strapi logo in auth (login) views
//   auth: {
//     logo,
//   },
//   // Replace the favicon
//   head: {
//     favicon: logo,
//   },
//   // Replace the Strapi logo in the main navigation
//   menu: {
//     logo,
//   },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Web Admin Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Dashboard Web ADMIN SMK 1 ADIWERNA",

      "Auth.form.welcome.title": "Selamat Datang Kembali",

      "Auth.form.welcome.subtitle": "Masuk Menggunakan Akun Anda",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};