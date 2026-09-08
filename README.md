# Boilerplate React Native Expo (Expo Router)

> A modern, production-ready React Native boilerplate built with Expo,
> Expo Router, TypeScript, NativeWind, Supabase, and Clerk
> authentication.

------------------------------------------------------------------------

# Overview

This boilerplate provides a scalable foundation for building
cross-platform mobile apps (iOS, Android, and Web) using the Expo
ecosystem. It includes routing, authentication, styling, animations,
data fetching, and best practices already configured.

It is designed to help developers quickly start building apps without
worrying about repetitive setup.

------------------------------------------------------------------------

# Core Technologies

## Expo

Expo is a platform and toolchain that simplifies React Native
development. It allows you to:

-   Run apps on iOS, Android, and Web
-   Use native APIs without writing native code
-   Develop faster with hot reload
-   Easily build and deploy apps

Docs: https://docs.expo.dev

------------------------------------------------------------------------

## Expo Router (Important)

This project uses Expo Router, a file-based routing system built on top
of React Navigation.

Instead of manually configuring navigation, routing is handled
automatically based on your folder structure.

Example:

    app/
     ├── index.tsx        -> "/"
     ├── login.tsx        -> "/login"
     └── profile/
          └── index.tsx   -> "/profile"

Benefits:

-   File-based routing
-   Nested layouts
-   Deep linking support
-   Type-safe routing
-   Easier navigation management

Example navigation:

``` tsx
import { Link } from "expo-router";

<Link href="/profile">Go to profile</Link>
```

Example navigation programmatically:

``` tsx
import { router } from "expo-router";

router.push("/profile");
```

------------------------------------------------------------------------

# Features Included

## Routing

-   Expo Router v6
-   File-based routing
-   Nested layouts
-   Stack navigation
-   Tab navigation ready

## Authentication

-   Clerk authentication ready
-   Secure token storage using Expo SecureStore

## Backend Integration

-   Supabase client configured
-   API handling with Apisauce
-   Async storage support

## Styling

-   NativeWind (TailwindCSS for React Native)
-   Tailwind Variants
-   Gluestack UI components

Example:

``` tsx
<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-xl font-bold text-blue-500">
    Hello World
  </Text>
</View>
```

------------------------------------------------------------------------

## Animation

-   React Native Reanimated
-   Legend Motion

------------------------------------------------------------------------

## Icons

-   Lucide React Native
-   Expo Vector Icons

------------------------------------------------------------------------

## Fonts and Assets

-   Expo Font support
-   Expo Splash Screen

------------------------------------------------------------------------

## Device APIs Included

-   Notifications
-   Location
-   Haptics
-   Secure Storage
-   Linking

------------------------------------------------------------------------

# Project Structure

    .
    ├── app/                    # Main routing folder (Expo Router)
    │   ├── _layout.tsx        # Root layout
    │   ├── index.tsx          # Home screen
    │   └── (auth)/            # Auth routes group
    │
    ├── components/            # Reusable UI components
    ├── hooks/                 # Custom hooks
    ├── services/              # API services
    ├── lib/                   # Utilities
    ├── constants/             # Constants
    ├── assets/                # Images, fonts
    ├── scripts/               # Project scripts
    └── package.json

------------------------------------------------------------------------

# Installation

## Requirements

-   Node.js 18+
-   Yarn 4+
-   Expo CLI

Install Expo CLI:

    npm install -g expo

------------------------------------------------------------------------

## Install dependencies

    yarn install

------------------------------------------------------------------------

# Running the Project

## Start development

    yarn start

------------------------------------------------------------------------

## Run Android

    yarn android

------------------------------------------------------------------------

## Run iOS

    yarn ios

Mac only

------------------------------------------------------------------------

## Run Web

    yarn web

------------------------------------------------------------------------

# Scripts

  Script               Description
  -------------------- -------------------------------
  yarn start           Start Expo development server
  yarn android         Run Android
  yarn ios             Run iOS
  yarn web             Run Web
  yarn lint            Run ESLint
  yarn reset-project   Reset project state

------------------------------------------------------------------------

# Navigation Guide (Expo Router)

## Create a new screen

Create file:

    app/settings.tsx

Access via:

    /settings

------------------------------------------------------------------------

## Create nested route

    app/profile/index.tsx

Access:

    /profile

------------------------------------------------------------------------

## Layout example

    app/_layout.tsx

``` tsx
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack />;
}
```

------------------------------------------------------------------------

# Styling Guide (NativeWind)

Example:

    className="flex-1 items-center justify-center bg-black"

Tailwind classes work like web TailwindCSS.

------------------------------------------------------------------------

# State Management

Recommended:

-   React Query (included)
-   Zustand (optional)

Example React Query:

``` tsx
const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

------------------------------------------------------------------------

# Authentication Flow (Clerk)

Typical flow:

1.  User login
2.  Clerk handles session
3.  Store token securely
4.  Access protected routes

------------------------------------------------------------------------

# Production Build

Build Android:

    expo build:android

Build iOS:

    expo build:ios

Or use EAS:

    npx expo prebuild
    npx expo run:android

------------------------------------------------------------------------

# Best Practices Included

-   TypeScript configured
-   Clean architecture ready
-   Modular structure
-   Scalable routing
-   Production-ready setup

------------------------------------------------------------------------

# Recommended Extensions

VSCode:

-   ES7 React snippets
-   Tailwind IntelliSense
-   Expo Tools

------------------------------------------------------------------------

# Summary

This boilerplate provides:

-   Modern Expo architecture
-   File-based routing with Expo Router
-   Authentication ready
-   Supabase ready
-   Tailwind styling
-   Production-ready structure

It helps you start building scalable mobile apps immediately.

------------------------------------------------------------------------

# Author

Quang Le

------------------------------------------------------------------------