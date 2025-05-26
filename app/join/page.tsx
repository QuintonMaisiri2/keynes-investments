import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Why from "@/components/why";
import { Textarea } from "@/components/ui/textarea";
import Involved from "@/components/involved";
import Benefits from "@/components/benefits";
import Apply from "@/components/apply";

export default function JoinPage() {
  return (
    <div className="font-ebgaramond">
      <PageHeader
        title="Join the Fund"
        description="Become part of a student-led investment team focused on learning, growth, and positive impact."
        imageUrl="/images/join.jpg"
      />
      <Why />

      <Involved />

      {/* <Benefits /> */}
      <Apply />
    </div>
  );
}
