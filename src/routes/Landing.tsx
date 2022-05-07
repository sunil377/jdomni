import { useTitle } from "../hooks/useTitle";
import { ActionLayout } from "../layout/ActionLayout";
import { CommentLayout } from "../layout/CommentLayout";
import { ContactLayout } from "../layout/ContactLayout";
import { FeatureLayout } from "../layout/FeatureLayout";
import { FooterLayout } from "../layout/FooterLayout";
import { Navbar } from "../layout/Navbar/Navbar";
import { PowerFullEditorLayout } from "../layout/PowerFullEditorLayout";
import { StartUpLayout } from "../layout/StartUpLayout";
import { WebsitesLayout } from "../layout/WebsitesLayout";

export const Landing = () => {
  useTitle();

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <ActionLayout />
        <StartUpLayout />
        <PowerFullEditorLayout />
        <FeatureLayout />
        <WebsitesLayout />
        <CommentLayout />
        <ContactLayout />
        <FooterLayout />
      </main>
    </>
  );
};
