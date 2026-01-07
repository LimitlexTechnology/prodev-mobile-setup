# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

---

## Scaffolding & Reset Observations

### Scaffolding Process
1.  **Project Initialization**:
    -   Executed `npx create-expo-app@latest prodev-mobile-app-0x00` to create the project using the latest Expo Router template.
    -   This established the initial file structure, including the `app` directory with tab-based navigation.

2.  **Home Screen Modification**:
    -   Located `app/(tabs)/index.tsx`.
    -   Changed the "Welcome!" text to "**First App Created**".
    -   Verified the application runs using `npx expo start`.

### Reset Project Observations
Running `npm run reset-project` performed the following actions:
1.  **Backup**: It moved the existing `app`, `components`, `hooks`, `constants`, and `scripts` directories into a new `app-example` directory.
2.  **Clean State**: It created a new, minimal `app` directory containing only `index.tsx` and `_layout.tsx`.
3.  **Result**: The project was effectively reset to a blank slate for fresh development, while preserving the original example code in `app-example` for reference.
