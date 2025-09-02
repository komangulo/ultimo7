import React from 'react';
import CommentForm from './CommentForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CommentSectionProps {
  pageId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ pageId }) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Contáctame</CardTitle>
      </CardHeader>
      <CardContent>
        <CommentForm pageId={pageId} />
      </CardContent>
    </Card>
  );
};

export default CommentSection;
