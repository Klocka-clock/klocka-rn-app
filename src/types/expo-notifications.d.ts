declare module 'expo-notifications' {
  // Minimal ambient declaration to satisfy TS when using Yarn PnP/monorepo setups.
  // We only need the functions we call; mark as any to avoid typing friction.
  const Notifications: any;
  export = Notifications;
}


