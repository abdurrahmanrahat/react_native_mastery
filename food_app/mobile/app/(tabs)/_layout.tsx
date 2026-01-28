import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import React from "react";

const TabsLayout = () => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) return <Redirect href={`/(auth)/signin`} />;
  return <Stack />;
};

export default TabsLayout;
