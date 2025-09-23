import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const FormspreeInstructions = () => {
  return (
    <Alert className="mb-8">
      <Info className="h-4 w-4" />
      <AlertDescription>
        <strong>To enable form functionality:</strong>
        <ol className="mt-2 ml-4 list-decimal space-y-1">
          <li>Create a free account at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-primary underline">formspree.io</a></li>
          <li>Create a new form and get your form ID</li>
          <li>Replace "YOUR_FORM_ID" in Contact.tsx with your actual form ID</li>
          <li>Replace "YOUR_NEWSLETTER_FORM_ID" in Blog.tsx and BlogDetail.tsx for newsletter functionality</li>
        </ol>
        <p className="mt-2 text-sm text-muted-foreground">
          Forms are already configured with proper validation, loading states, and toast notifications.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default FormspreeInstructions;