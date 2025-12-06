import React from "react";
import LoadingTransitionWrapper from "@/components/LoadingTransitionWrapper";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <LoadingTransitionWrapper>
      <PageContent />
    </LoadingTransitionWrapper>
  );
}
